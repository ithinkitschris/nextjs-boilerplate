// import { motion } from "framer-motion"
import * as motion from "framer-motion/client"
import Link from "next/link";

export default function Cocktail({className=""}) {

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
        
        <motion.div className={`grid grid-cols-6 gap-2 
            sm:gap-3 max-w-full -mt-8 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            <video 
            src="/cocktail/montagelow.mp4" 
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
                <h1 className="text-6xl sm:text-8xl text-center sm:text-left tracking-tighter -ml-2">Cocktail Conversations</h1>
                <p className="text-2xl sm:text-3xl text-center sm:text-left">Brand Campaign for Singapore Airlines</p>
            </motion.div> 

            {/* Banner Video */}
            <motion.video src="/cocktail/montagelow.mp4" 
            className="col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop
            variants={animateInChild}
            // whileHover={{scale:1.01}}
            >
            </motion.video>
            {/* Subheader */}
            <div className="col-span-full sm:col-span-4 mr-16">
                <motion.div className="text-4xl tracking-tight text-center sm:text-left mx-4 pr-10 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                If there was a drink to match every personality, how would your bespoke cocktail look and taste like? 
                </motion.div>
            </div>

            <div className="flex flex-row col-span-full sm:col-span-2 px-4 sm:px-0 justify-between">
                <motion.div variants={animateInChild}>
                    Role:
                    <ol className="mt-2">
                        <li>Creative Direction</li>
                        <li>Motion Design</li>
                        <li>Ideation</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Client:
                    <ol className="mt-2">
                        <li>Singapore Airlines</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Agency:
                    <ol className="mt-2">
                        <li>TBWA\ Singapore</li>
                    </ol>
                </motion.div>
            </div>

            {/* Writeup */}
            <div className="flex flex-col sm:flex-row col-span-full px-4 sm:px-0 gap-10 mt-6 mb-14 mr-7">
                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <p className="mb-2">The Ask:</p>
                    <p className="mb-3">The Flagship SilverKris Lounge at Singapore Changi Airport Terminal 3 was rebuilt from ground up and opened in 2022.</p>
                    <p>Post-launch, there was a need for a sustenance campaign for the lounge. One that would showcase not only it's class-leading interior design but also most importantly, its meticulous service.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <p className="mb-2">The How:</p>
                    <p className="mb-3">Featuring a blend of notable customers & personalities who pass through the lounge, each episode stars a different guest where we learn about their craft and travel preferences.</p> 
                    <p>Through curated rapid-fire questions, the bartenders at the Crystal Bar then concoct bespoke cocktails named after them based on their answers.</p>
                        
                </motion.div>

                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <p className="mb-2">The Sustenance:</p>
                    <p>The bespoke cocktails were available to order by any patron of the Crystal Bar the month following the episode, and recipe videos were edited and uploaded as content on social platforms.
                        </p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <p className="mb-2">–</p>
                    <p className="mb-3">
                    This was a campaign where I oversaw the conceptualisation and overall Art Direction.</p> 
                    <p className="mb-3">All Motion Graphics and title sequences in the episodes were both designed and animated by me and passed to the production team for the final masters.</p> 
                    <p className="mb-3">The sustenance cocktail recipe videos for social platforms were also edited on my end.</p>
                    {/* <p>A 9:16 portrait film for social platforms was also adapted by me from the 16:9 main film for all 6 episodes. Using B-roll footage captured from the shoots, the 9:16 film incorporated a multi panelled approach to certain scenes to ensure the film was still watchable in a vertical format and provided additional content as well as context to the film for social consumption.</p> */}
                </motion.div>
            </div>

                 
        </motion.div>
    )

}