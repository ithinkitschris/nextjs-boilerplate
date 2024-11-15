import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="
        flex justify-center sm:justify-start sm:ml-4 2xl:ml-6 items-center z-10
        fixed top-0 left-0 w-full p-2 mt-4
        tracking-tighter font-[family-name:var(--font-geist-sans)]">
            <div className="flex gap-6">
                <Link href="/"
                className="hover:text-midground hover:scale-95 font-medium transition-transform mr-1.5">
                    Take me back!
                </Link>
                {/* <Link href="/resume"
                className="hover:text-midground hover:scale-95 transition-transform">
                    Who am I?
                </Link>
                <Link href="/grid"
                className="hover:text-midground hover:scale-95 transition-transform">
                    What have I done?
                </Link>
                <Link href="/sandbox"
                className="hover:text-midground hover:scale-95 transition-transform">
                    What am I cooking?
                </Link> */}
            </div>
        </nav>
    );
};

export default Navbar;