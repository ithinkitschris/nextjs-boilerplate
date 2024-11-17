// import { motion } from "framer-motion"
import * as motion from "framer-motion/client"
import Link from "next/link";

export default function Ghibli({className=""}) {

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.1, duration:0.3, ease:"easeOut"}
    }
    }
    const animateInChild ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {duration:0.3, ease:"easeOut"}
        }
    }
    
    return(
        <motion.div className={`grid grid-cols-6 gap-2 -mt-8
            sm:gap-3 max-w-full font-[family-name:var(--font-geist-sans)] ${className}`}
            initial="hidden"
            animate="show"
            variants={animateIn}>
                
            
                
                {/* Background Glow */}
                <video 
                src="/ghibli/banner.mp4" 
                className="absolute mt-20 w-full h-screen/1.2 max-w-9xl object-cover rounded-full -z-10 
            opacity-0 dark:opacity-100 blur-3xl saturate-200"
                autoPlay 
                muted 
                loop
                ></video>
                
                {/* Header */}
                <motion.div 
                className="tracking-tighter col-span-full mt-12 md:mt-6 mb-8 md:mb-8"
                variants={animateInChild}>
                <h1 className="text-6xl sm:text-8xl text-center sm:text-left tracking-tighter -ml-2">The World of Studio Ghibli</h1>
                <p className="text-2xl sm:text-3xl text-center sm:text-left">Marketing Campaign for ArtScience Museum</p>
                </motion.div>

                {/* Banner Video */}
                <motion.video src="/ghibli/banner.mp4" 
                className="col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
                autoPlay muted loop
                variants={animateInChild}
                ></motion.video>

                {/* Subheader */}
                <div className="col-span-full sm:col-span-4">
                    <motion.div className="text-3xl tracking-tight text-center sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                    Explore the World of Studio Ghibli at ArtScience Museum.
                    Be spirited away into the magical scenes from My Neighbor Totoro, Kiki’s Delivery Service, and other iconic films through immersive theatrical sets, whimsical art installations and more.​
                    </motion.div>
                </div>

                {/* Project Details */}
                <div className="flex flex-row col-span-full sm:col-span-2 px-4 sm:px-0 justify-between">
                    <motion.div variants={animateInChild}>
                        Role:
                        <ol className="mt-2">
                            <li>Creative Direction</li>
                            <li>Motion Design</li>
                            
                        </ol>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        Brand:
                        <ol className="mt-2">
                            <li>ArtScience Museum</li>
                        </ol>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        Department:
                        <ol className="mt-2">
                            <li>Brand Marketing<br/> In-house</li>
                        </ol>
                    </motion.div>
                </div>
                
                {/* Writeup */}
                <div className="flex flex-col sm:flex-row col-span-full px-4 sm:px-0 gap-10 mt-6 mb-14 mr-7">
                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2">The Ask:</p>
                    <p>An integrated Marketing campaign for the first official Studio Ghibli exhibition in Singapore, and one of the largest exhibitions to be shown at ArtScience Museum, transforming 11 galleries spanning two levels. The World of Studio Ghibli is organised by ArtScience Museum under the license of award-winning animation powerhouse Studio Ghibli. </p>
                    </motion.div>
                    
                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2">The How:</p>
                    <p>Deliverables spanned a massive spectrum from On-property Banners, Digital Signages, Posters, Exhibition Guides. Merchandise to Digital OOH, Cinema pre-roll ads, In-cabin train OOHs and marketing partner with Klook as a platform.</p>
                    </motion.div>
                    
                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2">–</p>
                        <p className="mb-2"></p>
                        {/* <p>A 9:16 portrait film for social platforms was also adapted by me from the 16:9 main film for all 6 episodes. Using B-roll footage captured from the shoots, the 9:16 film incorporated a multi panelled approach to certain scenes to ensure the film was still watchable in a vertical format and provided additional content as well as context to the film for social consumption.</p> */}
                    </motion.div>
                </div>

            
              
        </motion.div>
    )

}