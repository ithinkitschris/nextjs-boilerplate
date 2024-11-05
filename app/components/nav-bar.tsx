import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="
        fixed top-1 left-5 right-0 p-5 
        flex justify-center sm:justify-start items-center z-10
        font-bold text-sm tracking-tight">
            <div className="flex gap-6">
                <Link href="/"
                className="hover:text-midground hover:scale-95 transition-all mr-1.5">
                    Home
                </Link>
                <Link href="/resume"
                className="hover:text-midground hover:scale-95 transition-all">
                    Resume
                </Link>
                <Link href="/gallery"
                className="hover:text-midground hover:scale-95 transition-all">
                    Gallery
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;