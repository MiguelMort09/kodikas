import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import {Cog, Globe, Server, Shield, Store, Wrench} from "lucide-react";

export const Services = () => (
    <section id="servicios" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Globe className="w-12 h-12"/>,
                        title: "Desarrollo Web a Medida",
                        description: "Creamos aplicaciones web personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio."
                    },
                    {
                        icon: <Store className="w-12 h-12"/>,
                        title: "SoftRestaurant",
                        description: "Sistema completo para la gestión de restaurantes, incluyendo pedidos, inventario y punto de venta."
                    },
                    {
                        icon: <Shield className="w-12 h-12"/>,
                        title: "Sistemas de Seguridad",
                        description: "Implementación de sistemas de seguridad avanzados para proteger tu negocio y datos importantes."
                    },
                    {
                        icon: <Server className="w-12 h-12"/>,
                        title: "Despliegue de Proyectos",
                        description: "Gestionamos el proceso completo de despliegue de tus aplicaciones, asegurando un lanzamiento sin problemas."
                    },
                    {
                        icon: <Cog className="w-12 h-12"/>,
                        title: "Configuración de Servidores Web",
                        description: "Optimizamos y configuramos tus servidores web para un rendimiento óptimo y máxima seguridad."
                    },
                    {
                        icon: <Wrench className="w-12 h-12"/>,
                        title: "Mantenimiento de Aplicaciones Web",
                        description: "Ofrecemos servicios de mantenimiento continuo para garantizar que tus aplicaciones web funcionen sin problemas."
                    }
                ].map((service, index) => (
                    <Card key={index} className="bg-black border-zinc-800">
                        <CardBody className="p-6">
                            <div className="mb-6 text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);
