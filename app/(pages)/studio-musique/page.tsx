export default function SutdioMusique() {
    const services = [
        {
            title: "ENREGISTREMENT VOCAL",
            description:
                "Cabine acoustique professionnelle et équipement haut de gamme pour des prises de son cristallines.",
            color: "bg-red-100",
            textColor: "text-[#E63946]",
        },
        {
            title: "CRÉATION MUSICALE",
            description:
                "Composition, arrangements et production sur mesure pour donner vie à vos projets artistiques.",
            color: "bg-teal-100",
            textColor: "text-[#4ECDC4]",
        },
        {
            title: "MIXAGE ET EDITING",
            description:
                "Post-production professionnelle pour un son parfaitement équilibré et prêt pour la diffusion.",
            color: "bg-red-100",
            textColor: "text-[#E63946]",
        },
        {
            title: "LOCATION STUDIO",
            description:
                "Espace moderne et équipé disponible à la location pour vos projets personnels ou professionnels.",
            color: "bg-teal-100",
            textColor: "text-[#4ECDC4]",
        },
        {
            title: "TOURNAGE VIDÉOS",
            description:
                "Sessions live et clips vidéo filmés dans notre studio avec éclairage professionnel.",
            color: "bg-red-100",
            textColor: "text-[#E63946]",
        },
        {
            title: "COACHING ARTISTIQUE",
            description:
                "Accompagnement personnalisé pour développer votre technique et affiner votre identité artistique.",
            color: "bg-teal-100",
            textColor: "text-[#4ECDC4]",
        },
    ];

    const tags = [
        "Artistes solos",
        "Groupes",
        "Danseurs",
        "Créateurs de contenu",
        "Ecoles",
        "Entreprise",
        "Rappeurs",
        "Beatmakers",
        "Chanteurs",
    ];

    return (
        <div className="w-full overflow-hidden py-28">
            <div className="px-4 md:px-6 lg:px-16">
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        <div className="lg:col-span-2">
                            <h1 className="text-9xl font-medium tracking-wider font-bebas uppercase">
                                Studio Musique
                            </h1>
                            <h1 className="text-8xl font-medium font-bebas mb-6 uppercase">
                                Création & Production
                            </h1>
                            <p className="text-lg">
                                Notre studio professionnel est ouvert aux chanteurs, rappeurs, danseurs, beatmakers et créateurs de contenu. Il permet d’enregistrer, produire, mixer, filmer et expérimenter dans un cadre moderne.
                            </p>
                        </div>
                        {/* Image */}
                        <img
                            src="/studiomusique1.png"
                            alt="Dada Academy"
                            className="w-full rounded-4xl object-cover"
                        />
                    </div>
                </section>
                <section>
                    <h2 className="text-4xl font-bebas font-medium tracking-wider">
                        Nos <span className="text-[#E63946]">Services</span>
                    </h2>
                    <p className="text-lg mb-6">Un accompagnement complet pour tous vos projets créatifs</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div className="rounded-2xl border border-gray-700 p-6 shadow-lg" key={index}>
                                <div className={`w-12 h-12 rounded-md mb-4 ${service.color}`} />
                                <h3 className={`text-3xl mb-2 uppercase font-bebas tracking-wider ${service.textColor}`}>
                                    {service.title}
                                </h3>
                                <p className="leading-relaxed text-md">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mt-20">
                    <h2 className="uppercase font-bebas tracking-wider text-4xl text-center">
                        Pou <span className="text-[#E63946]">qui ?</span>
                    </h2>
                    <p className="text-lg mb-6 text-center">Notre studio accueille tous les profils créatifs</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {tags.map((tag) => (
                            <button key={tag} className="cursor-pointer px-6 py-2 rounded-full border border-gray-800 text-md font-bold hover:bg-gray-200 transition">
                                {tag}
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}