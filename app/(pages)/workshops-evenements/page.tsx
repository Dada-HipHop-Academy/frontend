export default function WorkshopsEvenements() {
    const filters = [
        "Tous",
        "Dance",
        "Master class",
        "Battles et spectacles",
        "Atelies musique & création digitale",
        "Activités spéciales pour les clubs et leurs familles"
    ];
    const currentFilter = "Tous";
    return (
        <div className="w-full overflow-hidden py-28">
            <div className="px-4 md:px-6 lg:px-16">
                <section className="px-40 mb-15">
                    <h1 className="text-9xl font-bebas tracking-wider text-center mb-6">
                        Workshops & Événements
                    </h1>
                    <p className="text-lg text-center">
                        Notre studio professionnel est ouvert aux chanteurs, rappeurs, danseurs, beatmakers et créateurs de contenu. Il permet d’enregistrer, produire, mixer, filmer et expérimenter dans un cadre moderne.
                    </p>
                </section>
                <section>
                    <h2 className="font-bebas text-3xl tracking-wider text-center">
                        Prochains <span className="text-[#E63946]">evenements</span>
                    </h2>
                    <div className="flex flex-wrap gap-12 items-cente justify-center mt-10">
                        {filters.map((filter) => (
                            <button className={`cursor-pointer flex flex-row items-center justify-center gap-2 border p-2 border-gray-700 rounded-xl ${filter === currentFilter ? "bg-[#4ECDC4]" : "bg-white"}`} key={filter}>
                                <div className={`${filter === currentFilter ? "bg-white" : "bg-red-300"} rounded-md h-7 w-7`}/>
                                <span className="text-black font-semibold text-lg">{filter}</span>
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 mt-15 gap-10">
                        <div className="border border-gray-700 rounded-2xl flex flex-row justify-between py-4 px-7 items-center">
                            <div className="flex flex-row gap-5">
                                <div className="rounded-2xl bg-[#E63946] text-white font-bold p-6 text-center text-2xl">
                                    Nov
                                    <br/>
                                    <span className="text-6xl font-extrabold">12</span>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <h1 className="font-extrabold text-4xl">Event names</h1>
                                    <p className="font-medium">Dance</p>
                                    <p className="font-medium">time: 08:00 pm</p>
                                    <p className="font-medium">place: event place</p>
                                </div>
                            </div>
                            <button className="bg-[#E63946] py-2 px-12 text-white text-2xl font-bold">
                                Get ticket
                            </button>
                        </div>
                        <div className="border border-gray-700 rounded-2xl flex flex-row justify-between py-4 px-7 items-center">
                            <div className="flex flex-row gap-5">
                                <div className="rounded-2xl bg-[#E63946] text-white font-bold p-6 text-center text-2xl">
                                    Nov
                                    <br/>
                                    <span className="text-6xl font-extrabold">12</span>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <h1 className="font-extrabold text-4xl">Event names</h1>
                                    <p className="font-medium">Dance</p>
                                    <p className="font-medium">time: 08:00 pm</p>
                                    <p className="font-medium">place: event place</p>
                                </div>
                            </div>
                            <button className="bg-[#E63946] py-2 px-12 text-white text-2xl font-bold">
                                Get ticket
                            </button>
                        </div>
                        <div className="border border-gray-700 rounded-2xl flex flex-row justify-between py-4 px-7 items-center">
                            <div className="flex flex-row gap-5">
                                <div className="rounded-2xl bg-[#E63946] text-white font-bold p-6 text-center text-2xl">
                                    Nov
                                    <br/>
                                    <span className="text-6xl font-extrabold">12</span>
                                </div>
                                <div className="flex flex-col justify-between items-start">
                                    <h1 className="font-extrabold text-4xl">Event names</h1>
                                    <p className="font-medium">Dance</p>
                                    <p className="font-medium">time: 08:00 pm</p>
                                    <p className="font-medium">place: event place</p>
                                </div>
                            </div>
                            <button className="bg-[#E63946] py-2 px-12 text-white text-2xl font-bold">
                                Get ticket
                            </button>
                        </div>  
                    </div>
                </section>
            </div>
        </div>
    );
}