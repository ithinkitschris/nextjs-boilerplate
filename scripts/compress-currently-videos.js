#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration for currently.js videos
const CURRENTLY_VIDEOS = [
  {
    input: 'public/subway/cover2.mp4',
    outputDir: 'public/optimized/subway',
    name: 'subway-cover'
  },
  {
    input: 'public/expense/cover.mp4',
    outputDir: 'public/optimized/expense', 
    name: 'expense-cover'
  },
  {
    input: 'public/currently/car.mp4',
    outputDir: 'public/optimized/currently',
    name: 'car'
  },
  {
    input: 'public/website/coverproper.mp4',
    outputDir: 'public/optimized/website',
    name: 'website-cover'
  }
];

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

// Process a single video
function processVideo(videoConfig) {
  console.log(`\n🎬 Processing: ${path.basename(videoConfig.input)}`);
  
  // Check if input file exists
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
  console.log('🎥 Currently.js Video Compression');
  console.log('=================================\n');
  
  if (!checkFFmpeg()) {
    process.exit(1);
  }
  
  // Process each video
  let totalProcessed = 0;
  let totalSuccess = 0;
  
  CURRENTLY_VIDEOS.forEach((videoConfig, index) => {
    console.log(`\n[${index + 1}/${CURRENTLY_VIDEOS.length}]`);
    if (processVideo(videoConfig)) {
      totalSuccess++;
    }
    totalProcessed++;
  });
  
  // Summary
  console.log('\n📊 Compression Summary');
  console.log('=====================');
  console.log(`Total videos: ${CURRENTLY_VIDEOS.length}`);
  console.log(`Successfully processed: ${totalSuccess}`);
  console.log(`Failed: ${totalProcessed - totalSuccess}`);
  console.log(`\nOptimized videos saved to: public/optimized/`);
  
  // Calculate total size reduction
  let originalTotalSize = 0;
  let optimizedTotalSize = 0;
  
  CURRENTLY_VIDEOS.forEach(videoConfig => {
    if (fs.existsSync(videoConfig.input)) {
      originalTotalSize += fs.statSync(videoConfig.input).size;
    }
  });
  
  if (fs.existsSync('public/optimized')) {
    function calculateOptimizedSize(dir) {
      const items = fs.readdirSync(dir);
      let size = 0;
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          size += calculateOptimizedSize(fullPath);
        } else if (['.mp4', '.webm'].includes(path.extname(item).toLowerCase())) {
          size += stat.size;
        }
      });
      
      return size;
    }
    
    optimizedTotalSize = calculateOptimizedSize('public/optimized');
  }
  
  const totalReduction = ((originalTotalSize - optimizedTotalSize) / originalTotalSize * 100).toFixed(1);
  console.log(`\n💾 Size reduction: ${(originalTotalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedTotalSize / 1024 / 1024).toFixed(1)}MB (${totalReduction}% smaller)`);
  
  console.log('\n🎯 Next Steps:');
  console.log('1. Test the optimized videos in your browser');
  console.log('2. Update currently.js to use optimized paths');
  console.log('3. Deploy the optimized videos');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, CURRENTLY_VIDEOS }; 