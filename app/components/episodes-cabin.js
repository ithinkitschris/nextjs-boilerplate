import React, {useRef} from 'react';

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
        <div className="font-[family-name:var(--font-geist-sans)]">
            <div className="col-span-full mb-10 md:mb-6">
                <h1 className="text-4xl font-medium text-center md:text-left tracking-tighter">Episodes</h1>
            </div>

            {/* Episode Thumbnails */}
            <div className="gap-2 2xl:gap-3 grid grid-cols-3 lg:grid-cols-6 mb-10 lg:mb-24 w-full h-auto">
                {episodeData.map((_, index) => (
                    <button>
                      <img
                      key={index}
                      src={`/CCS/thumbnail${index + 1}.jpg`}
                      className="transition-all duration-200 shadow-standard hover:shadow-standard-hover hover:scale-107 ease-out rounded-lg object-cover h-full"
                      onClick={() => scrollToEpisode(index)} // Scroll to the episode on click
                      />    
                    </button>
                ))}
            </div>

            {/* Episodes */}
            {episodeData.map((episode, index) => (
                <div
                key={index}
                ref={(el) => (episodeRefs.current[index] = el)}
                className="grid grid-cols-6 col-span-full mb-3 xl:mb-5"
                >
                
                    <div className="col-span-6 md:col-span-2 lg:col-span-2 2xl:col-span-1">
                        <h1 className="text-xl lg:text-2xl tracking-tight mb-2 md:mb-4 leading-7 md:mr-10 text-center md:text-left mt-10 md:mt-0">
                        <span className="font-medium">Episode {index + 1}</span>
                        <br />
                        {episode.title}
                        </h1>
                        <p className="text-sm lg:text-base font-normal md:mr-10 text-center md:text-left px-18 md:px-0 mb-6 md:mb-0">
                        {episode.description}
                        </p>
                    </div>

                    <video
                        src={episode.videoSrc}
                        className="shadow-standard rounded-lg object-cover col-span-6 md:col-span-4 lg:col-span-4 2xl:col-span-5 h-full w-full"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            ))}
        </div>
    );
};

export default Episodes;