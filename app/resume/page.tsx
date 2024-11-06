export default function Resume() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-start justify-items-center sm:justify-items-start
        min-h-screen min-w-screen p-10 mt-10 gap-4 font-[family-name:var(--font-geist-sans)]">
            <div className="col-span-1 transition-all text-normal tracking-tight text-foreground -mt-5 pr-12">
                <h1 className="-ml-1 text-4xl leading-loose font-semibold">
                    Chris Leow
                </h1>
                <p className="mb-8 font-semibold">
                    Email – ithinkitschristopher@gmail.com
                    <br/>
                    LinkedIn – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-all hover:text-midground">Chris Leow</a>
                    <br/>
                    Instagram – <a href="https://www.instagram.com/khristurtle/" className="underline transition-all hover:text-midground">@khristurtle</a>
                </p>
                <p className="tracking-tight mb-4">
                    Born and raised in sunny <i>(to put it mildly)</i> Singapore, Chris was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, he finds himself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world. 
                    With a fervor for craft and a meticulous eye for finesse, he takes a possibly unhealthy pride in creating visually compelling work across various mediums.
                </p>
                <p className="tracking-tight mb-4">
                    As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore, Chris has eight years of experience in the Advertising and Design industry. He has most notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. 
                </p>
                <p className="tracking-tight mb-4">
                    In his spare time after work <i>(which, realistically, isn't much)</i>, he does even more work, but for himself—creating content through photography, videography, editing and motion design. When he is finally not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He loves building his living space up, though he wouldn’t go so far as to call it interior design.
                </p>
            </div>
            <div className="pr-18">
                <h1 className="font-semibold text-xl mb-2">
                Currently:<br/>
                </h1>
                <p>
                Master of Fine Arts (MFA) Interaction Design
                School of Visual Arts, New York City
                September 2024 – May 2026
                </p>
            </div>
            
            <div className="tracking-tight text-foreground">
                COLUMN 03
            </div>

            <div className="tracking-tight text-foreground">
                COLUMN 04
            </div>

            <div className="tracking-tight text-foreground">
                COLUMN 05
            </div>
        </div>
    );
}