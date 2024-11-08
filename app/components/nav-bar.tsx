import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="
        flex justify-center sm:justify-start sm:ml-8 sm: mt-1 items-center z-10
        fixed top-0 left-0 w-full p-5
        tracking-tight">
            <div className="flex gap-6">
                <Link href="/"
                className="hover:text-midground hover:scale-95 transition-all mr-1.5">
                    Home
                </Link>
                <Link href="/pages/resume"
                className="hover:text-midground hover:scale-95 transition-all">
                    Resume
                </Link>
                <Link href="/pages/sandbox"
                className="hover:text-midground hover:scale-95 transition-all">
                    Sandbox
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;