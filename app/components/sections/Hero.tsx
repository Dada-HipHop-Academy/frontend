import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Image */}
            <img
                src="/heroimg.jpg"
                alt="Hero"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-bl from-red-600/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/40 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="font-bebas tracking-wider text-5xl md:text-6xl lg:text-8xl font-medium mb-6 text-white uppercase">
                        DADA HIP HOP
                        <br />
                        ACADEMY
                    </h1>

                    <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">
                        Danse. Culture. Création.
                    </h3>

                    <p className="text-white text-xl md:text-2xl mb-6">
                        L’espace où chaque talent trouve son expression.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="bg-[#4ECDC4] py-2 px-4 text-white rounded-lg font-semibold">
                            Découvrir nos cours
                        </Link>
                        <Link href="/" className="bg-[#E63946] py-2 px-5 text-white rounded-lg font-semibold">
                            Sign in artist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
