"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname();

    const navItems = [
        {href: "/", label: "Accueil"},
        {href: "/a-propos", label: "À propos"},
        {href: "/cours-activités", label: "Cours & Activités"},
        {href: "/studio-musique", label: "Studio Musique"},
        {href: "/workshops-evénements", label: "Workshops & Événements"},
        {href: "/actualités", label: "Actualités"},
        {href: "/dada-réseaux-artist", label: "Dada Réseaux Artist"}
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
            </div>
        </header>
    );
}

export default Header;