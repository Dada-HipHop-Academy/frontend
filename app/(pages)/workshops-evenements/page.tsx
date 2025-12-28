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
            time: "08:00 pm",
            place: "event place"
        },
        {
            month: "Nov",
            day: "12",
            name: "Event names",
            category: "Dance",
            time: "08:00 pm",
            place: "event place"
        },
        {
            month: "Nov",
            day: "12",
            name: "Event names",
            category: "Dance",
            time: "08:00 pm",
            place: "event place"
        }
    ];
    
    const currentFilter = "Tous";
    
    return (
        <div className="w-full overflow-hidden py-28">
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
                    <h2 className="font-bebas text-2xl md:text-3xl tracking-wider text-center mb-6 md:mb-0">
                        Prochains <span className="text-[#E63946]">evenements</span>
                    </h2>
                    <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-12 items-center justify-center mt-6 md:mt-10">
                        {filters.map((filter) => (
                            <button 
                                className={`cursor-pointer flex flex-row items-center justify-center gap-2 border p-2 border-gray-700 rounded-xl transition-all ${filter === currentFilter ? "bg-[#4ECDC4]" : "bg-white"}`} 
                                key={filter}
                            >
                                <div className={`${filter === currentFilter ? "bg-white" : "bg-red-300"} rounded-md h-5 w-5 md:h-7 md:w-7`}/>
                                <span className="text-black font-semibold text-sm md:text-base lg:text-lg">{filter}</span>
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 mt-10 md:mt-15 gap-6 md:gap-10">
                        {events.map((event, index) => (
                            <div key={index} className="border border-gray-700 rounded-2xl flex flex-col md:flex-row justify-between py-4 md:py-4 px-4 md:px-7 gap-4 md:gap-0 md:items-center">
                                <div className="flex flex-row gap-4 md:gap-5">
                                    <div className="rounded-2xl bg-[#E63946] text-white font-bold p-4 md:p-6 text-center text-xl md:text-2xl min-w-20 md:min-w-25">
                                        {event.month}
                                        <br/>
                                        <span className="text-4xl md:text-6xl font-extrabold">{event.day}</span>
                                    </div>
                                    <div className="flex flex-col justify-between items-start">
                                        <h1 className="font-extrabold text-2xl md:text-4xl">{event.name}</h1>
                                        <p className="font-medium text-sm md:text-base">{event.category}</p>
                                        <p className="font-medium text-sm md:text-base">time: {event.time}</p>
                                        <p className="font-medium text-sm md:text-base">place: {event.place}</p>
                                    </div>
                                </div>
                                <button className="bg-[#E63946] py-2 px-8 md:px-12 text-white text-lg md:text-2xl font-bold rounded-lg hover:bg-red-700 transition-all w-full md:w-auto">
                                    Get ticket
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}