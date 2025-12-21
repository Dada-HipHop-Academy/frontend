export default function CoursActivites() {
    return (
        <div className="w-full overflow-hidden py-28">
            <div className="px-4 md:px-6 lg:px-16">
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-15">
                        {/* Image */}
                        <img
                            src="/about1.jpg"
                            alt="Dada Academy"
                            className="w-full rounded-4xl object-cover"
                        />
                        <div>
                            <h1 className="text-6xl font-medium tracking-wider font-bebas mb-6">
                                Nos Cours & Activités
                            </h1>
                            <p className="text-lg">
                                Découvrez une variété de cours conçus pour développer votre technique, votre forme physique et votre créativité. Nos coachs qualifiés vous accompagnent à chaque étape.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-medium tracking-wider font-bebas">Tous Nos <span className="text-[#E63946]">Cours</span></h2>
                    <p className="">Des programmes adaptés à tous les niveaux, du débutant à l'expert.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 mb-15">
                        {/*CARD 1*/}
                        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-red-300 rounded-md mb-4" />
                            <h3 className="text-[#E63946] text-3xl mb-2 uppercase font-bebas tracking-wider">
                                cours de dance
                            </h3>
                            <ul className="list-disc list-inside">
                                <li>Hip-hop</li>
                                <li>Breakdance</li>
                                <li>Danse classique</li>
                                <li>Danse urbaine & freestyle</li>
                                <li>Expression corporelle</li>
                            </ul>
                        </div>
                        {/*CARD 2*/}
                        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-[#4ECDC4] rounded-md mb-4" />
                            <h3 className="text-[#4ECDC4] text-3xl mb-2 uppercase font-bebas tracking-wider">
                                cours de fitness
                            </h3>
                            <ul className="list-disc list-inside">
                                <li>Fitness général</li>
                                <li>Renforcement musculaire</li>
                                <li>Stretching</li>
                                <li>Cardio dance</li>
                            </ul>
                        </div>
                        {/*CARD 3*/}
                        <div className="border border-gray-700 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-red-300 rounded-md mb-4" />
                            <h3 className="text-[#E63946] text-3xl mb-2 uppercase font-bebas tracking-wider">
                                cours bien etre
                            </h3>
                            <ul className="list-disc list-inside">
                                <li>Yoga</li>
                                <li>Pilates</li>
                                <li>Gym douce</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-medium tracking-wider font-bebas">Clubs pour <span className="text-[#E63946]">Enfants</span> et <span className="text-[#4ECDC4]">Adultes</span></h2>
                    <p className="">Rejoignez nos clubs et faites partie d'une communauté passionnée. Des sessions régulières pour progresser ensemble.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 py-8">
                        {/*Circle 1*/}
                        <div className="flex flex-col items-center cursor-pointer group">
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition">
                                <img
                                    src="/cours1.png"
                                    className="object-cover"
                                />
                            </div>
                            <span className="mt-3 text-2xl text-[#E63946] tracking-wider uppercase font-bebas">
                                Hip-Hop
                            </span>
                        </div>
                        {/*Circle 2*/}
                        <div className="flex flex-col items-center cursor-pointer group">
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition">
                                <img
                                    src="/cours2.png"
                                    className="object-cover"
                                />
                            </div>
                            <span className="mt-3 text-2xl text-[#E63946] tracking-wider uppercase font-bebas">
                                Breakdance
                            </span>
                        </div>
                        {/*Circle 3*/}
                        <div className="flex flex-col items-center cursor-pointer group">
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition">
                                <img
                                    src="/cours3.png"
                                    className="object-cover"
                                />
                            </div>
                            <span className="mt-3 text-2xl text-[#E63946] tracking-wider uppercase font-bebas">
                                Fitness
                            </span>
                        </div>
                        {/*Circle 4*/}
                        <div className="flex flex-col items-center cursor-pointer group">
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition items-center justify-center flex">
                                <img
                                    src="/cours4.png"
                                    className="object-cover"
                                />
                            </div>
                            <span className="mt-3 text-2xl text-[#E63946] tracking-wider uppercase font-bebas">
                                Yoga
                            </span>
                        </div>
                        {/*Circle 5*/}
                        <div className="flex flex-col items-center cursor-pointer group">
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition">
                                <img
                                    src="/cours4.png"
                                    className="object-cover"
                                />
                            </div>
                            <span className="mt-3 text-2xl text-[#E63946] tracking-wider uppercase font-bebas">
                                Classique
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-[#E63946] py-2 px-10 rounded-lg text-white cursor-pointer hover:bg-red-700 transition-all font-bebas tracking-widest text-lg">
                            Rejoindre un club
                        </button>
                    </div>
                </section>
                <section className="mt-15">
                    <div className="p-5 rounded-2xl border border-gray-600">
                        <div className="flex flex-row justify-between gap-20">
                            <div>
                                <h1 className="text-[#E63946] uppercase font-bebas tracking-wider text-5xl mb-6">
                                    Coaching individuel
                                </h1>
                                <p className="mb-6">
                                    Un accompagnement personnalisé pour développer technique, souplesse, force, confiance et performance.
                                </p>
                                <div className="flex flex-row items-center gap-2 mb-6">
                                    <div className="rounded-full h-5 w-5 bg-[#4ECDC4]" />
                                    <p>Programme 100% personalise</p>
                                </div>
                                <button className="bg-[#4ECDC4] py-2 px-5 rounded-lg text-white cursor-pointer hover:bg-red-700 transition-all">
                                    Reserver une seance
                                </button>
                            </div>
                            <img src="/coaching.png" alt="Image of coaching" className="rounded-2xl" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}