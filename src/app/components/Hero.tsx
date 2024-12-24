import Image from "next/image";
import KodikasLogo from '../../../public/Kodikas_LOGO_CLARO.png';
import KodikasISO from '../../../public/Kodikas_ISO_CLARO.png';


export const Hero = () => (
    <section className="relative min-h-[calc(100vh)]  flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/90"/>
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
                <div className="flex flex-col w-full items-center justify-center">
                    <Image
                        src={KodikasISO}
                        alt="KODIKAS Logo"
                        className="size-44 object-cover -m-10"
                    />
                    <Image
                        src={KodikasLogo}
                        alt="KODIKAS Logo"
                        className="w-1/3 object-cover"
                    />
                </div>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
                    Transformando el código en soluciones innovadoras
                </p>
            </div>
        </div>
    </section>
);
