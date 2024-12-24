import {Award, Handshake, Target, Users} from "lucide-react";

export const AboutUs = () => (
    <section id="nosotros" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4 transition-all duration-300 ease-in-out">
            <div className="items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Sobre Nosotros
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <p className="text-gray-400 text-justify">
                                En KODIKAS, somos una empresa emergente creada por talento joven y visionario. Nuestro equipo está formado por egresados apasionados en el área de tecnología, comprometidos con emprender y especializarnos en las tecnologías más innovadoras del mercado.
                            </p>
                            <p className="text-gray-400 text-justify">
                                Nos enfocamos en ofrecer soluciones tecnológicas frescas y creativas que se adaptan a las necesidades del mundo actual. Aunque estamos comenzando, nuestra energía, dedicación y conocimiento nos impulsan a superar expectativas y a convertirnos en un socio estratégico para el crecimiento de tu negocio.
                            </p>
                            <p className="text-gray-400 text-justify">
                                Innovación, compromiso y excelencia son los pilares que guían cada uno de nuestros proyectos en KODIKAS. 🚀
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 items-center transition transform duration-100">
                            {[
                                {
                                    icon: <Users className="w-6 h-6 text-blue-500" />,
                                    title: "Equipo Experto",
                                    description: "Equipo de profesionales altamente calificados."
                                },
                                {
                                    icon: <Award className="w-6 h-6 text-yellow-500" />,
                                    title: "Reconocimiento",
                                    description: "Nuestros clientes respaldan la calidad de nuestro trabajo."
                                },
                                {
                                    icon: <Target className="w-6 h-6 text-red-500" />,
                                    title: "Enfoque Estratégico",
                                    description: "Adoptamos un enfoque personalizado para cada proyecto."
                                },
                                {
                                    icon: <Handshake className="w-6 h-6 text-purple-500" />,
                                    title: "Relaciones Duraderas",
                                    description: "Construimos relaciones basadas en la confianza, promoviendo colaboraciones a largo plazo."
                                }
                            ].map((feature, index) => (
                                <div key={index} className="flex flex-col gap-4 transition-all duration-300 ease-in-out">
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                            <div className="text-white">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                                    </div>
                                    <p className=" text-gray-400 text-sm  text-justify">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);