import { PersonStanding, Dumbbell, Gem } from 'lucide-react';

export default function CoursActivites() {
    const coursData = [
        {
            color: "red-100",
            textColor: "#E63946",
            title: "cours de dance",
            icon: PersonStanding,
            iconColor: "[#E63946]",
            items: [
                "Hip-hop",
                "Breakdance",
                "Danse classique",
                "Danse urbaine & freestyle",
                "Expression corporelle"
            ]
        },
        {
            color: "teal-100",
            textColor: "#4ECDC4",
            title: "cours de fitness",
            icon: Dumbbell,
            iconColor: "[#4ECDC4]",
            items: [
                "Fitness général",
                "Renforcement musculaire",
                "Stretching",
                "Cardio dance"
            ]
        },
        {
            color: "red-100",
            textColor: "#E63946",
            title: "cours bien etre",
            icon: Gem,
            iconColor: "[#E63946]",
            items: [
                "Yoga",
                "Pilates",
                "Gym douce"
            ]
        }
    ];

    const clubsData = [
        { image: "/cours1.png", label: "Hip-Hop" },
        { image: "/cours2.png", label: "Breakdance" },
        { image: "/cours3.png", label: "Fitness" },
        { image: "/cours4.png", label: "Yoga" },
        { image: "/cours4.png", label: "Classique" }
    ];

    return (
        <div className="w-full overflow-hidden py-28">
            <div className="px-4 md:px-6 lg:px-16">
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-15">
                        {/* Image */}
                        <img
                            src="/about1.jpg"
                            alt="Dada Academy"
                            className="w-full rounded-4xl object-cover hidden md:block"
                        />
                        <div>
                            <h1 className="text-4xl md:text-6xl text-center md:text-left font-medium tracking-wider font-bebas mb-3 md:mb-6">
                                Nos Cours & Activités
                            </h1>
                            <img
                                src="/about1.jpg"
                                alt="Dada Academy"
                                className="w-full rounded-4xl object-cover md:hidden mb-3"
                            />
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
                        {coursData.map((cours, index) => (
                            <div key={index} className="border border-gray-700 rounded-xl p-6 shadow-lg">
                                <div className={`w-12 h-12 bg-${cours.color} rounded-md mb-4 flex justify-center items-center`}>
                                    <cours.icon className={`text-${cours.iconColor} w-7 h-7`}/>
                                </div>
                                <h3 className="text-3xl mb-2 uppercase font-bebas tracking-wider" style={{ color: cours.textColor }}>
                                    {cours.title}
                                </h3>
                                <ul className="list-disc list-inside">
                                    {cours.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-medium tracking-wider font-bebas">Clubs pour <span className="text-[#E63946]">Enfants</span> et <span className="text-[#4ECDC4]">Adultes</span></h2>
                    <p className="">Rejoignez nos clubs et faites partie d'une communauté passionnée. Des sessions régulières pour progresser ensemble.</p>
                    <div className="hidden lg:grid lg:grid-cols-5 gap-10 py-8">
                        {clubsData.map((club, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer group">
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition items-center justify-center flex">
                                    <img
                                        src={club.image}
                                        className="object-cover"
                                    />
                                </div>
                                <span className="mt-3 text-2xl text-[#E63946] tracking-wider uppercase font-bebas">
                                    {club.label}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="lg:hidden py-8 overflow-x-auto">
                        <div className="flex gap-6 px-4">
                            {clubsData.map((club, index) => (
                                <div key={index} className="flex flex-col items-center cursor-pointer group min-w-40">
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition items-center justify-center flex">
                                        <img
                                            src={club.image}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="mt-3 text-2xl text-[#E63946] tracking-wider uppercase font-bebas">
                                        {club.label}
                                    </span>
                                </div>
                            ))}
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
                        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-20">
                            <div className="flex flex-col">
                                <h1 className="text-[#E63946] uppercase font-bebas tracking-wider text-3xl md:text-5xl mb-4 md:mb-6 text-center lg:text-left">
                                    Coaching individuel
                                </h1>
                                <p className="mb-4 md:mb-6 text-center lg:text-left">
                                    Un accompagnement personnalisé pour développer technique, souplesse, force, confiance et performance.
                                </p>
                                <div className="flex flex-row items-center gap-2 mb-4 md:mb-6 justify-center lg:justify-start">
                                    <div className="rounded-full h-5 w-5 bg-[#4ECDC4]" />
                                    <p>Programme 100% personalise</p>
                                </div>
                                <img src="/coaching.png" alt="Image of coaching" className="rounded-2xl w-full lg:hidden mb-4" />
                                <div className="flex justify-center lg:justify-start">
                                    <button className="bg-[#4ECDC4] py-2 px-5 rounded-lg text-white cursor-pointer hover:bg-red-700 transition-all w-full lg:w-auto">
                                        Reserver une seance
                                    </button>
                                </div>
                            </div>
                            <img src="/coaching.png" alt="Image of coaching" className="rounded-2xl hidden lg:block" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}