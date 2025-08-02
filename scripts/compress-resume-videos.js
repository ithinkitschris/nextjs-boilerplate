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

// All videos used in resume-related components
const RESUME_VIDEOS = [
  // Best Work videos
  {
    name: 'bestworkmontage',
    input: 'public/CCS/bestworkmontage.mp4',
    outputDir: 'public/optimized/CCS'
  },
  {
    name: 'ghibli-banner1',
    input: 'public/Ghibli/banner1.mp4',
    outputDir: 'public/optimized/Ghibli'
  },
  {
    name: 'cocktail-cover2',
    input: 'public/Cocktail/cover2.mp4',
    outputDir: 'public/optimized/Cocktail'
  },
  {
    name: 'hemsaker-cover',
    input: 'public/Hemsaker/cover.mp4',
    outputDir: 'public/optimized/Hemsaker'
  },
  {
    name: 'lounge-montage',
    input: 'public/lounge/montage.mp4',
    outputDir: 'public/optimized/lounge'
  },
  
  // Motion videos
  {
    name: 'nike-cover',
    input: 'public/nike/cover.mp4',
    outputDir: 'public/optimized/nike'
  },
  {
    name: 'jollieverafter-favpagecover',
    input: 'public/jollieverafter/favpagecover.mp4',
    outputDir: 'public/optimized/jollieverafter'
  },
  {
    name: '3dpersonal-glass1',
    input: 'public/3dpersonal/glass1.mp4',
    outputDir: 'public/optimized/3dpersonal'
  },
  {
    name: 'samsung-montage',
    input: 'public/samsung/montage.mp4',
    outputDir: 'public/optimized/samsung'
  },
  
  // Content videos
  {
    name: 'content-taycan',
    input: 'public/content/taycan.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-m3',
    input: 'public/content/m3.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-ontheroadc43',
    input: 'public/content/ontheroadc43.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-ontheroad1_1',
    input: 'public/content/ontheroad1_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-ontheroad3_1',
    input: 'public/content/ontheroad3_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-ontheroad4_1',
    input: 'public/content/ontheroad4_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-rangefinder1_1',
    input: 'public/content/rangefinder1_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-rangefinder2_1',
    input: 'public/content/rangefinder2_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-rangefinder3_1',
    input: 'public/content/rangefinder3_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-pov2',
    input: 'public/content/pov2.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-pov3_1',
    input: 'public/content/pov3_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-pov4_1',
    input: 'public/content/pov4_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-filmvsdigital1',
    input: 'public/content/filmvsdigital1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-filmvsdigital2',
    input: 'public/content/filmvsdigital2.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-filmvsdigital3',
    input: 'public/content/filmvsdigital3.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-blender1',
    input: 'public/content/blender1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-blender2',
    input: 'public/content/blender2.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-blender3',
    input: 'public/content/blender3.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-blender4',
    input: 'public/content/blender4.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-24hours1',
    input: 'public/content/24hours1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-24hours2',
    input: 'public/content/24hours2.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-16',
    input: 'public/content/16.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-15',
    input: 'public/content/15.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-14',
    input: 'public/content/14.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-11',
    input: 'public/content/11.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-4_1',
    input: 'public/content/4_1.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-3',
    input: 'public/content/3.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-17',
    input: 'public/content/17.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-5',
    input: 'public/content/5.mp4',
    outputDir: 'public/optimized/content'
  },
  {
    name: 'content-2',
    input: 'public/content/2.mp4',
    outputDir: 'public/optimized/content'
  },
  
  // Product videos (some may already be optimized)
  {
    name: 'subway-cover',
    input: 'public/subway/cover.mp4',
    outputDir: 'public/optimized/subway'
  },
  {
    name: 'website-cover',
    input: 'public/website/cover.mp4',
    outputDir: 'public/optimized/website'
  },
  {
    name: 'car',
    input: 'public/currently/car.mp4',
    outputDir: 'public/optimized/currently'
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
  console.log('🎥 Resume Videos Compression Pipeline');
  console.log('=====================================\n');
  
  if (!checkFFmpeg()) {
    process.exit(1);
  }
  
  // Process each video
  let totalProcessed = 0;
  let totalSuccess = 0;
  
  RESUME_VIDEOS.forEach((videoConfig, index) => {
    console.log(`\n[${index + 1}/${RESUME_VIDEOS.length}]`);
    if (processVideo(videoConfig)) {
      totalSuccess++;
    }
    totalProcessed++;
  });
  
  // Summary
  console.log('\n📊 Compression Summary');
  console.log('=====================');
  console.log(`Total videos: ${RESUME_VIDEOS.length}`);
  console.log(`Successfully processed: ${totalSuccess}`);
  console.log(`Failed: ${totalProcessed - totalSuccess}`);
  console.log(`\nOptimized videos saved to: public/optimized/`);
  
  // Calculate total size reduction
  let originalTotalSize = 0;
  let optimizedTotalSize = 0;
  
  RESUME_VIDEOS.forEach(videoConfig => {
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
    
    console.log(`\n📈 Size Analysis:`);
    console.log(`Original total: ${(originalTotalSize / 1024 / 1024).toFixed(1)}MB`);
    console.log(`Optimized total: ${(optimizedTotalSize / 1024 / 1024).toFixed(1)}MB`);
    console.log(`Size reduction: ${(originalTotalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedTotalSize / 1024 / 1024).toFixed(1)}MB (${((originalTotalSize - optimizedTotalSize) / originalTotalSize * 100).toFixed(1)}% smaller)`);
  }
  
  console.log('\n✅ Resume video compression completed!');
}

// Run the script
if (require.main === module) {
  main();
} 