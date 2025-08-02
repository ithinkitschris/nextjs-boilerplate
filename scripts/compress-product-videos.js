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

// Product videos that need compression
const PRODUCT_VIDEOS = [
  {
    name: 'subway-cover',
    input: 'public/subway/cover.mp4',
    outputDir: 'public/optimized/subway'
  },
  {
    name: 'website-cover',
    input: 'public/website/cover.mp4',
    outputDir: 'public/optimized/website'
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
      ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf ${crf} -preset ${preset} -vf "scale=${width}:${height}" -c:a libopus -b:a 128k "${outputPath}" -y`;
    } else if (format === 'mp4') {
      ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libx264 -crf ${crf} -preset ${preset} -vf "scale=${width}:${height}" -c:a aac -b:a 128k "${outputPath}" -y`;
    }
    
    execSync(ffmpegCommand, { stdio: 'pipe' });
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`  ✅ ${format.toUpperCase()} ${dimensions.height}p: ${(compressedSize / 1024 / 1024).toFixed(1)}MB (${reduction}% smaller)`);
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
  
  console.log(`📊 Original: ${originalWidth}x${originalHeight}, ${(originalSize / 1024 / 1024).toFixed(1)}MB`);
  
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
  console.log('🎥 Product Videos Compression');
  console.log('=============================\n');
  
  if (!checkFFmpeg()) {
    process.exit(1);
  }
  
  // Process each video
  let totalProcessed = 0;
  let totalSuccess = 0;
  
  PRODUCT_VIDEOS.forEach((videoConfig, index) => {
    console.log(`\n[${index + 1}/${PRODUCT_VIDEOS.length}]`);
    if (processVideo(videoConfig)) {
      totalSuccess++;
    }
    totalProcessed++;
  });
  
  // Summary
  console.log('\n📊 Compression Summary');
  console.log('=====================');
  console.log(`Total videos: ${PRODUCT_VIDEOS.length}`);
  console.log(`Successfully processed: ${totalSuccess}`);
  console.log(`Failed: ${totalProcessed - totalSuccess}`);
  console.log(`\nOptimized videos saved to: public/optimized/`);
  
  console.log('\n✅ Product video compression completed!');
}

// Run the script
if (require.main === module) {
  main();
} 