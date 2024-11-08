import * as motion from "framer-motion/client"

export default function Resume() {

        const animateIn ={
            hidden: {opacity:0, y:20},
            show: {
                opacity:1, y:0, 
                transition: {staggerChildren: 0.03, duration:0.2, ease:"easeOut"}
            }
        }
        const animateInChild ={
            hidden: {opacity:0, y:20},
            show: {
                opacity:1, y:0, 
                transition: {duration:0.3, ease:"easeOut"}
                }
            }

    return (
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
        items-start justify-items-start min-h-screen
        p-14 mt-4 gap-8 text-base tracking-tight
        font-[family-name:var(--font-geist-sans)]"
        initial="hidden"
        animate="show"
        // whileInView="show"
        // viewport={{once:true}}
        variants={animateIn}>
            
            <div className= "col-span-1 mr-10">
                <motion.h1 
                className="-ml-0.5 text-2xl mb-8"
                variants={animateInChild}>
                    Chris Leow
                </motion.h1>

                <motion.h1 
                className="mb-8 -ml-0.5"
                variants={animateInChild}>
                    <span className="underline" style={{ textUnderlineOffset: '2px' }}>Senior Creative</span><br/>
                    Based in New York City<br/>
                    <i className="-ml-0.5">From Singapore</i>
                </motion.h1>
                {/* <motion.div className="mb-4 text-lg" variants={animateInChild}>
                Creative Direction. Graphic Design. Content Creation. Edit. 2D + 3D Motion Design. Photography. Videography.
                </motion.div> */}
                <motion.p 
                className="mb-4"
                variants={animateInChild}>
                    Born and raised in sunny <i>(to put it mildly)</i> Singapore, Chris was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, he finds himself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world. 
                    With a fervor for craft and a meticulous eye for finesse, he takes a possibly unhealthy pride in creating visually compelling work across various mediums.
                </motion.p>
                <motion.p 
                className="mb-4"
                variants={animateInChild}>
                    As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore, Chris has eight years of experience in the Advertising and Design industry. He has most notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. 
                </motion.p>
                <motion.p 
                className="mb-10"
                variants={animateInChild}>
                    In his spare time after work <i>(which, realistically, isn't much)</i>, he does even more work, but for himself—creating content through photography, videography, editing and motion design. When he is finally not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He loves building his living space up, though he wouldn’t go so far as to call it interior design.
                </motion.p>

                <motion.p 
                className="mb-8"
                variants={animateInChild}>
                    Email – ithinkitschristopher@gmail.com
                    <br/>
                    LinkedIn – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-all hover:text-midground">Chris Leow</a>
                    <br/>
                    Instagram – <a href="https://www.instagram.com/khristurtle/" className="underline transition-all hover:text-midground">@khristurtle</a>
                </motion.p>
            </div>

            <div className="col-span-1 sm:pr-4">

                <motion.h1 className="text-2xl mb-8 -ml-0.5" variants={animateInChild}>
                Currently:<br/>
                </motion.h1>

                    <motion.p variants={animateInChild}>
                    <span className="underline" style={{ textUnderlineOffset: '2px' }}>Master's Student</span>
                    <br/>
                    MFA Interaction Design
                    <br/>
                    School of Visual Arts
                    <br/>
                    <i className="-ml-0.5">September 2024 – May 2026</i>
                    </motion.p>

                    <motion.div variants={animateInChild}>
                        <h1 className="mt-8 text-xl" >Curriculum undertaken</h1>
                    </motion.div>

                    <motion.div className="ml-6" variants={animateInChild}>
                        <p className="mt-6">Research Methodology</p>
                        <p>Service Design</p>
                        <p>UX Content Writing</p>
                        <p>Programming <i>(C, Python, JavaScript)</i></p>
                        <p>Human Interaction & Ergonomics</p>
                        <p>Physical Computing</p>
                    </motion.div>

                    <motion.div className="text-midground" variants={animateInChild}>
                        <h1 className="mt-8 text-xl" >Curriculum to be undertaken</h1>
                    </motion.div>

                    <motion.div className="ml-6 text-midground" variants={animateInChild}>
                        <p className="mt-6">Inclusive Design</p>
                        <p>Inclusive Design II</p>
                        <p>Spatial Computing</p>
                        <p>Advanced Fundamentals of UX</p>
                        <p>Intellectual Property & the Law</p>
                        <p>Framing User Experiences</p>
                        <p>Smart Objects</p>
                        <p>Professional Practices</p>
                        <p>Digital Accessibility</p>
                        <p>Design for Cities</p>
                        <p>Prototyping Narratives</p>
                        <p>Thesis</p>
                    </motion.div>


            </div>
            
            <div className="col-span-1 sm:pr-4">
                
                <motion.div variants={animateInChild}>
                    <h1 className="text-2xl mb-8 -ml-0.5">
                        Previously:
                    </h1>

                    <p>
                    <span className="underline" style={{ textUnderlineOffset: '2px' }}>Creative Lead</span><br/>
                    Marina Bay Sands <i>(ArtScience Museum)</i><br/>
                    <i className="-ml-0.5">January 2024 – November 2024</i>
                    </p>
                </motion.div>

                <div>
                    <motion.h1 className="mt-8 2xl:mt-14 text-xl" variants={animateInChild}>
                    ArtScience Museum</motion.h1>

                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4">
                            The World of Studio Ghibli
                        </h1>

                        <p className="ml-6">
                        Creative direction for the integrated marketing campaign for The World of Studio Ghibli, the first ever Studio Ghibli exhibition in Singapore held at ArtScience Museum. Designed the Key Visual for the exhibition and provided creative direction over marketing partners as well as merchandise for the exhibition. 
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        <h1 className="mt-4 mb-4">
                            Goddess: Brave. Bold. Beautiful.</h1>
                        <p className="ml-6">
                        Creative direction and strategic positioning for the marketing campaign of Goddess, an exhibition at the ArtScience Museum that celebrates screen icons across 120 years of moving image history. 
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-4 mb-4">
                        Frida Kahlo: The Life of an Icon</h1>
                    <p className="ml-6">
                    Creative direction and strategic positioning for the marketing campaign of Frida Kahlo: Life of an Icon, an exhibition at the ArtScience Museum on Mexican artist Frida Kahlo, alongside the companion exhibition Laid Bare: Frida’s Inner World. Managed and produced visuals and assets across the campaign titled Frida Forever for the lineup of activities held at the museum.
                    </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-4 mb-4">
                        ArtScience After Hours</h1>
                    <p className="ml-6">
                    Creative direction and visual identity oversight on ArtScience After Hours, an all-encompassing night time experience for the ArtScience Museum, with late-night offerings and experiences beyond daylight.
                    </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-4 mb-4">
                        ArtScience Cinema</h1>
                    <p className="ml-6">
                    Creative direction for all marketing deliverables for ArtScience Cinema, ArtScience Museums's purpose-built cinema that screens a curated programme of film all year round by the museums film curatorial team.
                    </p>
                    </motion.div>


                    
                </div>
            </div>

            <div className="col-span-1 sm:pr-4 mt-16">
                <motion.div variants={animateInChild}>
                    <p>
                    <span className="underline" style={{ textUnderlineOffset: '2px' }}>Art Director</span><br/>
                    TBWA\ Singapore<br/>
                    <i className="-ml-0.5">March 2021 – August 2023</i>
                    </p>
                </motion.div>
                    <motion.h1 className="mt-8 2xl:mt-14 text-xl" variants={animateInChild}>Singapore Airlines</motion.h1>
                        <motion.div variants={animateInChild}>
                            <h1 className="mt-6 mb-4">Beyond The Cabin</h1>
                            <p className="mb-4 ml-6">
                            Lead Creative and Motion Designer for Beyond The Cabin, an episodic brand campaign and content series that was centred around Singapore Airline’s Cabin Crew’s as World Class travellers with worldly passions.</p>
                            <p className="mb-4 ml-6">
                            Produced travel guides featuring Cabin Crew, casted for their expertise and passion for destinations flown to by Singapore Airlines. Showcasing a depth of understanding they have for the destinations and novel experiences through 
                            their insights
                            </p>
                        </motion.div>
                        <motion.div variants={animateInChild}>
                            <h1 className="mt-6 mb-4">Cocktail Conversations</h1>
                            <p className="mb-4 ml-6">
                            Lead Creative and Motion Designer for Cocktail Conversations, an episodic sustenance campaign and content series for the flagship SilverKris Lounge at Singapore Changi Airport Terminal 3. </p>
                            <p className="mb-4 ml-6">
                            Centred around the idea of the lounges being home to personalities from all walks of life around the world. We invited a couple of these personalities to have a conversation with us at the Crystal Bar in the First Class SilverKris Lounge, finishing off with a bespoke cocktail concocted just for them based off their answers and available for passengers to order at the bar.
                            </p>
                        </motion.div>
                        <motion.div variants={animateInChild}>
                            <h1 className="mt-6 mb-4">Every Getaway begins with your Everyday</h1>
                            <p className="mb-4 ml-6">
                            Lead Creative for a tactical brand campaign for Kris+, the lifestyle rewards app by Singapore Airlines. Centred around the idea of a holiday getaway being just one tap away on the app through shopping and dining, the campaign was brought to life in the likes of a Rube Goldberg device, symbolising the domino effect through the journey of using the app.</p>
                            <p className="mb-4 ml-6">
                            The campaign launched with a 30s brand film and OOH placements around Singapore.
                            </p>
                        </motion.div>
                        <motion.div variants={animateInChild}>
                            <h1 className="mt-6 mb-4">Travel Like Never Before</h1>
                            <p className="mb-4 ml-6">
                            Conceptualised and art directed a brand campaign for the recovery efforts of Singapore Airlines as travel restrictions lifted across the world in 2022. With the strategy of travelling bigger and better than ever before, the campaign was centred around travelling for the big milestone and sentimental moments now that travel is back on the table.</p>
                            <p className="mb-4 ml-6">
                            The brand film has been viewed over 36 million times. 
                            </p>
                        </motion.div>
                        <motion.div variants={animateInChild}>
                            <h1 className="mt-6 mb-4">Cargo THRUCOOL</h1>
                            <p className="mb-4 ml-6">
                            Conceptualized and art directed a film for Singapore Airlines Cargo’s THRUCOOL product, that boasts a seamless cold chain cargo service for temperature critical products that can shipped across the world with Singapore Airline’s global destinations network.
                            </p>
                        </motion.div>

                
            </div>

            <div className="col-span-1 sm:pr-4 mt-16">
                <motion.p variants={animateInChild}>
                <span className="underline" style={{ textUnderlineOffset: '2px' }}>Motion Art Director</span><br/>
                BBH Singapore<br/>
                <i className="-ml-0.5">June 2019 – March 2021</i>
                </motion.p>

                    <motion.h1 className="mt-8 2xl:mt-14 text-xl" variants={animateInChild}>Samsung</motion.h1>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-6 mb-4">Global Lifestyle TV Pitch</h1>
                    <p className="ml-6 mb-4">
                    Provided motion design direction, content series visualisations and a manifesto film for the global pitch for the Lifestyle TV campaign.
                    </p>
                    <p className="ml-6">
                    Winning both the Lifestyle TV campaign and global visual displays digital / social strategy, platform management and content creation retainer business for BBH Singapore.
                    </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-6 mb-4">Motion Design</h1>
                        <div className="ml-6">
                            <h1 className="mb-4">The Frame</h1>
                            <p className="mb-4">A video promoting the latest 2021 model of The Frame</p>

                            <h1 className="mb-4">Why Would You Do That?</h1>
                            <p className="mb-4">A video promoting the features of pairing a Samsung Soundbar with a Samsung TV, executed in a tongue-in-cheek manner. </p>

                            <h1 className="mb-4">The Terrace Feature Highlights</h1>
                            <p className="mb-4">Produced a set of 4 videos each highlighting a feature of the latest Samsung lifestyle TV, The Terrace.</p>

                            <h1 className="mb-4">Smart Features Highlights</h1>
                            <p className="mb-4">Produced a set of 4 videos highlighting a Smart Feature that comes equipped with Samsung Smart TVs</p>
                        </div>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-8 text-xl">Jollibee</h1>
                    <h1 className="mt-6 mb-4">JolliEverAfter</h1>
                    <p className="ml-6">
                    Pre Production, Art Direction, Offline and online edit and animation of the teaser film & challenges for JolliEverAfter, a campaign for Jollibee that brought their annual long form film to TikTok in the form of 9 challenges.
                    </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-8 text-xl">Jollibee</h1>
                    <h1 className="mt-6 mb-4">JolliEverAfter</h1>
                    <p className="ml-6">
                    Pre Production, Art Direction, Offline and online edit and animation of the teaser film & challenges for JolliEverAfter, a campaign for Jollibee that brought their annual long form film to TikTok in the form of 9 challenges.
                    </p>
                    </motion.div>
            </div>
        </motion.div>
    );
}