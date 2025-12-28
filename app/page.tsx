import Image from "next/image";
import Hero from "./components/sections/Hero";
import { KeyboardMusic, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center">
          {/*Left Content*/}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bienvenue à <span className="font-semibold">Dada Hip Hop Academy</span>,
              un lieu unique dédié à la danse, au mouvement, au bien-être et à la création artistique.
            </p>

            {/*Image - show only on mobile*/}
            <div className="flex justify-center lg:hidden mb-8">
              <img src="/accueilImg1.jpg" alt="Dada Hip Hop" className="w-full max-w-md lg:max-w-lg rounded-[2rem] object-cover"/>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nous réunissons cours, clubs, studio musique, ateliers créatifs et espace digital
              pour offrir à chacun un véritable terrain d’expression.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rejoignez une communauté dynamique, artistique et passionnée.
            </p>

            <p className="font-bold text-gray-900 mb-10">
              Bougez. Créez. Exprimez-vous
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              {/*Card1*/}
              <div className="border border-[#E63946] rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                  <Users className="text-[#E63946]"/>
                </div>
                <h3 className="text-[#E63946] font-bold text-lg mb-2">
                  Rejoindre un club
                </h3>
                <p className="text-black mb-6">
                  Explorez nos styles de danse et trouvez votre rythme.
                </p>
                <button className="text-[#E63946] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Explorer <span>→</span>
                </button>
              </div>
              {/*Card2*/}
              <div className="border border-[#E63946] rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-md mb-4 flex justify-center items-center">
                  <KeyboardMusic className="text-[#E63946]"/>
                </div>
                <h3 className="text-[#E63946] font-bold text-lg mb-2">
                  Réserver au studio musique
                </h3>
                <p className="text-black mb-6">
                  Un studio musique pro pour enregistrer vos sons.
                </p>
                <button className="text-[#E63946] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Explorer <span>→</span>
                </button>
              </div>
            </div>
          </div>
          {/*Right Image*/}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <img src="/accueilImg1.jpg" alt="Dada Hip Hop" className="w-full max-w-md lg:max-w-lg rounded-4xl object-cover"/>
          </div>
        </div>
      </section>
    </>
  );
}
