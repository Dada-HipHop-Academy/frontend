"use client";

import { Zap, Plane, Trophy, Palette, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Apropos() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            icon: <Zap className="text-[#E63946] w-8 h-8 md:w-10 md:h-10"/>,
            title: "ÉNERGIE",
            description: "L'énergie brute du hip-hop qui pulse dans chaque cours, chaque session, chaque instant partagé."
        },
        {
            icon: <Palette className="text-[#E63946] w-8 h-8 md:w-10 md:h-10"/>,
            title: "CRÉATIVITÉ",
            description: "Libère ton imagination. Invente ton style. Ose être différent et embrasse ta singularité."
        },
        {
            icon: <Plane className="text-[#E63946] w-8 h-8 md:w-10 md:h-10"/>,
            title: "LIBERTÉ",
            description: "Un espace sans jugement où tu peux explorer, te tromper, recommencer et grandir à ton rythme."
        },
        {
            icon: <Trophy className="text-[#E63946] w-8 h-8 md:w-10 md:h-10"/>,
            title: "DÉPASSEMENT",
            description: "Chaque jour est une occasion de repousser tes limites et de devenir la meilleure version de toi-même."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="relative w-full overflow-hidden py-28">
            <h1 className="text-center text-4xl md:text-6xl font-medium tracking-wider font-bebas">
                Qui sommes-nous ?
            </h1>
            <section className="relative px-4 md:px-6 lg:px-16 md:py-10 py-7">
                <div className="mx-auto max-w-7xl space-y-15 md:space-y-24">
                    {/* ROW 1 */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12 items-center">
                        {/* Red accent on far right edge of screen, spanning full row height */}
                        <div className="absolute top-0 bottom-0 right-0 w-2 bg-red-600 hidden lg:block" style={{ right: 'calc(-1 * (100vw - 100%) / 2)' }} />

                        {/* Image */}
                        <img
                            src="/about1.jpg"
                            alt="Dada Academy"
                            className="w-full rounded-4xl object-cover"
                        />

                        {/* Text */}
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed md:mb-6">
                                <span className="font-semibold">Dada Hip Hop Academy</span> est un centre
                                artistique et sportif conçu pour inspirer, former et accompagner
                                les talents de tous âges.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Fondé par <span className="font-semibold">Ghada Belgacem</span>, danseuse,
                                coach et créatrice de contenus, notre espace met en avant les
                                valeurs de la culture urbaine : énergie, créativité, liberté et
                                dépassement.
                            </p>

                            <Link href="/cours-activites#cours" className="bg-[#4ECDC4] hover:bg-teal-600 transition text-white px-5 py-3 rounded-md font-semibold cursor-pointer">
                                voir les cours
                            </Link>
                        </div>
                    </div>
                    {/*ROW 2*/}
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12 items-center">
                        <img
                            src="/about2.png"
                            alt="Dada Academy"
                            className="w-full rounded-4xl object-cover lg:hidden"
                        />
                        {/*Text*/}
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed md:mb-6">
                                Nous offrons un environnement où chacun peut évoluer à son rythme : passionnés, débutants, athlètes, artistes, enfants, adultes...
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                <span className="font-bold">Notre Objectif est simple:</span>
                                <br />
                                révéler le potentiel de chaque individu à travers le mouvement et la création.
                            </p>
                        </div>
                        {/* Image */}
                        <img
                            src="/about2.png"
                            alt="Dada Academy"
                            className="w-full rounded-4xl object-cover hidden lg:block"
                        />
                    </div>
                </div>
            </section>
            {/*<section className="px-4 md:px-6 lg:px-16 pt-5 md:pt-10">
                <h1 className="text-center text-4xl md:text-6xl font-medium tracking-wider font-bebas">
                    Nos valeurs fondamonentales
                </h1>
                
                <div className="lg:hidden mt-10">
                    <div className="relative">
                        <div className="border border-gray-600 rounded-xl p-4 md:p-6 shadow-lg">
                            <div className="w-18 h-18 md:w-20 md:h-20 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                                {cards[currentSlide].icon}
                            </div>
                            <h2 className="text-[#E63946] font-bold text-xl md:text-2xl mb-2 uppercase">
                                {cards[currentSlide].title}
                            </h2>
                            <p className="text-black mb-6">
                                {cards[currentSlide].description}
                            </p>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={prevSlide}
                                className="bg-[#E63946] text-white p-3 rounded-full hover:bg-red-700 transition"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            
                            <div className="flex gap-2">
                                {cards.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            idx === currentSlide ? 'bg-[#E63946] w-6' : 'bg-gray-300'
                                        }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="bg-[#E63946] text-white p-3 rounded-full hover:bg-red-700 transition"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-7 items-center mt-10">
                    {cards.map((card, idx) => (
                        <div key={idx} className="border border-gray-600 rounded-xl p-4 md:p-6 shadow-lg">
                            <div className="w-18 h-18 md:w-20 md:h-20 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                                {card.icon}
                            </div>
                            <h2 className="text-[#E63946] font-bold text-xl md:text-2xl mb-2 uppercase">
                                {card.title}
                            </h2>
                            <p className="text-black mb-6">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>*/}
        </div>
    );
}