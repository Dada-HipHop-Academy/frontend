"use client";

import { DropdownFilter } from "@/app/components/layout/DropdownFilter";
import { Clapperboard, HeartPulse, MicVocal, PersonStanding, Play, Tv, Users, Volleyball } from "lucide-react";

export default function Actualites() {
    const categories = [
        { id: "all", name: "Tous", icon: undefined },
        { id: "Sport", name: "Sport", icon: Volleyball },
        { id: "HipHop", name: "HipHop", icon: MicVocal },
        { id: "Dance", name: "Dance", icon: PersonStanding },
        { id: "Santé", name: "Santé", icon: HeartPulse }
    ];

    return (
        <div className="w-full overflow-hidden pt-28 pb-15">
            <div className="px-4 md:px-6 lg:px-16">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bebas tracking-wider text-center mb-4 md:mb-6">
                    Actualités & Blog
                </h1>
                <p className="text-base md:text-lg text-center mb-12 md:mb-15">
                    Retrouvez toutes les nouveautés de Dada Hip Hop Academy :
                </p>
                <div className="flex flex-col items-center justify-center mb-12 md:mb-15">
                    <DropdownFilter className="w-full md:w-100" categories={categories} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
                    <div
                        className="relative rounded-lg overflow-hidden shadow-md max-w-sm h-80 bg-cover"
                        style={{ backgroundImage: "url('act1.png')" }}
                    >
                        {/* Category badge */}
                        <div className="absolute top-0 left-0">
                            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-2 rounded-br-lg">
                                Sport
                            </span>
                        </div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 w-full p-4 bg-white/70 backdrop-blur-sm text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Article Titre
                            </h3>

                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                Text description, Venus Williams 45 set to make history
                            </p>

                            <button className="bg-[#4ECDC4] text-white py-2 px-3 rounded-lg transition-colors cursor-pointer">
                                Read More
                            </button>
                        </div>
                    </div>
                    <div
                        className="relative rounded-lg overflow-hidden shadow-md max-w-sm h-80 bg-cover"
                        style={{ backgroundImage: "url('act1.png')" }}
                    >
                        {/* Category badge */}
                        <div className="absolute top-0 left-0">
                            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-2 rounded-br-lg">
                                Sport
                            </span>
                        </div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 w-full p-4 bg-white/70 backdrop-blur-sm text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Article Titre
                            </h3>

                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                Text description, Venus Williams 45 set to make history
                            </p>

                            <button className="bg-[#4ECDC4] text-white py-2 px-3 rounded-lg transition-colors cursor-pointer">
                                Read More
                            </button>
                        </div>
                    </div>
                    <div
                        className="relative rounded-lg overflow-hidden shadow-md max-w-sm h-80 bg-cover"
                        style={{ backgroundImage: "url('act3.png')" }}
                    >
                        {/* Category badge */}
                        <div className="absolute top-0 left-0 z-10">
                            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-2 rounded-br-lg">
                                Sport
                            </span>
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 w-full p-4 text-center z-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Article Titre
                            </h3>

                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                Text description, Venus Williams 45 set to make history
                            </p>

                            <button className="bg-[#4ECDC4] text-white py-2 px-3 rounded-lg transition-colors cursor-pointer">
                                Read More
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}