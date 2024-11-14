import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="
        flex justify-center sm:justify-start sm:ml-4 2xl:ml-6 items-center z-10
        fixed top-0 left-0 w-full p-2 mt-2
        tracking-tight">
            <div className="flex gap-6">
                <Link href="/"
                className="hover:text-midground hover:scale-95 transition-transform mr-1.5">
                    Let's rewind
                </Link>
                <Link href="/resume"
                className="hover:text-midground hover:scale-95 transition-transform">
                    Who am I?
                </Link>
                <Link href="/grid"
                className="hover:text-midground hover:scale-95 transition-transform">
                    What have I done?
                </Link>
                <Link href="/sandbox"
                className="hover:text-midground hover:scale-95 transition-transform">
                    Sandbox
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;