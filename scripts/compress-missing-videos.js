#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    formats: ['webm', 'mp4'],
    resolutions: [
        { name: '480p', height: 480 },
        { name: '720p', height: 720 },
        { name: '1080p', height: 1080 }
    ],
    quality: {
        webm: { crf: 30, preset: 'fast' },
        mp4: { crf: 28, preset: 'fast' }
    }
};

// Only the videos that are missing optimized versions
// Based on analysis of resume.js and videoData.js
const MISSING_VIDEOS = [
    // Resume.js hover popup videos
    {
        name: 'isv-montagenew',
        input: 'public/isv/montagenew.mp4',
        outputDir: 'public/optimized/isv'
    },
    {
        name: 'ghibli-KVanimated',
        input: 'public/ghibli/KVanimated.mp4',
        outputDir: 'public/optimized/ghibli'
    },
    {
        name: 'subway-cover_blank',
        input: 'public/subway/cover_blank.mp4',
        outputDir: 'public/optimized/subway'
    },
    {
        name: 'bloom-talk',
        input: 'public/bloom/talk.mp4',
        outputDir: 'public/optimized/bloom'
    },
    {
        name: 'thesis-lifeoscover',
        input: 'public/thesis/lifeoscover.mp4',
        outputDir: 'public/optimized/thesis'
    },
    // VideoData.js archive grid video
    {
        name: 'thesis-lifeoscover2',
        input: 'public/thesis/lifeoscover2.mp4',
        outputDir: 'public/optimized/thesis'
    }
];

// Check if FFmpeg is installed
function checkFFmpeg() {
    try {
        execSync('ffmpeg -version', { stdio: 'ignore' });
        console.log('✅ FFmpeg is installed');
        return true;
    } catch (error) {
        console.error('❌ FFmpeg is not installed. Please install it first:');
        console.error('   macOS: brew install ffmpeg');
        console.error('   Ubuntu: sudo apt install ffmpeg');
        console.error('   Windows: Download from https://ffmpeg.org/download.html');
        return false;
    }
}

// Get video information
function getVideoInfo(filePath) {
    try {
        const output = execSync(`ffprobe -v quiet -print_format json -show_format -show_streams "${filePath}"`, { encoding: 'utf8' });
        return JSON.parse(output);
    } catch (error) {
        console.error(`❌ Error getting video info for ${filePath}:`, error.message);
        return null;
    }
}

// Calculate dimensions maintaining aspect ratio
function calculateDimensions(originalWidth, originalHeight, targetHeight) {
    const aspectRatio = originalWidth / originalHeight;
    let newWidth = Math.round(targetHeight * aspectRatio);
    let newHeight = targetHeight;

    // Ensure dimensions are even for H.264 compatibility
    if (newWidth % 2 !== 0) newWidth += 1;
    if (newHeight % 2 !== 0) newHeight += 1;

    return { width: newWidth, height: newHeight };
}

// Compress video
function compressVideo(inputPath, outputPath, format, dimensions, quality) {
    try {
        const { width, height } = dimensions;
        const { crf, preset } = quality;

        let ffmpegCommand;

        if (format === 'webm') {
            ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf ${crf} -b:v 0 -vf "scale=${width}:${height}" -c:a libopus -b:a 128k -y "${outputPath}"`;
        } else if (format === 'mp4') {
            ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libx264 -crf ${crf} -preset ${preset} -vf "scale=${width}:${height}" -c:a aac -b:a 128k -movflags +faststart -y "${outputPath}"`;
        }

        execSync(ffmpegCommand, { stdio: 'pipe' });

        const originalSize = fs.statSync(inputPath).size;
        const compressedSize = fs.statSync(outputPath).size;
        const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

        console.log(`  ✅ ${format.toUpperCase()} ${dimensions.height}p: ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% smaller)`);
        return true;
    } catch (error) {
        console.error(`  ❌ Failed to compress ${format} ${dimensions.height}p:`, error.message);
        return false;
    }
}

