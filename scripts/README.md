# Video Compression Pipeline

This script automatically optimizes all video files in your `public/` directory for web delivery.

## How It Works

### 1. **Multi-Format Conversion**
- **WebM (VP9)**: Best compression, modern browsers
- **MP4 (H.264)**: Universal compatibility, fallback

### 2. **Multi-Resolution Strategy**
- **480p**: Mobile devices, slow connections (800kbps)
- **720p**: Tablets, medium connections (1.5Mbps)  
- **1080p**: Desktop, fast connections (3Mbps)

### 3. **Quality Optimization**
- **CRF 28-30**: Good quality with significant size reduction
- **Fast preset**: Quick encoding for development
- **AAC audio**: 128kbps for good quality/size balance

## Prerequisites

### Install FFmpeg

**macOS:**
```bash
brew install ffmpeg
```

**Windows:**
Download from https://ffmpeg.org/download.html

**Linux:**
```bash
sudo apt update && sudo apt install ffmpeg
```

## Usage

### Run Compression Pipeline
```bash
npm run compress-videos
```

### Manual Run
```bash
node scripts/video-compression.js
```

## Output Structure

```
public/
├── original-videos/
│   ├── CCS/
│   │   └── cover.mp4 (10MB)
│   └── Cocktail/
│       └── montage.mp4 (15MB)
└── optimized/
    ├── CCS/
    │   ├── cover_480p.webm (800KB)
    │   ├── cover_480p.mp4 (1MB)
    │   ├── cover_720p.webm (1.5MB)
    │   ├── cover_720p.mp4 (2MB)
    │   ├── cover_1080p.webm (3MB)
    │   └── cover_1080p.mp4 (4MB)
    └── Cocktail/
        └── ...
```

## Expected Results

### File Size Reduction
- **Original**: 1.5GB total
- **Optimized**: ~300-600MB total
- **Savings**: 60-80% size reduction

### Performance Improvements
- **Load Time**: 40-60% faster
- **Bandwidth**: 60-80% less data transfer
- **Mobile**: Much better performance on slow connections

## Configuration

Edit `scripts/compression-config.json` to customize:

```json
{
  "resolutions": [
    {
      "name": "480p",
      "height": 480,
      "maxBitrate": "800k"
    }
  ],
  "quality": {
    "webm": {
      "crf": 30,
      "preset": "fast"
    }
  }
}
```

## Integration with Your Site

After compression, update your video components to use optimized files:

```javascript
// Before
<Video src="/CCS/cover.mp4" />

// After - with format detection
<Video 
  src={getOptimalVideoFormat() === 'webm' 
    ? '/optimized/CCS/cover_720p.webm' 
    : '/optimized/CCS/cover_720p.mp4'
  } 
/>
```

## Troubleshooting

### FFmpeg Not Found
```bash
# Check if installed
ffmpeg -version

# Install if missing
brew install ffmpeg  # macOS
```

### Permission Errors
```bash
# Make script executable
chmod +x scripts/video-compression.js
```

### Out of Disk Space
- The script creates 6 versions of each video (2 formats × 3 resolutions)
- Ensure you have ~2-3x the original size available
- Consider running on external drive if needed

## Next Steps

1. **Run compression**: `npm run compress-videos`
2. **Test optimized videos**: Check quality and performance
3. **Update components**: Modify Video components to use optimized files
4. **Deploy**: Replace original videos with optimized versions
5. **Monitor**: Use browser dev tools to verify performance improvements 