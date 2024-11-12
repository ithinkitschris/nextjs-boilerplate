import React, {useRef} from 'react';
import {motion} from 'framer-motion';

const Episodes = () => {

    const episodeData = [
        {
          title: "Dance Your Way through Seoul",
          description: "Dance your way through Seoul with Pin, our Flight Stewardess, as we explore this vibrant city.",
          videoSrc: "/CCS/montage1.mp4"
        },
        {
          title: "Vintage Finds in Paris",
          description: "Uncover vintage finds with Moon, our Leading Steward. See Paris in a different light.",
          videoSrc: "/CCS/montage2.mp4"
        },
        {
          title: "The Jazz Scene of Ho Chi Minh City",
          description: "Enter the jazz scene of Ho Chi Minh City with Chief Stewardess Joslyn and discover the musical side of this city.",
          videoSrc: "/CCS/montage3.mp4"
        },
        {
          title: "The Artsy Side of Auckland",
          description: "Join Priscilla, our Flight Stewardess, on a journey across Auckland. Experience this artistic city through her lens.",
          videoSrc: "/CCS/montage4.mp4"
        },
        {
          title: "Flavours of New Delhi",
          description: "Follow Mitchelle, our In-Flight Manager, on a culinary journey in New Delhi. Savour this flavourful city with us.",
          videoSrc: "/CCS/montage5.mp4"
        },
        {
          title: "New York City in Reel Life",
          description: "Experience reel life in real life with In-Flight Manager Fadzil, on a cinematic tour around New York City.",
          videoSrc: "/CCS/montage6.mp4"
        }
      ];
    
    const episodeRefs = useRef([]);

    const scrollToEpisode = (index) => {
        if (episodeRefs.current[index]) {
        episodeRefs.current[index].scrollIntoView({behavior:'smooth', block:'center'});
        }
    };

    return (
        <div>
            <motion.div className="col-span-full mb-4">
                <h1 className="text-4xl font-medium tracking-tighter">Episodes</h1>
            </motion.div>

            {/* Episode Thumbnails */}
            <motion.div className="gap-2 2xl:gap-3 grid grid-cols-6 col-span-full mb-8">
                {episodeData.map((_, index) => (
                    <motion.img
                    key={index}
                    src={`/CCS/thumbnail${index + 1}.jpg`}
                    className="transition-all shadow-standard hover:shadow-standard-hover hover:scale-105 rounded-lg object-cover h-full"
                    onClick={() => scrollToEpisode(index)} // Scroll to the episode on click
                    />    
                ))}
            </motion.div>

            {/* Episodes */}
            {episodeData.map((episode, index) => (
                <div
                key={index}
                ref={(el) => (episodeRefs.current[index] = el)}
                className="grid grid-cols-6 col-span-full mb-3 xl:mb-5"
                >
                
                    <motion.div className="col-span-2 xl:col-span-1">
                        <h1 className="text-2xl tracking-tight mb-4 leading-7 mr-10">
                        <span className="font-medium">Episode {index + 1}</span>
                        <br />
                        {episode.title}
                        </h1>
                        <p className="text-base font-normal mr-10">
                        {episode.description}
                        </p>
                    </motion.div>

                    <motion.video
                    src={episode.videoSrc}
                    className="drop-shadow-lg hover:drop-shadow-xl rounded-lg object-cover col-span-4 xl:col-span-5 w-full"
                    autoPlay
                    loop
                    muted
                    drag
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    ></motion.video>
                </div>
            ))}
        </div>
    );
};

export default Episodes;