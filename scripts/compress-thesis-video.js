#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration for thesis video
const THESIS_VIDEO = {
    input: 'public/thesis/cover.mp4',
    outputDir: 'public/optimized/thesis',
    name: 'thesis-cover'
};

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

// Check if FFmpeg is installed
function checkFFmpeg() {
    try {
        execSync('ffmpeg -version', { stdio: 'ignore' });
        console.log('✅ FFmpeg found');
        return true;
    } catch (error) {
        console.error('❌ FFmpeg not found. Please install FFmpeg first:');
        console.error('   macOS: brew install ffmpeg');
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

// Calculate dimensions with even numbers for H.264 compatibility
function calculateDimensions(originalWidth, originalHeight, targetHeight) {
    const aspectRatio = originalWidth / originalHeight;
    let newWidth = Math.round(targetHeight * aspectRatio);

    // Ensure even dimensions for H.264 compatibility
    if (newWidth % 2 !== 0) {
        newWidth = newWidth + 1;
    }
    if (targetHeight % 2 !== 0) {
        targetHeight = targetHeight + 1;
    }

    return { width: newWidth, height: targetHeight };
}

// Compress video
function compressVideo(inputPath, outputPath, format, resolution, quality) {
    const { width, height } = resolution;
    const { crf, preset } = quality;

    let ffmpegCommand;

    if (format === 'webm') {
        ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf ${crf} -b:v 0 -vf scale=${width}:${height} -c:a libopus -b:a 128k -preset ${preset} -y "${outputPath}"`;
    } else if (format === 'mp4') {
        ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libx264 -crf ${crf} -preset ${preset} -vf scale=${width}:${height} -c:a aac -b:a 128k -movflags +faststart -y "${outputPath}"`;
    }

    try {
        console.log(`🔄 Compressing: ${format} ${resolution.name}`);
        execSync(ffmpegCommand, { stdio: 'pipe' });

        // Get file sizes
        const originalSize = fs.statSync(inputPath).size;
        const compressedSize = fs.statSync(outputPath).size;
        const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

        console.log(`✅ ${format} ${resolution.name}: ${(compressedSize / 1024 / 1024).toFixed(1)}MB (${compressionRatio}% smaller)`);
        return true;
    } catch (error) {
        console.error(`❌ Error compressing ${inputPath}:`, error.message);
        return false;
    }
}

// Process the thesis video
function processVideo() {
    console.log(`\n🎬 Processing: ${path.basename(THESIS_VIDEO.input)}`);

    // Check if input file exists
    if (!fs.existsSync(THESIS_VIDEO.input)) {
        console.error(`❌ Input file not found: ${THESIS_VIDEO.input}`);
        return false;
    }

    const videoInfo = getVideoInfo(THESIS_VIDEO.input);
    if (!videoInfo) return false;

    const videoStream = videoInfo.streams.find(s => s.codec_type === 'video');
    if (!videoStream) {
        console.error('❌ No video stream found');
        return false;
    }

    const originalWidth = parseInt(videoStream.width);
    const originalHeight = parseInt(videoStream.height);
    const originalSize = fs.statSync(THESIS_VIDEO.input).size;

    console.log(`📊 Original: ${originalWidth}x${originalHeight}, ${(originalSize / 1024 / 1024).toFixed(1)}MB`);

    // Create output directory
    fs.mkdirSync(THESIS_VIDEO.outputDir, { recursive: true });

    let successCount = 0;
    const totalCompressions = CONFIG.formats.length * CONFIG.resolutions.length;

    // Process each format and resolution
    CONFIG.formats.forEach(format => {
        CONFIG.resolutions.forEach(resolution => {
            const dimensions = calculateDimensions(originalWidth, originalHeight, resolution.height);
            const outputFileName = `${THESIS_VIDEO.name}_${resolution.name}.${format}`;
            const outputPath = path.join(THESIS_VIDEO.outputDir, outputFileName);

            if (compressVideo(THESIS_VIDEO.input, outputPath, format, dimensions, CONFIG.quality[format])) {
                successCount++;
            }
        });
    });

    console.log(`📈 Success: ${successCount}/${totalCompressions} compressions completed`);
    return successCount === totalCompressions;
}

// Main function
function main() {
    console.log('🎥 Thesis Video Compression');
    console.log('===========================\n');

    if (!checkFFmpeg()) {
        process.exit(1);
    }

    const success = processVideo();

    // Summary
    console.log('\n📊 Compression Summary');
    console.log('=====================');
    console.log(`Status: ${success ? '✅ Success' : '❌ Failed'}`);
    console.log(`\nOptimized videos saved to: ${THESIS_VIDEO.outputDir}`);

    // Calculate size reduction
    if (success && fs.existsSync(THESIS_VIDEO.outputDir)) {
        const originalSize = fs.statSync(THESIS_VIDEO.input).size;

        let optimizedTotalSize = 0;
        const items = fs.readdirSync(THESIS_VIDEO.outputDir);
        items.forEach(item => {
            const fullPath = path.join(THESIS_VIDEO.outputDir, item);
            const stat = fs.statSync(fullPath);
            if (['.mp4', '.webm'].includes(path.extname(item).toLowerCase())) {
                optimizedTotalSize += stat.size;
            }
        });

        console.log(`\n💾 Size Analysis:`);
        console.log(`Original: ${(originalSize / 1024 / 1024).toFixed(1)}MB`);
        console.log(`Optimized (all formats): ${(optimizedTotalSize / 1024 / 1024).toFixed(1)}MB`);
        console.log(`Average per format: ${(optimizedTotalSize / items.length / 1024 / 1024).toFixed(1)}MB`);
    }

    console.log('\n🎯 Next Steps:');
    console.log('1. Test the optimized videos in your browser');
    console.log('2. The videoOptimizer.js will automatically use the optimized version');
    console.log('3. Update currently.js to enable useOptimized={true}');
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { main, THESIS_VIDEO };
