// import { motion } from "framer-motion"
import * as motion from "framer-motion/client"
import Link from "next/link";

export default function Ghibli() {

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.3, duration:0.25, ease:"easeOut"}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 
        p-4 sm:p-10 mt-6 min-h-screen font-[family-name:var(--font-geist-sans)]">
            <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-3 2xl:col-span-5 mt-2 tracking-tighter"
            initial="hidden"
            animate="show"
            variants={animateIn}>
               <h1 className="text-7xl sm:text-8xl lg:text-8xl text-center sm:text-left font-light tracking-tighter -ml-2.5 mt-4 sm:mt-0">The World of Studio Ghibli</h1>
               <p className="text-3xl text-center sm:text-left mb-8">Marketing Campaign for ArtScience Museum</p>

                <motion.video src="/ghibli/banner.mp4" 
                className="drop-shadow-lg rounded-lg w-full h-auto object-cover transition-all duration-200"
                autoPlay muted loop
                variants={animateInChild}
                whileHover={{scale:1.01}}>
                </motion.video>
                <div className="flex flex-col sm:flex-row gap-10 justify-between">

                    <motion.div className="text-3xl tracking-tight mt-10 text-center sm:text-left sm:w-4/5" variants={animateInChild}>
                    Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins. <br/>
                    Be spirited away into the magical scenes from My Neighbor Totoro, Kiki’s Delivery Service, and other iconic films through immersive theatrical sets, whimsical art installations and more.​
                    </motion.div>

                    <div className="flex flex-row gap-10 px-4 sm:w-2/5 justify-between">
                        <motion.div className=" mt-10" variants={animateInChild}>
                            Role:
                            <ol className="mt-2">
                                <li>Creative Direction</li>
                                <li>Motion Design</li>
                                
                            </ol>
                        </motion.div>
                        <motion.div className=" mt-10" variants={animateInChild}>
                            Brand:
                            <ol className="mt-2">
                                <li>ArtScience Museum</li>
                            </ol>
                        </motion.div>
                        <motion.div className=" mt-10" variants={animateInChild}>
                            Department:
                            <ol className="mt-2">
                                <li>Brand Marketing<br/> In-house</li>
                            </ol>
                        </motion.div>
                    </div>

                </div>
                <div className="flex flex-col px-4 sm:px-0 sm:flex-row gap-2 sm:gap-10 mt-4">
                    <motion.div className="tracking-tight mt-10 sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2">The Ask:</p>
                        <p>An integrated Marketing campaign for the first official Studio Ghibli exhibition in Singapore, and one of the largest exhibitions to be shown at ArtScience Museum, transforming 11 galleries spanning two levels. The World of Studio Ghibli is organised by ArtScience Museum under the license of award-winning animation powerhouse Studio Ghibli. </p>
                    </motion.div>
                    
                    <motion.div className="tracking-tight mt-10 sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2">The How:</p>
                        <p>Deliverables spanned a massive spectrum from On-property Banners, Digital Signages, Posters, Exhibition Guides. Merchandise to Digital OOH, Cinema pre-roll ads, I acn-train OOHs and marketing partner with Klook as a platform.</p>
                    </motion.div>
                    
                </div>
                <div className="flex flex-col px-4 sm:px-0 sm:flex-row gap-2 sm:gap-10 mt-24 mb-32 justify-between">

                    <motion.img 
                        src="/CCS/End Frame KV.jpg"
                        className="drop-shadow-lg hover:drop-shadow-xl rounded-lg w-4/6 h-auto object-cover transition-scale duration-200"
                        variants={animateInChild}
                        whileHover={{scale:1.01}}>
                    </motion.img>

                    <motion.div className="text-3xl tracking-tight text-start sm:text-left sm:w-2/6" variants={animateInChild}>
                    Key Visual design
                    </motion.div>

                </div>
             </motion.div>           
        </div>
    )

}