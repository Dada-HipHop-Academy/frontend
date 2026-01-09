"use client";

import { DropdownFilter } from "@/app/components/layout/DropdownFilter";
import { EventCard } from "@/app/components/layout/EventCard";
import { Heart, Music, Radio, Target, Users } from "lucide-react";

export default function WorkshopsEvenements() {
    const filters = [
        "Tous",
        "Dance",
        "Master class",
        "Battles et spectacles",
        "Atelies musique & création digitale",
        "Activités spéciales pour les clubs et leurs familles"
    ];

    const events = [
        {
            month: "Nov",
            day: "12",
            name: "Event names",
            category: "Dance",
            description: "Notre studio professionnel est ouvert aux chanteurs, rappeurs, danseurs, beatmakers et créateurs de contenu. Il permet d'enregistrer, produire, mixer, filmer et expérimenter dans un cadre moderne.",
            place: "event place",
            time: "08:00 pm",
            image: "event1.png"
        },
        {
            month: "Nov",
            day: "12",
            name: "Event names",
            category: "Dance",
            description: "Notre studio professionnel est ouvert aux chanteurs, rappeurs, danseurs, beatmakers et créateurs de contenu. Il permet d'enregistrer, produire, mixer, filmer et expérimenter dans un cadre moderne.",
            place: "event place",
            time: "08:00 pm",
            image: "event2.png"
        },
        {
            month: "Nov",
            day: "12",
            name: "Event names",
            category: "Dance",
            description: "Notre studio professionnel est ouvert aux chanteurs, rappeurs, danseurs, beatmakers et créateurs de contenu. Il permet d'enregistrer, produire, mixer, filmer et expérimenter dans un cadre moderne.",
            place: "event place",
            time: "08:00 pm",
            image: "event3.png"
        }
    ];

    const categories = [
        { id: "all", name: "Tous", icon: undefined },
        { id: "dance", name: "Dance", icon: Music },
        { id: "masterclass", name: "Master Class", icon: Users },
        { id: "battles", name: "Battles et spectacles", icon: Target },
        { id: "activities", name: "Activités spéciales pour les clubs et les familles", icon: Heart },
        { id: "workshops", name: "Ateliers musicaux et de création chorégraphique", icon: Radio }
    ];

    const currentFilter = "Tous";

    return (
        <div className="w-full overflow-hidden pt-28 pb-15">
            <div className="px-4 md:px-6 lg:px-16">
                <section className="px-0 md:px-10 lg:px-40 mb-12 md:mb-15">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bebas tracking-wider text-center mb-4 md:mb-6">
                        Workshops & Événements
                    </h1>
                    <p className="text-base md:text-lg text-center">
                        Notre studio professionnel est ouvert aux chanteurs, rappeurs, danseurs, beatmakers et créateurs de contenu. Il permet d'enregistrer, produire, mixer, filmer et expérimenter dans un cadre moderne.
                    </p>
                </section>
                <section>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:justify-center gap-4 mb-6 md:mb-10">
                        <h2 className="font-bebas text-2xl md:text-3xl tracking-wider">
                            Prochains <span className="text-[#E63946]">evenements</span>
                        </h2>
                        <DropdownFilter className="w-full md:w-100" categories={categories} />
                    </div>
                    <div className="grid grid-cols-1 mt-10 md:mt-15 gap-6 md:gap-10">
                        {events.map((event, index) => (
                            <EventCard event={event} key={index}/>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}