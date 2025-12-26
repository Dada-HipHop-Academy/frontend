"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navItems = [
        { href: "/", label: "Accueil" },
        { href: "/a-propos", label: "À propos" },
        { href: "/cours-activites", label: "Cours & Activités" },
        { href: "/studio-musique", label: "Studio Musique" },
        { href: "/workshops-evenements", label: "Workshops & Événements" },
        { href: "/actualités", label: "Actualités" },
        { href: "/dada-réseaux-artist", label: "Dada Réseaux Artist" }
    ];

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
                        {navItems.map((item) => (
                            <Link href={item.href} key={item.href} className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${pathName === item.href ? "bg-[#4ECDC4]" : "bg-white"}`}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
                {/*Mobile Menu Button*/}
                <button className="md:hidden flex items-center" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                    {isMenuOpen
                        ? <X className="text-[#E63946]" />
                        : <Menu className="text-[#E63946]" />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link href={item.href} key={item.href} className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${pathName === item.href ? "bg-[#4ECDC4]" : "bg-white"}`}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;