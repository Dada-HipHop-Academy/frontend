"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            
            // Ne pas fermer si on clique sur un lien
            if (target instanceof HTMLElement && target.tagName === 'A') {
                return;
            }
            
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isMenuOpen || isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, isDropdownOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const aproposItems = [
        { href: "/a-propos", label: "Qui nous sommes" },
        { href: "/cours-activites", label: "Cours & Activités" },
        { href: "/workshops-evenements", label: "Workshops & Événements" },
        { href: "/galerie-media", label: "Galerie" },
        { href: "/contact", label: "Contact" },
    ];

    const isAproposActive = aproposItems.some(item => pathName === item.href);

    const handleLinkClick = () => {
        // Petit délai pour permettre à la navigation de s'exécuter
        setTimeout(() => {
            setIsDropdownOpen(false);
            setIsMenuOpen(false);
        }, 100);
    };

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
                        {/*Accueil*/}
                        <Link href="/" className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${pathName === "/" ? "bg-[#4ECDC4]" : "bg-white"}`}>
                            Accueil
                        </Link>

                        {/* A propos Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${isAproposActive ? "bg-[#4ECDC4]" : "bg-white"}`}
                            >
                                À propos
                                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 min-w-50">
                                    {aproposItems.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.href}
                                            className={`block px-4 py-2 hover:bg-[#4ECDC4] text-black ${pathName === item.href ? "bg-[#4ECDC4]" : ""}`}
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/*Studio Musique*/}
                        <Link href="/studio-musique" className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${pathName === "/studio-musique" ? "bg-[#4ECDC4]" : "bg-white"}`}>
                            Studio Musique
                        </Link>

                        {/*Dada Réseaux Artist*/}
                        <Link href="/dada-reseaux-artist" className={`hover:bg-[#E63946] hover:text-white flex items-center cursor-pointer text-[#E63946] font-semibold border border-[#E63946] rounded-lg py-1 px-3 ${pathName === "/dada-reseaux-artist" ? "bg-[#E63946] text-white" : "bg-white"} transition-all duration-300 ease-in-out`}>
                            Dada Réseaux Artist
                        </Link>
                    </div>
                </nav>

                {/*Mobile Menu Button*/}
                <button
                    className="md:hidden flex items-center"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen
                        ? <X className="text-[#E63946]" />
                        : <Menu className="text-[#E63946]" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4" ref={mobileMenuRef}>
                    <div className="flex flex-col space-y-4">
                        {/* Accueil */}
                        <Link
                            href="/"
                            className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${pathName === "/" ? "bg-[#4ECDC4]" : "bg-white"}`}
                            onClick={handleLinkClick}
                        >
                            Accueil
                        </Link>

                        {/* À propos Dropdown Mobile */}
                        <div>
                            <button
                                onClick={toggleDropdown}
                                className={`w-full hover:bg-[#4ECDC4] flex items-center justify-between cursor-pointer text-black py-1 px-2 rounded-md ${isAproposActive ? "bg-[#4ECDC4]" : "bg-white"}`}
                            >
                                À propos
                                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="mt-2 ml-4 flex flex-col space-y-2">
                                    {aproposItems.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.href}
                                            className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${pathName === item.href ? "bg-[#4ECDC4]" : "bg-white"}`}
                                            onClick={handleLinkClick}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Studio Musique */}
                        <Link
                            href="/studio-musique"
                            className={`hover:bg-[#4ECDC4] flex items-center cursor-pointer text-black py-1 px-2 rounded-md ${pathName === "/studio-musique" ? "bg-[#4ECDC4]" : "bg-white"}`}
                            onClick={handleLinkClick}
                        >
                            Studio Musique
                        </Link>

                        {/* Dada Réseaux Artist - Special Design Mobile */}
                        <Link
                            href="/dada-reseaux-artist"
                            className={`flex items-center cursor-pointer text-[#E63946] font-semibold border border-[#E63946] rounded-lg py-1 px-3 ${pathName === "/dada-reseaux-artist" ? "bg-[#E63946] text-white" : "bg-white"}`}
                            onClick={handleLinkClick}
                        >
                            Dada Réseaux Artist
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;