import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { videoData, workTags } from '../data/videoData';

// Simple version without search params - for individual work pages
export const useVideoNavigationSimple = () => {
  const router = useRouter();

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedWork, setSelectedWork] = useState('');

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
    
    // For individual pages, navigate to home with the tag/work
    const work = tag === 'clear' ? 'resume' : '';
    if (work === 'resume') {
      router.push('/');
    } else if (newTags.length > 0) {
      router.push(`/?tags=${newTags.join(',')}`);
    }
  }, [router]);

  const toggleWork = useCallback((work) => {
    if (work === 'clear') {
      setSelectedWork('resume');
      setSelectedTags([]);
      router.push('/');
    } else {
      setSelectedWork(work);
      // Set tags based on the selected work
      const workTagsList = getWorkTags(work);
      setSelectedTags(workTagsList);
      
      // Navigate to the work page if it exists in workTags
      if (workTags.includes(work)) {
        router.push(`/${work}`);
      }
    }

    // Use immediate scroll for resume to ensure ScrollTrigger initializes correctly
    // For other pages, smooth scroll is fine
    const isResume = work === 'resume' || work === 'clear';
    window.scrollTo({
      top: 0,
      behavior: isResume ? 'auto' : 'smooth',
    });
  }, [router, getWorkTags]);

  return {
    selectedTags,
    setSelectedTags,
    selectedWork,
    setSelectedWork,
    toggleTag,
    toggleWork,
    getWorkTags
  };
};