// Process a single video
function processVideo(videoConfig) {
    console.log(`\n🎬 Processing: ${videoConfig.name}`);
    console.log(`📁 Input: ${videoConfig.input}`);

    if (!fs.existsSync(videoConfig.input)) {
        console.error(`❌ Input file not found: ${videoConfig.input}`);
        return false;
    }

    const videoInfo = getVideoInfo(videoConfig.input);
    if (!videoInfo) return false;

    const videoStream = videoInfo.streams.find(s => s.codec_type === 'video');
    if (!videoStream) {
        console.error('❌ No video stream found');
        return false;
    }

    const originalWidth = parseInt(videoStream.width);
    const originalHeight = parseInt(videoStream.height);
    const originalSize = fs.statSync(videoConfig.input).size;

    console.log(`📊 Original: ${originalWidth}x${originalHeight}, ${(originalSize / 1024 / 1024).toFixed(2)}MB`);

    // Create output directory
    fs.mkdirSync(videoConfig.outputDir, { recursive: true });

    let successCount = 0;
    const totalCompressions = CONFIG.formats.length * CONFIG.resolutions.length;

    // Process each format and resolution
    CONFIG.formats.forEach(format => {
        CONFIG.resolutions.forEach(resolution => {
            const dimensions = calculateDimensions(originalWidth, originalHeight, resolution.height);
            const outputFileName = `${videoConfig.name}_${resolution.name}.${format}`;
            const outputPath = path.join(videoConfig.outputDir, outputFileName);

            if (compressVideo(videoConfig.input, outputPath, format, dimensions, CONFIG.quality[format])) {
                successCount++;
            }
        });
    });

    console.log(`📈 Success: ${successCount}/${totalCompressions} compressions completed`);
    return successCount === totalCompressions;
}

// Main function
function main() {
    console.log('🎥 Missing Videos Compression Script');
    console.log('====================================');
    console.log(`📋 Videos to compress: ${MISSING_VIDEOS.length}\n`);

    // List videos to be processed
    console.log('Videos scheduled for compression:');
    MISSING_VIDEOS.forEach((v, i) => {
        console.log(`  ${i + 1}. ${v.name} (${v.input})`);
    });

    if (!checkFFmpeg()) {
        process.exit(1);
    }

    // Process each video
    let totalProcessed = 0;
    let totalSuccess = 0;

    MISSING_VIDEOS.forEach((videoConfig, index) => {
        console.log(`\n[${index + 1}/${MISSING_VIDEOS.length}]`);
        if (processVideo(videoConfig)) {
            totalSuccess++;
        }
        totalProcessed++;
    });

    // Summary
    console.log('\n📊 Compression Summary');
    console.log('=====================');
    console.log(`Total videos: ${MISSING_VIDEOS.length}`);
    console.log(`Successfully processed: ${totalSuccess}`);
    console.log(`Failed: ${totalProcessed - totalSuccess}`);

    // Calculate total size
    let originalTotalSize = 0;
    let optimizedTotalSize = 0;

    MISSING_VIDEOS.forEach(videoConfig => {
        if (fs.existsSync(videoConfig.input)) {
            originalTotalSize += fs.statSync(videoConfig.input).size;
        }

        // Calculate size of generated files
        CONFIG.formats.forEach(format => {
            CONFIG.resolutions.forEach(resolution => {
                const outputPath = path.join(videoConfig.outputDir, `${videoConfig.name}_${resolution.name}.${format}`);
                if (fs.existsSync(outputPath)) {
                    optimizedTotalSize += fs.statSync(outputPath).size;
                }
            });
        });
    });

    console.log(`\n📈 Size Analysis:`);
    console.log(`Original total: ${(originalTotalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Optimized total (all resolutions + formats): ${(optimizedTotalSize / 1024 / 1024).toFixed(2)}MB`);

    console.log('\n✅ Compression completed!');
    console.log('\n📝 Next steps:');
    console.log('   1. Update resume.js to use the optimized video paths');
    console.log('   2. Update videoData.js for thesis videos if needed');
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { MISSING_VIDEOS, CONFIG };
