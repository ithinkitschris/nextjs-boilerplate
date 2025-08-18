import React, {useRef} from 'react';

const Episodes = () => {

    const episodeData = [
        {
          title: "Dance Your Way through Seoul",
          description: "Dance your way through Seoul with Pin, our Flight Stewardess, as we explore this vibrant city.",
          link:"https://www.youtube.com/watch?v=IWzVAtLa2EU",
          videoSrc: "/CCS/montage1.mp4"
        },
        {
          title: "Vintage Finds in Paris",
          description: "Uncover vintage finds with Moon, our Leading Steward. See Paris in a different light.",
          link:"https://www.youtube.com/watch?v=q3JgGObWmSU",
          videoSrc: "/CCS/montage2.mp4"
        },
        {
          title: "The Jazz Scene of Ho Chi Minh City",
          description: "Enter the jazz scene of Ho Chi Minh City with Chief Stewardess Joslyn and discover the musical side of this city.",
          link: "https://www.youtube.com/watch?v=5hQWTAa61Jg",
          videoSrc: "/CCS/montage3.mp4"
        },
        {
          title: "The Artsy Side of Auckland",
          description: "Join Priscilla, our Flight Stewardess, on a journey across Auckland. Experience this artistic city through her lens.",
          link: "https://www.youtube.com/watch?v=N_48JhuB2VI",
          videoSrc: "/CCS/montage4.mp4"
        },
        {
          title: "Flavours of New Delhi",
          description: "Follow Mitchelle, our In-Flight Manager, on a culinary journey in New Delhi. Savour this flavourful city with us.",
          link: "https://www.youtube.com/watch?v=gggoxTo10h0",
          videoSrc: "/CCS/montage5.mp4"
        },
        {
          title: "New York City in Reel Life",
          description: "Experience reel life in real life with In-Flight Manager Fadzil, on a cinematic tour around New York City.",
          link: "https://www.youtube.com/watch?v=dXfNb5IGDHo",
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
            <div className="col-span-full mb-14">
                <h1 className="text-6xl text-center md:text-left tracking-[-2px] font-medium">Episodes</h1>
            </div>

            {/* Episode Thumbnails */}
            <div className="gap-1 2xl:gap-2 grid grid-cols-3 lg:grid-cols-6 mb-14 lg:mb-24 w-full h-auto">
                {episodeData.map((_, index) => (
                    <button key={index}>
                      <img
                      src={`/CCS/thumbnail${index + 1}.jpg`}
                      className="transition-all duration-200 drop-shadow-md hover:shadow-standard-hover lg:hover:scale-107 ease-out rounded-3xl object-cover lg:h-full"
                      onClick={() => scrollToEpisode(index)} // Scroll to the episode on click
                      />    
                    </button>
                ))}
            </div>

            {/* Episodes */}
            {episodeData.map((episode, index) => (
                <div
                key={episode.title}
                ref={(el) => (episodeRefs.current[index] = el)}
                className="grid grid-cols-6 col-span-full mb-24 xl:mb-5"
                >
                
                    <div className="col-span-6 md:col-span-2 lg:col-span-2 2xl:col-span-1 relative">
                        <div className="tracking-tight mb-2 md:mb-4 md:mr-10 text-center md:text-left mt-4 md:mt-0 leading-3">
                          <h1 className="tracking-tight font-medium text-[10pt] md:text-sm mb-1">Episode {index + 1}</h1>
                          <h2 className="text-xl md:text-2xl md:leading-6 md:mt-2 tracking-tight font-medium mb-2 md:w-3/4">{episode.title}</h2>
                        </div>

                        <h3 className="text-[8pt] md:text-sm font-normal leading-4 md:mr-24 text-center md:text-left px-12 md:px-0 mb-4 md:mb-8">
                        {episode.description}
                        </h3>

                        <h3 className="text-[8pt] md:text-sm md:mr-10 text-center md:text-left px-10 md:px-0 mb-6 md:mb-0">
                        Watch it
                        <a href={episode.link} 
                        className="px-[5px] border-1 border-foreground rounded-full ml-1.5 hover:bg-foreground hover:text-background relative top-[0.4px] transition-all duration-200"
                        target="blank">here</a>
                        </h3>
                    </div>

                    <video
                        src={episode.videoSrc}
                        className="rounded-2xl md:rounded-3xl object-cover col-span-6 md:col-span-4 lg:col-span-4 2xl:col-span-5 h-[120%] md:h-full w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>
            ))}
        </div>
    );
};

export default Episodes;