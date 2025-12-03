import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { videoData, workTags } from '../data/videoData';

// URL Helper Functions for Deep Linking
const createURL = (work, tags) => {
  const params = new URLSearchParams();
  if (work && work !== 'resume') params.set('work', work);
  if (tags && tags.length > 0) params.set('tags', tags.join(','));
  
  const paramString = params.toString();
  return paramString ? `?${paramString}` : '';
};

const parseURL = (searchParams) => {
  const work = searchParams.get('work') || 'resume';
  const tags = searchParams.get('tags')?.split(',').filter(Boolean) || [];
  
  return { work, tags };
};

export const useVideoNavigation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedWork, setSelectedWork] = useState('');

  // Read URL and set initial state
  useEffect(() => {
    const { work, tags } = parseURL(searchParams);
    setSelectedWork(work);
    setSelectedTags(tags);
  }, [searchParams]);

  // Function to get tags for a selected work
  const getWorkTags = useCallback((work) => {
    const workVideo = videoData.find(video => {
      return workTags.includes(work) && video.tags.includes(work);
    });
    return workVideo ? workVideo.tags.filter(tag => ['creative', 'product', 'motion', 'edit', 'photography', 'content'].includes(tag)) : [];
  }, []);

  const toggleTag = useCallback((tag) => {
    let newTags;
    
    if (tag === 'clear') {
      newTags = [];
      setSelectedWork('resume');
    } else {
      newTags = [tag];
      setSelectedWork(''); // Clear selected work when filtering by tag
    }
    
    setSelectedTags(newTags);
    
    // Update URL
    const work = tag === 'clear' ? 'resume' : '';
    const newURL = createURL(work, newTags);
    router.push(pathname + newURL);
  }, [router, pathname]);

  const toggleWork = useCallback((work) => {
    if (work === 'clear') {
      setSelectedWork('resume');
      setSelectedTags([]);
      // Update URL to clean state
      router.push(pathname);
    } else {
      setSelectedWork(work);
      // Set tags based on the selected work
      const workTags = getWorkTags(work);
      setSelectedTags(workTags);
      
      // Update URL
      const newURL = createURL(work, workTags);
      router.push(pathname + newURL);
    }

    // Use immediate scroll for resume to ensure ScrollTrigger initializes correctly
    // For other pages, smooth scroll is fine
    const isResume = work === 'resume' || work === 'clear';
    window.scrollTo({
      top: 0,
      behavior: isResume ? 'auto' : 'smooth',
    });
  }, [router, pathname, getWorkTags]);

  const filteredVideos = videoData.filter((video) => {
    if (selectedTags.includes('all')) return true;

    // Safeguard for when selectedTags is not an array
    if (!Array.isArray(selectedTags)) return false;

    return selectedTags.some((tag) => video.tags.includes(tag));
  });

  return {
    selectedTags,
    setSelectedTags,
    selectedWork,
    setSelectedWork,
    toggleTag,
    toggleWork,
    filteredVideos,
    getWorkTags
  };
}; 