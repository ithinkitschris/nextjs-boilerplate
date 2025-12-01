// Video optimization utility for selecting the best format and resolution

// Check if browser supports WebM
const supportsWebM = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  try {
    const video = document.createElement('video');
    return video.canPlayType('video/webm; codecs="vp9"') !== '';
  } catch (error) {
    return false;
  }
};

// Check if browser supports MP4 H.264
const supportsMP4 = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return true; // Default to true for SSR
  try {
    const video = document.createElement('video');
    return video.canPlayType('video/mp4; codecs="avc1.42E01E"') !== '';
  } catch (error) {
    return true; // Default to true for SSR
  }
};

// Get optimal video format based on browser support
export const getOptimalFormat = () => {
  if (supportsWebM()) {
    return 'webm';
  } else if (supportsMP4()) {
    return 'mp4';
  }
  return 'mp4'; // Fallback
};

// Get optimal resolution based on screen size and connection
export const getOptimalResolution = () => {
  if (typeof window === 'undefined') return '720p'; // Default for SSR
  
  const width = window.innerWidth;
  const connection = navigator.connection || navigator.mozConnection;
  
  // Check connection speed
  let connectionSpeed = 'fast';
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      connectionSpeed = 'slow';
    } else if (connection.effectiveType === '3g') {
      connectionSpeed = 'medium';
    }
  }
  
  // Mobile devices
  if (width <= 768) {
    return connectionSpeed === 'slow' ? '480p' : '720p';
  }
  
  // Tablet devices
  if (width <= 1024) {
    return connectionSpeed === 'slow' ? '720p' : '720p';
  }
  
  // Desktop devices
  return connectionSpeed === 'slow' ? '720p' : '720p';
};

// Get optimized video path
export const getOptimizedVideoPath = (originalPath, options = {}) => {
  const {
    format = getOptimalFormat(),
    resolution = getOptimalResolution(),
    fallbackToOriginal = true
  } = options;
  
  // Extract path components
  const pathParts = originalPath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const directory = pathParts.slice(1, -1).join('/');
  
  // Map original filenames to the naming convention used by compression script
  // Use full path as key to avoid conflicts
  const getBaseName = (originalPath, fileName) => {
    const pathMap = {
      // Currently videos
      '/subway/cover2.mp4': 'subway-cover',
      '/expense/cover.mp4': 'expense-cover', 
      '/currently/car.mp4': 'car',
      '/website/coverproper.mp4': 'website-cover',
      
      // Product videos
      '/subway/cover.mp4': 'subway-cover',
      '/website/cover.mp4': 'website-cover',
      
      // Best Work videos
      '/CCS/bestworkmontage.mp4': 'bestworkmontage',
      '/Ghibli/banner1.mp4': 'ghibli-banner1',
      '/Cocktail/cover2.mp4': 'cocktail-cover2',
      '/Hemsaker/cover.mp4': 'hemsaker-cover',
      '/lounge/montage.mp4': 'lounge-montage',
      '/isv/cover.mp4': 'isv-cover',
      
      // Motion videos
      '/nike/cover.mp4': 'nike-cover',
      '/jollieverafter/favpagecover.mp4': 'jollieverafter-favpagecover',
      '/3dpersonal/glass1.mp4': '3dpersonal-glass1',
      '/samsung/montage.mp4': 'samsung-montage',
      
      // Content videos
      '/content/taycan.mp4': 'content-taycan',
      '/content/m3.mp4': 'content-m3',
      '/content/ontheroadc43.mp4': 'content-ontheroadc43',
      '/content/ontheroad1_1.mp4': 'content-ontheroad1_1',
      '/content/ontheroad3_1.mp4': 'content-ontheroad3_1',
      '/content/ontheroad4_1.mp4': 'content-ontheroad4_1',
      '/content/rangefinder1_1.mp4': 'content-rangefinder1_1',
      '/content/rangefinder2_1.mp4': 'content-rangefinder2_1',
      '/content/rangefinder3_1.mp4': 'content-rangefinder3_1',
      '/content/pov2.mp4': 'content-pov2',
      '/content/pov3_1.mp4': 'content-pov3_1',
      '/content/pov4_1.mp4': 'content-pov4_1',
      '/content/filmvsdigital1.mp4': 'content-filmvsdigital1',
      '/content/filmvsdigital2.mp4': 'content-filmvsdigital2',
      '/content/filmvsdigital3.mp4': 'content-filmvsdigital3',
      '/content/blender1.mp4': 'content-blender1',
      '/content/blender2.mp4': 'content-blender2',
      '/content/blender3.mp4': 'content-blender3',
      '/content/blender4.mp4': 'content-blender4',
      '/content/24hours1.mp4': 'content-24hours1',
      '/content/24hours2.mp4': 'content-24hours2',
      '/content/16.mp4': 'content-16',
      '/content/15.mp4': 'content-15',
      '/content/14.mp4': 'content-14',
      '/content/11.mp4': 'content-11',
      '/content/4_1.mp4': 'content-4_1',
      '/content/3.mp4': 'content-3',
      '/content/17.mp4': 'content-17',
      '/content/5.mp4': 'content-5',
      '/content/2.mp4': 'content-2'
    };
    
    return pathMap[originalPath] || fileName.replace(/\.[^/.]+$/, '');
  };
  
  // Get the base name used by compression script
  const baseName = getBaseName(originalPath, fileName);
  
  // Create optimized path using the compression script naming convention
  const optimizedFileName = `${baseName}_${resolution}.${format}`;
  const optimizedPath = `/optimized/${directory}/${optimizedFileName}`;
  
  return optimizedPath;
};

// Get multiple optimized video sources for responsive loading
export const getOptimizedVideoSources = (originalPath) => {
  const format = getOptimalFormat();
  const resolution = getOptimalResolution();
  
  const sources = [];
  
  // Add optimal source first (720p)
  sources.push({
    src: getOptimizedVideoPath(originalPath, { format, resolution: '720p' }),
    type: format === 'webm' ? 'video/webm' : 'video/mp4'
  });
  
  // Add 480p fallback for slower connections
  sources.push({
    src: getOptimizedVideoPath(originalPath, { format, resolution: '480p' }),
    type: format === 'webm' ? 'video/webm' : 'video/mp4'
  });
  
  // Add alternative format fallback
  if (format === 'webm') {
    sources.push({
      src: getOptimizedVideoPath(originalPath, { format: 'mp4', resolution: '720p' }),
      type: 'video/mp4'
    });
    sources.push({
      src: getOptimizedVideoPath(originalPath, { format: 'mp4', resolution: '480p' }),
      type: 'video/mp4'
    });
  }
  
  // Add original as final fallback
  sources.push({
    src: originalPath,
    type: 'video/mp4'
  });
  
  return sources;
};

// Hook for React components
export const useOptimizedVideo = (originalPath, options = {}) => {
  const [format, setFormat] = useState(getOptimalFormat());
  const [resolution, setResolution] = useState(getOptimalResolution());
  
  useEffect(() => {
    // Update format and resolution on mount
    setFormat(getOptimalFormat());
    setResolution(getOptimalResolution());
  }, []);
  
  const optimizedPath = getOptimizedVideoPath(originalPath, { format, resolution });
  const sources = getOptimizedVideoSources(originalPath);
  
  return {
    optimizedPath,
    sources,
    format,
    resolution
  };
};

// Import useState and useEffect for the hook
import { useState, useEffect } from 'react'; 