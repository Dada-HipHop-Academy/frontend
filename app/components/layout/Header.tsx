import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md py-2">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/*LOGO*/}
                <Link href="/" className="flex items-center">
                    <img src="/logo.png" alt="Dada HipHop Academy Logo" className="h-16 w-auto cursor-pointer" />
                    <p className="font-bold">Hip Hop Academy</p>
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-7">
                    <div className="flex items-center space-x-7">
                        <Link href="/" className="bg-white hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md">
                            Accueil
                        </Link>
                        <Link href="/a-propos" className="bg-white hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md">
                            À propos
                        </Link>
                        <Link href="/" className="bg-white hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md">
                            Cours & Activités
                        </Link>
                        <Link href="/" className="bg-white hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md">
                            Studio Musique
                        </Link>
                        <Link href="/" className="bg-white hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md">
                            Workshops & Événements
                        </Link>
                        <Link href="/" className="bg-white hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md">
                            Actualités
                        </Link>
                        <Link href="/" className="bg-white hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md">
                            Dada Réseaux Artist
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;