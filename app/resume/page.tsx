'use client';
import { motion } from "framer-motion";
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Carousel from '../components/profile-carousel.js'



const animateIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0,
        transition: { staggerChildren: 0.03, duration: 0.2, ease: "easeOut" }
    }
};
const animateInChild ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {duration:0.3, ease:"easeOut"}
        }
    }

export default function Resume({className=""}) {

    const [timeNyc, setTimeNyc] = useState<string | null>(null);
    useEffect(() => {
      
      const currentTime = new Date();
      const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone:'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(currentTime);
      setTimeNyc(timeInTimeZone);
  
      const timer = setInterval(() => {
        const updatedTime = new Date();
        const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
          timeZone:'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(updatedTime);
  
        setTimeNyc(updatedTimeInTimeZone);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const [timeSg, setTimeSg] = useState<string | null>(null);
    useEffect(() => {
      
      const currentTime = new Date();
      const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone:'Asia/Singapore',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(currentTime);
      setTimeSg(timeInTimeZone);
  
      const timer = setInterval(() => {
        const updatedTime = new Date();
        const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
          timeZone:'Asia/Singapore',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(updatedTime);
  
        setTimeSg(updatedTimeInTimeZone);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

   

    return (
        
    <>
        {/* Page Container */}
        <motion.div className={`grid grid-cols-1 lg:grid-cols-10 w-full md:pl-4
        items-start justify-items-start font-[family-name:var(--font-geist-sans)] 
        gap-2 text-sm tracking-tight ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            
            
            {/* Bio */}
            <div className="col-span-4 ">

                {/* Mobile Photo Card */}
                <div className="lg:hidden relative w-full h-[600px]">

                    {/* Name */}
                    <motion.h1
                    className="z-50 pl-5 pt-5 text-6xl tracking-tighter leading-15 font-base text-white"
                    variants={animateInChild}
                    >
                    I am <span className="font-script absolute top-10 tracking-tight text-7xl align-top ml-2">Chris</span>
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                    </motion.h1>

                    {/* Image */}
                    <Image
                    src="/profile/profile.jpg"
                    alt=""
                    className="absolute rounded-lg top-0 left-0 h-auto w-fill object-cover -z-50 object-bottom"
                    layout="fill"
                    objectFit="cover"
                    />

                    {/* Details */}
                    <motion.div
                    className="absolute bottom-0 pl-6 pb-5 text-white "
                    variants={animateInChild}
                    >
                        <p className="flex items-center justify-start -rotate-2
                        rounded-full tracking-tighter whitespace-nowrap text-2xl -ml-1.5 font-script mb-2">Senior Creative</p>
                        Based in New York City
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeNyc}</span>
                        <br />
                        <i className="-ml-0.5">From Singapore</i>
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeSg}</span>
                    </motion.div>
                </div>

                {/* Desktop Header */}
                <motion.h1
                    className="hidden lg:block mt-2 mb-12 text-7xl tracking-tighter whitespace-nowrap leading-10 text-foreground"
                    variants={animateInChild}
                    >
                    I am Chris.
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                </motion.h1>

                {/* Desktop Details */}
                <motion.div
                className="mb-10 -ml-0.5 text-foreground hidden md:block"
                variants={animateInChild}>
                <p className="flex items-center justify-center -ml-1.5 border-1 border-foreground 
                rounded-full tracking-tight font-medium w-32 text-base mb-5">Senior Creative</p>
                Based in New York City
                <span className="text-neutral-300 align-top text-xs ml-1">{timeNyc}</span>
                <br />
                <i className="-ml-0.5">From Singapore</i>
                <span className="text-neutral-300 align-top text-xs ml-1">{timeSg}</span>
                </motion.div>

                <motion.p 
                className="mb-8 mt-12 md:mt-0 px-5 md:px-0 text-5xl font-medium tracking-tight leading-11"
                variants={animateInChild}>
                    & here are some answers.
                </motion.p>

                <motion.div 
                className="mb-10 px-5 md:px-0"
                variants={animateInChild}>
                    <p className="mb-2 font-sans font-semibold uppercase text-xs tracking-wider ">Who?</p>
                    Born and raised in sunny <i className="mr-0.5 font-light ">(to put it mildly)</i> Singapore, I was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, I find myself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world. 
                    With a fervor for craft and a meticulous eye for finesse, I do take a possibly unhealthy pride in creating visually compelling work across various mediums.
                </motion.div>

                <motion.div 
                className="mb-10 px-5 md:px-0"
                variants={animateInChild}>
                    <p className="mb-2 font-sans font-semibold uppercase text-xs tracking-wider ">What?</p>
                    As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore; eight years of experience in the Advertising and Design industry is what I find myself with–having notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. 
                </motion.div>

                <motion.div 
                className="mb-8 px-5 md:px-0"
                variants={animateInChild}>
                    <p className="mb-2 font-sans font-semibold uppercase text-xs tracking-wider ">And?</p>
                    In his spare time after work <i>(which, realistically, isn&apos;t much)</i>, he does even more work, but for himself—creating content through photography, videography, editing and motion design. When he is finally not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He loves building his living space up, though he wouldn&apos;t go so far as to call it interior design.
                </motion.div>

                <motion.div 
                className="mb-8 px-5 md:px-0"
                variants={animateInChild}>
                    <p className="mb-2 font-sans font-semibold uppercase text-xs tracking-wider">I'm sold.</p>
                    <p className=""><span className="font-semibold">Email</span> – ithinkitschristopher@gmail.com</p>
                    <p className=""><span className="font-semibold">LinkedIn</span> – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-colors hover:text-midground">Chris Leow</a></p>
                    <p className=""><span className="font-semibold">Instagram</span> – <a href="https://www.instagram.com/khristurtle/" className="underline transition-colors hover:text-midground">@khristurtle</a></p>
                </motion.div>
            </div>

            <div className="hidden md:block md:col-span-5"/>

            {/* <div className="hidden md:block col-span-5">
                <Carousel className="w-full col-span-full" />
            </div> */}


            {/* Currently: */}
            <div className="col-span-full pl-5 md:pl-0 md:col-span-2">

                <motion.h1 className="text-4xl md:text-3xl mb-11 -ml-0.5 mt-10 tracking-tight" variants={animateInChild}>
                Currently:<br/>
                </motion.h1>

                    <motion.div variants={animateInChild} className="-mt-2">
                        <p className="flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
                        rounded-full tracking-tighter font-medium text-sm w-36 mb-2 font-mono whitespace-nowrap">Master's Student</p>
                        <p>
                            MFA Interaction Design
                            <br/>
                            School of Visual Arts
                            <br/>
                            <i className="-ml-0.5">September 2024 – May 2026</i>
                        </p>
                    </motion.div>

                    <motion.div variants={animateInChild}>
                        <h1 className="mt-8 text-lg" >Curriculum undertaken</h1>
                    </motion.div>

                    <motion.div className="ml-4" variants={animateInChild}>
                        <p className="mt-4">Research Methodologies</p>
                        <p>Service Design</p>
                        <p>UX Content Writing</p>
                        <p>Programming <i>(C, Python, JavaScript)</i></p>
                        <p>Human Interaction & Ergonomics</p>
                        <p>Physical Computing</p>
                    </motion.div>

                    <motion.div className="text-midground" variants={animateInChild}>
                        <h1 className="mt-8 text-lg" >Curriculum to be undertaken</h1>
                    </motion.div>

                    <motion.div className="ml-4 text-midground" variants={animateInChild}>
                        <p className="mt-4">Inclusive Design</p>
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
            
            {/* ArtScience Museum */}
            <div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-11">
                
                <motion.div variants={animateInChild} className="">
                    <p className="text-4xl md:text-3xl mb-10 -ml-0.5 tracking-tight">
                        Previously:
                    </p>

                    <div className="-mt-2">
                    <p className="flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
                        rounded-full tracking-tighter font-medium text-sm w-30 mb-2 font-mono whitespace-nowrap">Creative Lead</p>
                    <p>Marina Bay Sands <i>(ArtScience Museum)</i></p>
                    <p className="-ml-0.5 italic opacity-75">January 2024 – November 2024</p>
                    </div>
                </motion.div>

                <div>
                    <motion.h1 className="mt-8 2xl:mt-14 text-lg font-medium" variants={animateInChild}>
                    ArtScience Museum</motion.h1>

                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90">
                            The World of Studio Ghibli
                        </h1>

                        <p className="ml-6 opacity-50">
                        Creative direction for the integrated marketing campaign for The World of Studio Ghibli, the first ever Studio Ghibli exhibition in Singapore held at ArtScience Museum. Designed the Key Visual for the exhibition and provided creative direction over marketing partners as well as merchandise for the exhibition. 
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        <h1 className="mt-4 mb-4 opacity-90">
                            Goddess: Brave. Bold. Beautiful.</h1>
                        <p className="ml-6 opacity-50">
                        Creative direction and strategic positioning for the marketing campaign of Goddess, an exhibition at the ArtScience Museum that celebrates screen icons across 120 years of moving image history. 
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-4 mb-4 opacity-90">
                        Frida Kahlo: The Life of an Icon</h1>
                    <p className="ml-6 opacity-50">
                    Creative direction and strategic positioning for the marketing campaign of Frida Kahlo: Life of an Icon, an exhibition at the ArtScience Museum on Mexican artist Frida Kahlo, alongside the companion exhibition Laid Bare: Frida’s Inner World. Managed and produced visuals and assets across the campaign titled Frida Forever for the lineup of activities held at the museum.
                    </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-4 mb-4 opacity-90">
                        ArtScience After Hours</h1>
                    <p className="ml-6 opacity-50">
                    Creative direction and visual identity oversight on ArtScience After Hours, an all-encompassing night time experience for the ArtScience Museum, with late-night offerings and experiences beyond daylight.
                    </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-4 mb-4 opacity-90">
                        ArtScience Cinema</h1>
                    <p className="ml-6 opacity-50">
                    Creative direction for all marketing deliverables for ArtScience Cinema, ArtScience Museumss purpose-built cinema that screens a curated programme of film all year round by the museums film curatorial team.
                    </p>
                    </motion.div>


                    
                </div>
            </div>

            {/* TBWA */}
            <div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-28">
                <motion.div variants={animateInChild}>
                <div>
                <p className="flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
                        rounded-full tracking-tighter font-medium text-sm w-26 mb-2 font-mono whitespace-nowrap">Art Director</p>
                    <p>
                    TBWA\ Singapore<br/>
                    <i className="-ml-0.5 opacity-75">March 2021 – August 2023</i>
                    </p>
                </div>
                </motion.div>

                    <motion.h1 className="mt-8 2xl:mt-14 text-lg font-medium" variants={animateInChild}>Singapore Airlines</motion.h1>

                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">Beyond The Cabin</h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Lead Creative and Motion Designer for Beyond The Cabin, an episodic brand campaign and content series that was centred around Singapore Airline’s Cabin Crew’s as World Class travellers with worldly passions.</p>
                        <p className="mb-4 ml-6 opacity-50">
                        Produced travel guides featuring Cabin Crew, casted for their expertise and passion for destinations flown to by Singapore Airlines. Showcasing a depth of understanding they have for the destinations and novel experiences through 
                        their insights
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">Cocktail Conversations</h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Lead Creative and Motion Designer for Cocktail Conversations, an episodic sustenance campaign and content series for the flagship SilverKris Lounge at Singapore Changi Airport Terminal 3. </p>
                        <p className="mb-4 ml-6 opacity-50">
                        Centred around the idea of the lounges being home to personalities from all walks of life around the world. We invited a couple of these personalities to have a conversation with us at the Crystal Bar in the First Class SilverKris Lounge, finishing off with a bespoke cocktail concocted just for them based off their answers and available for passengers to order at the bar.
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">Kris+ Brand Campaign</h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Lead Creative for a tactical brand campaign for Kris+, the lifestyle rewards app by Singapore Airlines. Centred around the idea of a holiday getaway being just one tap away on the app through shopping and dining, the campaign was brought to life in the likes of a Rube Goldberg device, symbolising the domino effect through the journey of using the app.</p>
                        <p className="mb-4 ml-6 opacity-50">
                        The campaign launched with a 30s brand film and OOH placements around Singapore.
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">Travel Like Never Before</h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Conceptualised and art directed a brand campaign for the recovery efforts of Singapore Airlines as travel restrictions lifted across the world in 2022. With the strategy of travelling bigger and better than ever before, the campaign was centred around travelling for the big milestone and sentimental moments now that travel is back on the table.</p>
                        <p className="mb-4 ml-6 opacity-50">
                        The brand film has been viewed over 36 million times. 
                        </p>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">SilverKris Lounge</h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Lead Creative, Editor and Motion Designer for the launch campaign of the brand new flagship SilverKris Lounges at Changi Airport. Produced a 90s brand film that covered the amenities across the 4 lounges.
                        </p>
                        <p className="mb-4 ml-6 opacity-50">
                        Oversaw the creation of a glass installation of the Batik Motif as the entrance facade to the lounges and the animation of the Batik Motif for an 8 metre curved digital wall at the entrance foyer.
                        </p>
                        <p className="mb-4 ml-6 opacity-50">
                        Art directed a photo asset library shoot and film shoot and offline / online edited the film till delivery.
                        </p>                          
                    </motion.div>
                    {/* <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">Cargo THRUCOOL</h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Conceptualized and art directed a film for Singapore Airlines Cargo’s THRUCOOL product, that boasts a seamless cold chain cargo service for temperature critical products that can shipped across the world with Singapore Airline’s global destinations network.
                        </p>
                    </motion.div> */}

                    <motion.h1 className="mt-8 2xl:mt-14 text-xl" variants={animateInChild}>IKEA</motion.h1>

                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">Oops Happens <i className="text-neutral-500">(HEMSÄKER)</i></h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Art directed and conceptualised a campaign for IKEA Singapore & Malaysia’s insurance product, HEMSAKER. A set of 9 videos that went live across IKEA’s social platforms, web pages and various other platforms.
                        </p>
                    </motion.div>

                    <motion.h1 className="mt-8 2xl:mt-14 text-xl" variants={animateInChild}>Standard Chartered Bank</motion.h1>

                    <motion.div variants={animateInChild}>
                        <h1 className="mt-6 mb-4 opacity-90 font-base">Marina Bay Financial Centre</h1>
                        <p className="mb-4 ml-6 opacity-50">
                        Art directed and did the offline / online edit of a video and photo set of the new Standard Chartered signage at Marina Bay Financial Centre as part of their latest brand identity refresh and brand evolution. The video and photos were circulated globally as part of internal communications in Standard Chartered Bank.
                        </p>
                    </motion.div>
                
            </div>

            {/* BBH */}
            <div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-28">
                <motion.div variants={animateInChild}>
                <p className="flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
                        rounded-full tracking-tighter font-medium text-sm w-40 mb-2 font-mono whitespace-nowrap">Motion Art Director</p>
                BBH Singapore<br/>
                <i className="-ml-0.5">June 2019 – March 2021</i>
                </motion.div>

                <motion.h1 className="mt-8 2xl:mt-14 text-xl" variants={animateInChild}>NIKE</motion.h1>
                    
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-6 mb-4">Athlete Stories: Koy & Toon</h1>
                    <p className="ml-6 mb-4">
                    Offline and online edit and animation for a set of videos and a full film highlighting the stories of Bangkok based NIKE athletes Koy & toon, distributed on Nike’s Instagram feed, stories and TV.
                    </p>
                    </motion.div>

                    <motion.div variants={animateInChild}>
                    <h1 className="mt-6 mb-4">Womens Instazine</h1>
                    <p className="ml-6 mb-4">
                    Edited and animated supporting assets for the campaign as well as the case study film for Women’s Instazine
                    </p>
                    </motion.div>

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
                    <h1 className="mt-6 mb-4">CES 2020</h1>
                    <p className="ml-6 mb-4">
                    Art directed & executed on site social coverage of Samsung’s Visual display’s new releases and technology at CES 2020 in Las Vegas. 
                    </p>
                    <p className="ml-6">
                    Content produced involved short form video series distributed on Facebook and Instagram feed, day to day event coverage on Instagram stories and long form event recap videos for Youtube.  
                    </p>
                    </motion.div>

                    <motion.div variants={animateInChild}>
                    <h1 className="mt-6 mb-4">Motion Design</h1>
                        <div className="ml-6">
                            <h1 className="">The Frame</h1>
                            {/* <p className="mb-4">A video promoting the latest 2021 model of The Frame</p> */}

                            <h1 className="">Why Would You Do That?</h1>
                            {/* <p className="mb-4">A video promoting the features of pairing a Samsung Soundbar with a Samsung TV, executed in a tongue-in-cheek manner. </p> */}

                            <h1 className="">The Terrace Feature Highlights</h1>
                            {/* <p className="mb-4">Produced a set of 4 videos each highlighting a feature of the latest Samsung lifestyle TV, The Terrace.</p> */}

                            <h1 className="">Smart Features Highlights</h1>
                            {/* <p className="mb-4">Produced a set of 4 videos highlighting a Smart Feature that comes equipped with Samsung Smart TVs</p> */}
                            <h1>QLED 8K + Galaxy S20</h1>
                            <h1>TV Burn-in Checker</h1>
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
                    <h1 className="mt-8 text-xl">Sentosa</h1>
                    <h1 className="mt-6 mb-4">Virtual Sentosa</h1>
                    <p className="ml-6 mb-4">
                    Compiled footage of Virtual Sentosa and edited + animated a set of launch and PR videos for the campaign. The videos were then distributed on Sentosa’s social media platforms as well as news outlets and channels both locally and globally.
                    </p>
                    <p className="ml-6 mb-4">
                    The campaign was covered by news outlets worldwide including Campaign Asia, Hypebeast, Conde Nast, NHK Japan.
                    </p>
                    <p className="ml-6 mb-4">
                    Various rounds of Case Studies were also edited and animated.
                    </p>
                    <h1 className="mt-6 mb-4">Social Media Content Creation</h1>
                    <p className="ml-6 mb-4">
                    #BehindSentosa
                    </p>
                    <p className="ml-6 mb-4">
                    Filmed and directed a video covering the efforts undertaken by the staff of Sentosa in response to the COVID-19 outbreak. The video went live on Sentosa’s Facebook and Instagram channels.
                    </p>
                    <p className="ml-6 mb-4">
                    Halloween Horror Nights 2019
                    </p>
                    <p className="ml-6 mb-4">
                    Art directed, filmed and produced a video distributed on Youtube and Facebook covering the behind the scenes and the attractions of Halloween Horror Nights 2019
                    </p>
                    <p className="ml-6 mb-4">
                    Sentosa Grillfest 2019
                    </p>
                    <p className="ml-6 mb-4">
                    Art directed and produced event coverage, interviews and quiz videos for the annual Grillfest on Sentosa.
                    </p>
                    <p className="ml-6 mb-4">
                    Sandsation: Star Wars 2019
                    </p>
                    <p className="ml-6 mb-4">
                    Art directed and produced teaser films and event coverage of the behind the scenes and happenings of the Star Wars edition of Sentosa Sandsation.
                    </p>
                    </motion.div>
            </div>

            {/* Kinetic */}
            <div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-28">
            <motion.div variants={animateInChild}>
            <p className="flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
                        rounded-full tracking-tighter font-medium text-sm w-[140px] mb-2 font-mono whitespace-nowrap">Motion Designer</p>
            <h3>Kinetic Singapore</h3>
            <i className="-ml-0.5 mb-2">January 2019 – April 2019</i>
            </motion.div>

                <motion.h1 className="mt-8 2xl:mt-14 text-xl" variants={animateInChild}>Uniqlo</motion.h1>
                    
                    <motion.div variants={animateInChild}>
                    <h1 className="mt-6 mb-4">New Style Fresh Start</h1>
                    <p className="ml-6 mb-4">
                    Produced a set of videos distributed on displays in stores around South East Asia as part of the 2019 Chinese New Year season.
                    </p>
                    </motion.div>

                    <motion.div variants={animateInChild}>
                    <h1 className="mt-6 mb-4">Your Stage Now Live</h1>
                    <p className="ml-6 mb-4">
                    Art Directed and produced a set of videos for the panoramic displays during the launch of the Uniqlo flagship store as part of the Your Stage Now Live launch campaign
                    </p>
                    </motion.div>
            </div>
        </motion.div>
    </>
    );
}