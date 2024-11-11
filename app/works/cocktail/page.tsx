// import { motion } from "framer-motion"
import * as motion from "framer-motion/client"
import Link from "next/link";

export default function Cocktail() {

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.15, duration:0.3, ease:"easeOut"}
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
        
        <motion.div className="grid grid-cols-3 gap-10
        p-4 sm:p-10 mt-6 max-w-full font-[family-name:var(--font-geist-sans)]"
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* <motion.video 
            src="/CCS/montageFade.mp4" 
            className="absolute top-52 left-0 w-full h-2/3 object-cover rounded-full -z-10 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5, ease:"easeOut"}}
            ></motion.video> */}

            <motion.div 
            className="mt-2 tracking-tighter col-span-3"
            variants={animateInChild}>
                <h1 className="text-7xl sm:text-8xl text-center sm:text-left font-light tracking-tighter -ml-2.5 mt-4 sm:mt-0">Cocktail Conversations</h1>
                <p className="text-3xl text-center sm:text-left">Brand Campaign for Singapore Airlines</p>
            </motion.div> 

            <motion.video src="/cocktail/montage.mp4" 
            className="col-span-full drop-shadow-lg rounded-xl w-full h-screen/2 lg:w-full lg:h-auto object-cover"
            autoPlay muted loop
            variants={animateInChild}
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            <div className="col-span-full sm:col-span-2">
                <motion.div className="text-3xl tracking-tight text-center sm:text-left" variants={animateInChild}>
                6 Cities. 6 Cabin Crew. 6 Passions. <br/>
                Journey beyond the cabin with our cabin crew.
                You see them on board, now follow their travels around the world. 
                </motion.div>
            </div>

            <div className="flex flex-row col-span-full sm:col-span-1 px-4 sm:px-0 justify-between">
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

            <div className="flex flex-col sm:flex-row col-span-full px-4 sm:px-0 gap-10">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2">The Ask:</p>
                    <p>Singapore Airlines Cabin Crew are commonly seen as being one-dimensional - from misconceptions of misogyny to them being just “servants of the cabin”. As part of the Welcome to World Class brand campaign, we want to dimensionalise Cabin Crew by “freeing” them in their portrayals, going from just “servants of the cabin” to modern, informed and relatable travelers of the world outside of the cabin.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2">The How:</p>
                    <p>We create travel guides fronted by our Cabin Crew, who are casted for their expertise in destinations they fly to frequently and are passionate for. Allowing them to showcase a depth of understanding they have for the destinations Singapore Airlines flies to and the unique and novel, experiences of the different destinations through their insights.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2">–</p>
                    <p className="mb-2">This was a campaign that I had the opportunity to oversee from conceptualisation to overall art direction, pre production, shoot, post production and execution of the motion graphics for the opening and end sequences.</p>
                    {/* <p>A 9:16 portrait film for social platforms was also adapted by me from the 16:9 main film for all 6 episodes. Using B-roll footage captured from the shoots, the 9:16 film incorporated a multi panelled approach to certain scenes to ensure the film was still watchable in a vertical format and provided additional content as well as context to the film for social consumption.</p> */}
                </motion.div>
            </div>

            <motion.img 
                src="/CCS/End Frame KV.jpg"
                className="col-span-full sm:col-span-2 px-4 sm:px-0 mt-10
                drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                object-cover transition-scale duration-200"
                variants={animateInChild}
                whileHover={{scale:1.01}}>
            </motion.img>

            <motion.div className="text-3xl tracking-tight text-start sm:text-left sm:w-2/6" variants={animateInChild}>
            Key Visual design
            </motion.div>         
        </motion.div>
    )

}