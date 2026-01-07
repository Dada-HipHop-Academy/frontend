"use client";

import { DropdownFilter } from "@/app/components/layout/DropdownFilter";
import MasonryGallery from "@/app/components/sections/MasonryGallery";
import { Play, Users, Tv, Clapperboard } from "lucide-react";

export default function GalerieMedia() {
    const categories = [
        { id: "all", name: "Tous", icon: null },
        { id: "shows", name: "Shows", icon: Tv },
        { id: "cours", name: "Cours", icon: Users },
        { id: "coulisses", name: "Coulisses", icon: Clapperboard },
        { id: "videos", name: "Video", icon: Play }
    ];

    return(
        <div className="w-full overflow-hidden pt-28 pb-15">
            <div className="px-4 md:px-6 lg:px-16">
                <section className="px-0 md:px-10 lg:px-40 mb-12 md:mb-15">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bebas tracking-wider text-center mb-4 md:mb-6">
                        Galerie Média
                    </h1>
                    <p className="text-base md:text-lg text-center">
                        La créativité ici s’exprime en image.
                    </p>
                    <p className="text-base md:text-lg text-center">
                        Découvrez nos performances, nos coulisses et les plus beaux instants de
                    </p>
                    <p className="text-base md:text-lg text-center font-bold">
                        Dada Hip Hop Academy
                    </p>
                </section>
                <section>
                    <div className="flex flex-col items-center justify-center mb-12 md:mb-15">
                        <DropdownFilter className="w-full md:w-100" categories={categories} />
                    </div>
                </section>
                <section>
                    <MasonryGallery/>
                </section>
            </div>
        </div>
    );
}