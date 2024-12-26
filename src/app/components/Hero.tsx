import Image from "next/image";
import KodikasLogo from '../../../public/KODIKAS.png';
import KodikasISO from '../../../public/Kodikas_ISO_CLARO.png';


export const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black/90 to-black/90">
        <div className="container mx-auto px-4 z-10">
            <div className="text-center">
                <div className="flex flex-col w-full items-center justify-center">
                    <Image
                        src={KodikasISO}
                        alt="KODIKAS Logo"
                        className="size-44 object-cover "
                    />
                    <Image
                        src={KodikasLogo}
                        alt="KODIKAS Logo"
                        className="w-1/3 object-cover"
                    />
                </div>
                <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
                    Transformando el código en soluciones innovadoras
                </p>
            </div>
        </div>
    </section>
);
