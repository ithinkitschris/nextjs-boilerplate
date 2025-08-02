#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  inputDir: 'public',
  outputDir: 'public/optimized',
  formats: ['webm', 'mp4'],
  resolutions: [
    { name: '480p', height: 480, maxBitrate: '800k' },
    { name: '720p', height: 720, maxBitrate: '1500k' },
    { name: '1080p', height: 1080, maxBitrate: '3000k' }
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
    console.error('   Windows: Download from https://ffmpeg.org/');
    console.error('   Linux: sudo apt install ffmpeg');
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

// Calculate aspect ratio and width
function calculateDimensions(originalWidth, originalHeight, targetHeight) {
  const aspectRatio = originalWidth / originalHeight;
  const newWidth = Math.round(targetHeight * aspectRatio);
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
    console.log(`🔄 Compressing: ${path.basename(inputPath)} → ${format} ${resolution.name}`);
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

// Process a single video file
function processVideo(filePath) {
  console.log(`\n🎬 Processing: ${path.basename(filePath)}`);
  
  const videoInfo = getVideoInfo(filePath);
  if (!videoInfo) return false;
  
  const videoStream = videoInfo.streams.find(s => s.codec_type === 'video');
  if (!videoStream) {
    console.error('❌ No video stream found');
    return false;
  }
  
  const originalWidth = parseInt(videoStream.width);
  const originalHeight = parseInt(videoStream.height);
  const originalSize = fs.statSync(filePath).size;
  
  console.log(`📊 Original: ${originalWidth}x${originalHeight}, ${(originalSize / 1024 / 1024).toFixed(1)}MB`);
  
  let successCount = 0;
  const totalCompressions = CONFIG.formats.length * CONFIG.resolutions.length;
  
  // Create output directory
  const relativePath = path.relative(CONFIG.inputDir, filePath);
  const outputBaseDir = path.join(CONFIG.outputDir, path.dirname(relativePath));
  fs.mkdirSync(outputBaseDir, { recursive: true });
  
  // Process each format and resolution
  CONFIG.formats.forEach(format => {
    CONFIG.resolutions.forEach(resolution => {
      const dimensions = calculateDimensions(originalWidth, originalHeight, resolution.height);
      const outputFileName = `${path.parse(path.basename(filePath)).name}_${resolution.name}.${format}`;
      const outputPath = path.join(outputBaseDir, outputFileName);
      
      if (compressVideo(filePath, outputPath, format, resolution, CONFIG.quality[format])) {
        successCount++;
      }
    });
  });
  
  console.log(`📈 Success: ${successCount}/${totalCompressions} compressions completed`);
  return successCount === totalCompressions;
}

// Find all video files
function findVideoFiles(dir) {
  const videoExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];
  const videos = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (videoExtensions.includes(path.extname(item).toLowerCase())) {
        videos.push(fullPath);
      }
    });
  }
  
  scanDirectory(dir);
  return videos;
}

// Main function
function main() {
  console.log('🎥 Video Compression Pipeline');
  console.log('=============================\n');
  
  if (!checkFFmpeg()) {
    process.exit(1);
  }
  
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  // Find all video files
  console.log('🔍 Scanning for video files...');
  const videoFiles = findVideoFiles(CONFIG.inputDir);
  console.log(`📁 Found ${videoFiles.length} video files\n`);
  
  if (videoFiles.length === 0) {
    console.log('No video files found to process.');
    return;
  }
  
  // Process each video
  let processedCount = 0;
  let successCount = 0;
  
  videoFiles.forEach((videoPath, index) => {
    console.log(`\n[${index + 1}/${videoFiles.length}]`);
    if (processVideo(videoPath)) {
      successCount++;
    }
    processedCount++;
  });
  
  // Summary
  console.log('\n📊 Compression Summary');
  console.log('=====================');
  console.log(`Total videos: ${videoFiles.length}`);
  console.log(`Successfully processed: ${successCount}`);
  console.log(`Failed: ${processedCount - successCount}`);
  console.log(`\nOptimized videos saved to: ${CONFIG.outputDir}`);
  
  // Calculate total size reduction
  let originalTotalSize = 0;
  let optimizedTotalSize = 0;
  
  videoFiles.forEach(videoPath => {
    originalTotalSize += fs.statSync(videoPath).size;
  });
  
  if (fs.existsSync(CONFIG.outputDir)) {
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
    
    optimizedTotalSize = calculateOptimizedSize(CONFIG.outputDir);
  }
  
  const totalReduction = ((originalTotalSize - optimizedTotalSize) / originalTotalSize * 100).toFixed(1);
  console.log(`\n💾 Size reduction: ${(originalTotalSize / 1024 / 1024 / 1024).toFixed(1)}GB → ${(optimizedTotalSize / 1024 / 1024 / 1024).toFixed(1)}GB (${totalReduction}% smaller)`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, CONFIG }; 