#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Test configuration - just one video
const TEST_CONFIG = {
  inputFile: 'public/CCS/End Frame (New York City) 16-9.mp4',
  outputDir: 'public/test-optimized',
  formats: ['webm', 'mp4'],
  resolutions: [
    { name: '480p', height: 480 },
    { name: '720p', height: 720 }
  ],
  quality: {
    webm: { crf: 30, preset: 'fast' },
    mp4: { crf: 28, preset: 'fast' }
  }
};

// Check if test file exists
function checkTestFile() {
  if (!fs.existsSync(TEST_CONFIG.inputFile)) {
    console.error(`❌ Test file not found: ${TEST_CONFIG.inputFile}`);
    return false;
  }
  return true;
}

// Get video information
function getVideoInfo(filePath) {
  try {
    const output = execSync(`ffprobe -v quiet -print_format json -show_format -show_streams "${filePath}"`, { encoding: 'utf8' });
    return JSON.parse(output);
  } catch (error) {
    console.error(`❌ Error getting video info:`, error.message);
    return null;
  }
}

// Calculate dimensions
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
    console.error(`❌ Error compressing:`, error.message);
    return false;
  }
}

// Main test function
function runTest() {
  console.log('🧪 Video Compression Test');
  console.log('=========================\n');
  
  if (!checkTestFile()) {
    return;
  }
  
  // Create output directory
  if (!fs.existsSync(TEST_CONFIG.outputDir)) {
    fs.mkdirSync(TEST_CONFIG.outputDir, { recursive: true });
  }
  
  // Get video info
  console.log('📊 Analyzing test video...');
  const videoInfo = getVideoInfo(TEST_CONFIG.inputFile);
  if (!videoInfo) return;
  
  const videoStream = videoInfo.streams.find(s => s.codec_type === 'video');
  if (!videoStream) {
    console.error('❌ No video stream found');
    return;
  }
  
  const originalWidth = parseInt(videoStream.width);
  const originalHeight = parseInt(videoStream.height);
  const originalSize = fs.statSync(TEST_CONFIG.inputFile).size;
  
  console.log(`📹 Original: ${originalWidth}x${originalHeight}, ${(originalSize / 1024 / 1024).toFixed(1)}MB\n`);
  
  // Process each format and resolution
  let successCount = 0;
  const totalCompressions = TEST_CONFIG.formats.length * TEST_CONFIG.resolutions.length;
  
  TEST_CONFIG.formats.forEach(format => {
    TEST_CONFIG.resolutions.forEach(resolution => {
      const dimensions = calculateDimensions(originalWidth, originalHeight, resolution.height);
      const outputFileName = `test_${resolution.name}.${format}`;
      const outputPath = path.join(TEST_CONFIG.outputDir, outputFileName);
      
      if (compressVideo(TEST_CONFIG.inputFile, outputPath, format, dimensions, TEST_CONFIG.quality[format])) {
        successCount++;
      }
    });
  });
  
  // Summary
  console.log('\n📊 Test Results');
  console.log('===============');
  console.log(`Successfully compressed: ${successCount}/${totalCompressions} versions`);
  console.log(`Output directory: ${TEST_CONFIG.outputDir}`);
  
  // Show file sizes
  if (fs.existsSync(TEST_CONFIG.outputDir)) {
    console.log('\n📁 Generated files:');
    const files = fs.readdirSync(TEST_CONFIG.outputDir);
    files.forEach(file => {
      const filePath = path.join(TEST_CONFIG.outputDir, file);
      const size = fs.statSync(filePath).size;
      console.log(`  ${file}: ${(size / 1024 / 1024).toFixed(1)}MB`);
    });
  }
  
  console.log('\n✅ Test completed! Check the output files to verify quality.');
}

// Run the test
if (require.main === module) {
  runTest();
}

module.exports = { runTest }; 