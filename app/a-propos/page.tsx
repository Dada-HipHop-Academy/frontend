import { Zap, Plane, Trophy, Palette } from "lucide-react";

export default function Apropos() {
    return (
        <div className="relative w-full overflow-hidden py-28">
            <h1 className="text-center text-6xl font-medium tracking-wider font-bebas">
                Qui sommes-nous ?
            </h1>
            <section className="relative px-4 md:px-6 lg:px-16 py-10">
                <div className="mx-auto max-w-7xl space-y-24">
                    {/* ROW 1 */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Red accent on far right edge of screen, spanning full row height */}
                        <div className="absolute top-0 bottom-0 right-0 w-2 bg-red-600 hidden lg:block" style={{ right: 'calc(-1 * (100vw - 100%) / 2)' }} />

                        {/* Image */}
                        <img
                            src="/about1.jpg"
                            alt="Dada Academy"
                            className="w-full rounded-[2rem] object-cover"
                        />

                        {/* Text */}
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                <span className="font-semibold">Dada Hip Hop Academy</span> est un centre
                                artistique et sportif conçu pour inspirer, former et accompagner
                                les talents de tous âges.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Fondé par <span className="font-semibold">Ghda Belgacem</span>, danseuse,
                                coach et créatrice de contenus, notre espace met en avant les
                                valeurs de la culture urbaine : énergie, créativité, liberté et
                                dépassement.
                            </p>

                            <button className="bg-[#4ECDC4] hover:bg-teal-600 transition text-white px-5 py-3 rounded-md font-semibold cursor-pointer">
                                voir les cours
                            </button>
                        </div>
                    </div>
                    {/*ROW 2*/}
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap:12 items-center">
                        {/*Text*/}
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
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
                            className="w-full rounded-[2rem] object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-6 lg:px-16 pt-10">
                <h1 className="text-center text-6xl font-medium tracking-wider font-bebas">
                    Nos valeurs fondamonentales
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 items-center mt-10">
                    {/*CARD1*/}
                    <div className="border border-gray-600 rounded-xl p-6 shadow-lg">
                        <div className="w-20 h-20 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                            <Zap className="text-[#E63946] w-10 h-10"/>
                        </div>
                        <h2 className="text-[#E63946] font-bold text-2xl mb-2 uppercase">
                            énergie
                        </h2>
                        <p className="text-black mb-6">
                            L'énergie brute du hip-hop qui pulse danschaque cours, chaque session, chaque instant partagé.
                        </p>
                    </div>
                    {/*CARD2*/}
                    <div className="border border-gray-600 rounded-xl p-6 shadow-lg">
                        <div className="w-20 h-20 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                            <Palette className="text-[#E63946] w-10 h-10"/>
                        </div>
                        <h2 className="text-[#E63946] font-bold text-2xl mb-2 uppercase">
                            Creativite
                        </h2>
                        <p className="text-black mb-6">
                            Libère ton imagination. Invente ton style. Ose être différent et embrasse ta singularité.

                        </p>
                    </div>
                    {/*CARD3*/}
                    <div className="border border-gray-600 rounded-xl p-6 shadow-lg">
                        <div className="w-20 h-20 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                            <Plane className="text-[#E63946] w-10 h-10"/>
                        </div>
                        <h2 className="text-[#E63946] font-bold text-2xl mb-2 uppercase">
                            Libirte
                        </h2>
                        <p className="text-black mb-6">
                            Un espace sans jugement où tu peux explorer, te tromper, recommencer et grandir à ton rythme.
                        </p>
                    </div>
                    {/*CARD4*/}
                    <div className="border border-gray-600 shadow-lg rounded-xl p-6">
                        <div className="w-20 h-20 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                            <Trophy className="text-[#E63946] w-10 h-10"/>
                        </div>
                        <h2 className="text-[#E63946] font-bold text-2xl mb-2 uppercase">
                            Depassement
                        </h2>
                        <p className="text-black mb-6">
                            Chaque jour est une occasion de repousser tes limites et de devenir la meilleure version de toi-même.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}