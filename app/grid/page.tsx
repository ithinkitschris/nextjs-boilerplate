'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Type definition for the props of VideoSquare
interface VideoSquareProps {
  videoSrc: string;
  link?: string;
}

// VideoSquare component to render each video in a grid cell
const VideoSquare: React.FC<VideoSquareProps> = ({videoSrc, link}) => {
  return (
    <div className="video-square relative overflow-hidden bg-background 
    transition-all duration-200 drop-shadow-lg rounded-2xl ease-in-out
    hover:scale-98 hover:drop-shadow-xl">
      {link? (
        <Link href={link}>
            <div className="pt-[100%]">
              <video className="absolute scale-102 inset-0 w-full h-full object-cover" autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
        </Link>
      ) : (
        <div className="pt-[100%]">
          <video className="absolute scale-102 inset-0 w-full h-full object-cover" autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};



// HomePage component to render the grid of videos
const GridPage: React.FC = () => {

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  // Array of video sources; update these with your actual video URLs and alt texts
  const videoData: {src: string; link?: string; tags?: string[]}[] = [
    { src: '/ghibli/cover.mov', link: '/works/ghibli', tags:['Creative', 'ArtScience Museum']},
    { src: '/CCS/cover.mp4', link: '/works/cabin', tags:['Creative', 'Singapore Airlines']}, 
    { src: '/cocktail/cover.mp4', link:'/works/cocktail', tags:['Creative', 'Singapore Airlines']},
    
  ];

  const filteredVideos = videoData.filter(video =>
    selectedTags.length === 0 || (video.tags && selectedTags.some(tag => video.tags.includes(tag)))
  );

  return (
    <div>
      <div className="tag-container px-10 mt-14 mb-6">
        {['ArtScience Museum', 'Singapore Airlines'].map(tag => (
          <button
            key={tag}
            className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-10">
        {filteredVideos.map((video, index) => (
          <VideoSquare key={video.src} videoSrc={video.src} link={video.link} />
        ))}
      </div>
    </div>
  );
};

export default GridPage;