'use client';
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import ExperienceCard from './ExperienceCard';
import { dropdown, dropdownChild } from "../../constants/animations";
import { useExperienceState } from "../../hooks/useExperienceState";

export default function ResumeFooter() {
    const { visibleSections, toggleCvSection } = useExperienceState();
    return (
        <>
            {/* Desktop Brands Container */}
            <motion.h1 
              className="text-[40px] md:text-3xl mt-20 tracking-tight font-medium text-black dark:text-white col-span-full hidden md:block" 
              key='brands-header'
              layout
            >
              Worked with:
            </motion.h1>
            <motion.div 
              className="md:col-span-full md:w-full mix-blend-difference relative mb-10 hidden md:grid grid-cols-6 xl:grid-cols-11 gap-5 md:-mx-9 xl:mx-0 mt-4" 
              layout 
              key='brands'
            >           
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/sia.png' className="w-[90px] h-[35px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/asm.png' className="w-[120px] h-[35px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/ikea.png' className="w-[75px] h-[25px]  object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/samsung.png' className="w-[95px] h-[25px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/uniqlo.png' className="w-[70px] h-[35px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/ghibli.png' className="w-[105px] h-[40px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/nike.png' className="w-[60px] h-[36px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/sc.png' className="w-[80px] h-[37px]  object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/stb.png' className="w-[90px] h-[35px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/mckinsey.png' className="w-[85px] h-[32px] object-cover opacity-80 scale-110"/>
                </div>
                <div className="flex items-center justify-center">
                    <img src='/brandlogos/jollibee.png' className="w-[80px] h-[30px] object-cover opacity-80 scale-110"/>
                </div>
            </motion.div>

            {/* Footer */}
            <div className="col-span-full grid-cols-5 w-full gap-8 hidden md:grid" key='footer'>  

                {/* Currently */}
                <ExperienceCard
                    header="Currently:"
                    title="Master's Student"
                    titleClassName="w-[125px]"
                    company="School of Visual Arts"
                    duration="September 2024 – May 2026"
                    isOpen={visibleSections.masters}
                    onToggle={() => toggleCvSection('masters')}
                    sectionKey="Currently"
                    damping={24}
                    showMobileDivider={false}
                    
                >
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-7 text-lg font-medium">Curriculum</h1>
                        <div className="">
                            <p className="mt-4">Research Methodologies</p>
                            <p>Service Design</p>
                            <p>Inclusive Design</p>
                            <p>UX Content Writing</p>
                            <p>User Experience Design</p>
                            <p>Programming <i>(C, Python, JavaScript)</i></p>
                            <p>Human Interaction & Ergonomics</p>
                            <p>Intellectual Property</p>
                            <p>Physical Computing</p>
                            <p>Smart Objects</p>
                            <p>Game Design</p>

                        </div>
                        <div className=" text-black/25 dark:text-white/25">
                            <p className="mt-0">Spatial Computing</p>
                            <p>Design for Cities</p>
                            <p>Thesis</p>
                        </div>
                    </motion.div>
                </ExperienceCard>

                {/* ASM */}
                <ExperienceCard
                    header="Previously:"
                    title="Creative Lead"
                    titleClassName="w-[104px]"
                    company={<span>Marina Bay Sands <i>(ArtScience Museum)</i></span>}
                    duration="January 2024 – November 2024"
                    isOpen={visibleSections.asm}
                    onToggle={() => toggleCvSection('asm')}
                    sectionKey="ASM"
                    damping={28}
                >
                    <motion.div className=" text-lg whitespace-nowrap tracking-tight flex items-center mt-7 font-medium">
                        ArtScience Museum
                    </motion.div>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-6 mb-4  opacity-90">The World of Studio Ghibli</h1>
                        <p className=" opacity-50">Creative direction for the integrated marketing campaign for The World of Studio Ghibli, the first ever Studio Ghibli exhibition in Singapore held at ArtScience Museum. Designed the Key Visual for the exhibition and provided creative direction over marketing partners as well as merchandise for the exhibition.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">Goddess: Brave. Bold. Beautiful.</h1>
                        <p className=" opacity-50">Creative direction and strategic positioning for the marketing campaign of Goddess, an exhibition at the ArtScience Museum that celebrates screen icons across 120 years of moving image history.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">Frida Kahlo: The Life of an Icon</h1>
                        <p className="mb-4  opacity-50">Creative direction and strategic positioning for the marketing campaign of Frida Kahlo: Life of an Icon, an exhibition at the ArtScience Museum on Mexican artist Frida Kahlo, alongside the companion exhibition Laid Bare: Frida&apos;s Inner World. Managed and produced visuals and assets across the campaign titled Frida Forever for the lineup of activities held at the museum.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">teamLab Future World: Where Art Meets Science</h1>
                        <p className=" opacity-50">Creative direction and oversight on all marketing deliverables for Future World, ArtScience Museum&apos;s permanent exhibition in collaboration with teamLab.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">ArtScience After Hours</h1>
                        <p className=" opacity-50">Creative direction and visual identity oversight on ArtScience After Hours, an all-encompassing night time experience for the ArtScience Museum, with late-night offerings and experiences beyond daylight.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">ArtScience Cinema</h1>
                        <p className=" opacity-50">Creative direction on all marketing deliverables for ArtScience Cinema, ArtScience Museum&apos;s purpose-built cinema that screens a curated programme of film all year round by the museum&apos;s film curatorial team.</p>
                    </motion.div>
                </ExperienceCard>

                {/* TBWA */}
                <ExperienceCard
                    title="Art Director"
                    titleClassName="w-[88px]"
                    company="TBWA\ Singapore"
                    duration="March 2021 – August 2023"
                    isOpen={visibleSections.tbwa}
                    onToggle={() => toggleCvSection('tbwa')}
                    sectionKey="TBWA"
                    damping={27}
                    className="pt-12"
                >
                    {/* Sub-accordion for SIA */}
                    <motion.div
                        className="flex justify-between cursor-pointer pr-1 mt-6"
                        onClick={() => toggleCvSection('sia')}
                        variants={dropdownChild}
                        >
                        <button className="text-lg whitespace-nowrap tracking-tight flex items-center font-medium">Singapore Airlines</button>
                        <button className="flex items-center">{visibleSections.sia ? <ChevronUpIcon className="ml-1 h-4 w-4"/> : <ChevronDownIcon className="ml-1 h-4 w-4"/>}</button>
                    </motion.div>
                    {visibleSections.sia && (
                        <motion.div key="dropdown-SIA" initial="hidden" animate="show" variants={dropdown}>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Beyond The Cabin</h1>
                                <p className="mb-4  opacity-50">Lead Creative and Motion Designer for Beyond The Cabin, an episodic brand campaign and content series that was centred around Singapore Airline&apos;s Cabin Crew&apos;s as World Class travellers with worldly passions.</p>
                                <p className="mb-4  opacity-50">Produced travel guides featuring Cabin Crew, casted for their expertise and passion for destinations flown to by Singapore Airlines. Showcasing a depth of understanding they have for the destinations and novel experiences through their insights</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Cocktail Conversations</h1>
                                <p className="mb-4  opacity-50">Lead Creative and Motion Designer for Cocktail Conversations, an episodic sustenance campaign and content series for the flagship SilverKris Lounge at Singapore Changi Airport Terminal 3. </p>
                                <p className="mb-4  opacity-50">Centred around the idea of the lounges being home to personalities from all walks of life around the world. We invited a couple of these personalities to have a conversation with us at the Crystal Bar in the First Class SilverKris Lounge, finishing off with a bespoke cocktail concocted just for them based off their answers and available for passengers to order at the bar.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Kris+ Brand Campaign</h1>
                                <p className="mb-4  opacity-50">Lead Creative for a tactical brand campaign for Kris+, the lifestyle rewards app by Singapore Airlines. Centred around the idea of a holiday getaway being just one tap away on the app through shopping and dining, the campaign was brought to life in the likes of a Rube Goldberg device, symbolising the domino effect through the journey of using the app.</p>
                                <p className="mb-4  opacity-50">The campaign launched with a 30s brand film and OOH placements around Singapore.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Travel Like Never Before</h1>
                                <p className="mb-4  opacity-50">Conceptualised and art directed a brand campaign for the recovery efforts of Singapore Airlines as travel restrictions lifted across the world in 2022. With the strategy of travelling bigger and better than ever before, the campaign was centred around travelling for the big milestone and sentimental moments now that travel is back on the table.</p>
                                <p className="mb-4  opacity-50">The brand film has been viewed over 36 million times.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">SilverKris Lounge</h1>
                                <p className="mb-4  opacity-50">Lead Creative, Editor and Motion Designer for the launch campaign of the brand new flagship SilverKris Lounges at Changi Airport. Produced a 90s brand film that covered the amenities across the 4 lounges.</p>
                                <p className="mb-4  opacity-50">Oversaw the creation of a glass installation of the Batik Motif as the entrance facade to the lounges and the animation of the Batik Motif for an 8 metre curved digital wall at the entrance foyer.</p>
                                <p className="mb-4  opacity-50">Art directed a photo asset library shoot and film shoot and offline / online edited the film till delivery.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Cargo THRUCOOL</h1>
                                <p className="mb-4  opacity-50">Conceptualized and art directed a film for Singapore Airlines Cargo&apos;s THRUCOOL product, that boasts a seamless cold chain cargo service for temperature critical products that can shipped across the world with Singapore Airline&apos;s global destinations network.</p>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Sub-accordion for IKEA */}
                    <motion.div className="flex justify-between cursor-pointer pr-1 mt-2 " onClick={() => toggleCvSection('ikea')} variants={dropdownChild}>
                        <button className=" text-lg whitespace-nowrap tracking-tight flex items-center font-medium">IKEA</button>
                        <button className=" flex items-center">{visibleSections.ikea ? <ChevronUpIcon className="ml-1 h-4 w-4"/> : <ChevronDownIcon className="ml-1 h-4 w-4"/>}</button>
                    </motion.div>
                    {visibleSections.ikea && (
                        <motion.div 
                            key="dropdown-ikea"
                            initial="hidden"
                            animate="show"
                            variants={dropdown}
                        >
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-4  mb-4 opacity-90 font-base">Oops Happens <i className="text-neutral-500">(HEMSÄKER)</i></h1>
                                <p className="mb-4  opacity-50">Art directed and conceptualised a campaign for IKEA Singapore & Malaysia&apos;s insurance product, HEMSAKER. A set of 9 videos that went live across IKEA&apos;s social platforms, web pages and various other platforms.</p>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Sub-accordion for SC */}
                    <motion.div className="flex justify-between cursor-pointer pr-1 mt-2" onClick={() => toggleCvSection('sc')} variants={dropdownChild}>
                        <button className=" text-lg whitespace-nowrap tracking-tight flex items-center font-medium">Standard Chartered</button>
                        <button className=" flex items-center">{visibleSections.sc ? <ChevronUpIcon className="ml-1 h-4 w-4"/> : <ChevronDownIcon className="ml-1 h-4 w-4"/>}</button>
                    </motion.div>
                    {visibleSections.sc && (
                        <motion.div 
                            key="dropdown-sc"
                            initial="hidden"
                            animate="show"
                            variants={dropdown}
                        >
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-4  mb-4 opacity-90 font-base">Marina Bay Financial Centre</h1>
                                <p className="mb-4  opacity-50">Art directed and did the offline / online edit of a video and photo set of the new Standard Chartered signage at Marina Bay Financial Centre as part of their latest brand identity refresh and brand evolution. The video and photos were circulated globally as part of internal communications in Standard Chartered Bank.</p>
                            </motion.div>
                        </motion.div>
                    )}
                </ExperienceCard>

                {/* BBH */}
                <ExperienceCard
                    title="Motion Art Director"
                    titleClassName="w-[135px]"
                    company="BBH Singapore"
                    duration="June 2019 – March 2021"
                    isOpen={visibleSections.bbh}
                    onToggle={() => toggleCvSection('bbh')}
                    sectionKey="BBH"
                    damping={26}
                    className="pt-12"   
                >
                    {/* SAMSUNG Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-6"
                    onClick={() => toggleCvSection('samsung')}
                    variants={dropdownChild}
                    layout='position'
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center font-medium">
                            Samsung
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.samsung 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Samsung Dropdown */}
                    {visibleSections.samsung && (
                    <motion.div className=""
                    key="dropdown-samsung"
                    initial="hidden"
                    animate="show"
                    variants={dropdown}>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Global Lifestyle TV Pitch</h1>
                            <p className="mb-4  opacity-50">
                            Provided motion design direction, content series visualisations and a manifesto film for the global pitch for the Lifestyle TV campaign.</p>
                            <p className="mb-4  opacity-50">
                            Winning both the Lifestyle TV campaign and global visual displays digital / social strategy, platform management and content creation retainer business for BBH Singapore.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">CES 2020</h1>
                            <p className="mb-4  opacity-50">
                            Art directed & executed on site social coverage of Samsung&apos;s Visual display&apos;s new releases and technology at CES 2020 in Las Vegas. </p>
                            <p className="mb-4  opacity-50">
                            Content produced involved short form video series distributed on Facebook and Instagram feed, day to day event coverage on Instagram stories and long form event recap videos for Youtube.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Motion Design</h1>
                            <p className="mb-4  opacity-50">
                            Edited and motion designed pre-roll films, Instagram Stories and Carousel posts for the Samsung Lifestyle TV social platforms. Both organic and paid media.</p>
                            <div className="ml-6 opacity-50 mb-10">
                                <h1 className="">The Frame</h1>
                                <h1 className="">Why Would You Do That?</h1>
                                <h1 className="">The Terrace Feature Highlights</h1>
                                <h1 className="">Smart Features Highlights</h1>
                                <h1>QLED 8K + Galaxy S20</h1>
                                <h1>TV Burn-in Checker</h1>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                    )}

                    {/* Nike Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={() => toggleCvSection('nike')}
                    variants={dropdownChild}
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center font-medium">
                            NIKE
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.nike 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>
                    
                    {/* Nike Dropdown */}
                    {visibleSections.nike && (
                    <motion.div 
                        key="dropdown-nike"
                        initial="hidden"
                        animate="show"
                        variants={dropdown}
                    >
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Athlete Stories: Koy & Toon</h1>
                            <p className="mb-4  opacity-50">
                            Offline and online edit and animation for a set of videos and a full film highlighting the stories of Bangkok based NIKE athletes Koy & toon, distributed on Nike&apos;s Instagram feed, stories and TV.</p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Women&apos;s Instazine</h1>
                            <p className="mb-10  opacity-50">
                            Edited and animated supporting assets for the campaign as well as the case study film for Women&apos;s Instazine</p>
                        </motion.div>
                    </motion.div>
                    
                    )}

                    {/* Jollibee Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2 -ml-0.5"
                    onClick={() => toggleCvSection('jollibee')}
                    variants={dropdownChild}
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center font-medium">
                            Jollibee
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.jollibee 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Jollibee Dropdown */}
                    {visibleSections.jollibee &&(
                    <motion.div 
                        key="dropdown-jollibee"
                        initial="hidden"
                        animate="show"
                        variants={dropdown}
                    >
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-4  mb-4 opacity-90 font-base">JolliEverAfter</h1>
                            <p className="mb-4  opacity-50">
                            Pre Production, Art Direction, Offline and online edit and animation of the teaser film & challenges for JolliEverAfter, a campaign for Jollibee that brought their annual long form film to TikTok in the form of 9 challenges.
                            </p>
                        </motion.div>
                    </motion.div>
                    )}

                    {/* Sentosa Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={() => toggleCvSection('sentosa')}
                    variants={dropdownChild}
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center font-medium">
                            Sentosa
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.sentosa 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Sentosa Dropdown */}
                    {visibleSections.sentosa && (
                    <motion.div className=""
                    key="dropdown-sentosa"
                    initial="hidden"
                    animate="show"
                    variants={dropdown}>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Virtual Sentosa</h1>
                            <p className="mb-4  opacity-50">
                            Compiled footage of Virtual Sentosa and edited + animated a set of launch and PR videos for the campaign. The videos were then distributed on Sentosa&apos;s social media platforms as well as news outlets and channels both locally and globally.</p>
                            <p className="mb-4  opacity-50">
                            The campaign was covered by news outlets worldwide including Campaign Asia, Hypebeast, Conde Nast, NHK Japan.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">#BehindSentosa</h1>
                            <p className="mb-4  opacity-50">
                            Filmed and directed a video covering the efforts undertaken by the staff of Sentosa in response to the COVID-19 outbreak. The video went live on Sentosa&apos;s Facebook and Instagram channels.</p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Motion Design</h1>
                            <p className="mb-4  opacity-50">
                            Content creation within the Social team for Sentosa within the Agency. Roles included Editor, Motion Designer and Videographer.</p>
                            <div className="ml-6 opacity-50 mb-10">
                                <h1>Sandsation: Star Wars</h1>
                                <h1>Sentosa Grillfest 2019</h1>
                                <h1>Siloso Beach Party</h1>
                                <h1>Halloween Horror Nights 2019</h1>
                                <h1>Island Lights</h1>
                                <h1>Tanjong Beach Club</h1>
                                <h1>Pokemon GO Safari Zone</h1>
                                <h1>Auriga Spa</h1>
                                <h1>AJ Hackett</h1>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                    )}
                </ExperienceCard>

                {/* Kinetic */}
                <ExperienceCard
                    title="Motion Designer"
                    titleClassName="w-[120px]"
                    company="Kinetic Singapore"
                    duration="January 2019 – Aptil 2019"
                    isOpen={visibleSections.kinetic}
                    onToggle={() => toggleCvSection('kinetic')}
                    sectionKey="Kinetic"
                    damping={25}
                    className="pt-12"
                >
                    <p className="mt-4">Freelance Creative</p>
                    <i className="-ml-[1px] opacity-75">July 2016 – October 2016</i>

                    <p className="mt-4">Creative Intern</p>
                    <i className="-ml-[1px] opacity-75">August 2015 – November 2015</i>

                    <h1 className="mt-8  text-lg font-medium">
                        Uniqlo Singapore</h1>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-8 mb-4  opacity-90">
                            New Style Fresh Start
                        </h1>
                        <p className=" opacity-50">
                        Produced a set of videos distributed on displays in stores around South East Asia as part of the 2019 Chinese New Year season.
                        </p>
                    </motion.div>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">
                            Your Stage Now Live</h1>
                        <p className=" opacity-50">
                        Art Directed and produced a set of videos for the panoramic displays during the launch of the Uniqlo flagship store as part of the Your Stage Now Live launch campaign
                        </p>
                    </motion.div>
                </ExperienceCard>

                <div className="lg:hidden pl-5 md:pl-0 md:col-span-1 sm:pr-10 mt-3">
                    <ExperienceCard
                        title="Motion Designer"
                        titleClassName="w-[120px]"
                        company="Freelance"
                        duration="November 2015 – January 2019"
                        isOpen={visibleSections.freelance}
                        onToggle={() => toggleCvSection('freelance')}
                        sectionKey="Freelance"
                        damping={24}
                    >
                        <p className="mt-4">The Secret Little Agency (TSLA)</p>
                        <p className="mt-1">MadebyAnonymous</p>
                        <p className="mt-1">GOODSTUPH</p>
                        <p className="mt-1">TMRRWstudio</p>
                        <p className="mt-1">Sixtoes.tv/TBWA Singapore</p>
                        <p className="mt-1">Superunion Singapore</p>
                    </ExperienceCard>
                </div>
            </div>

            {/* Bottom Spacer */}        
            <div className="col-span-full w-full h-[250px]" key='bottomspacer'/>
        </>
    );
} 