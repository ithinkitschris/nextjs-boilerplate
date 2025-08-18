import { useVideoContext } from '../../context/VideoContext';
import { useEffect, useState } from 'react';

const VideoDebugger = ({ enabled = false }) => {
  const { videoStats } = useVideoContext();
  const [isVisible, setIsVisible] = useState(false);

  // Keyboard shortcut listener
  useEffect(() => {
    if (!enabled) return;

    const handleKeyPress = (event) => {
      // Toggle with 'v' key (for video)
      if (event.key === 'v' || event.key === 'V') {
        // Only if not typing in an input field
        if (!['INPUT', 'TEXTAREA'].includes(event.target.tagName)) {
          setIsVisible(prev => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 glass-sm text-white px-18 py-4 rounded-3xl text-xs transition-all duration-300 backdrop-blur-3xl ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
    }`}>
      <div className="mb-2 font-bold flex items-center justify-between">
        <span>Video Performance</span>
      </div>
      <div>Total Videos: {videoStats.totalVideos}</div>
      <div>Visible Videos: {videoStats.visibleVideos}</div>
      <div>Loaded Videos: {videoStats.loadedVideos}</div>
      <div className="mt-2 text-green-400">
        Memory Saved: {videoStats.totalVideos > 0 ? ((videoStats.totalVideos - videoStats.loadedVideos) / videoStats.totalVideos * 100).toFixed(1) : 0}%
      </div>
      {/* <div className="mt-2 text-xs opacity-70">
        Loaded: {Array.from(loadedVideos).slice(0, 3).join(', ')}
        {loadedVideos.size > 3 && '...'}
      </div> */}
      <div className="mt-2 text-xs opacity-50 text-center border-t border-white/20 pt-2">
        Press &apos;V&apos; to toggle
      </div>
    </div>
  );
};

export default VideoDebugger; 