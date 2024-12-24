import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from '@nextui-org/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import KOVAYA_Packege from '../../../public/Product.png';

interface KovayaProduct {
    name: string;
    description: string;
    href: string;
}

const kovayaProducts: KovayaProduct[] = [
    {
        name: "KOVAYA GYM",
        description:
            "KOVAYA GYM es una solución integral diseñada específicamente para la administración eficiente de gimnasios. Facilita la gestión de clientes, pagos y reportes, todo desde un solo lugar.",
        href: "/productos/kovaya-gym"
    },
    {
        name: "KOVAYA SHOP",
        description:
            "KOVAYA SHOP es un sistema completo de punto de venta ideal para tiendas de cualquier tamaño, con funciones de gestión de inventarios, ventas y clientes.",
        href: "/productos/kovaya-shop"
    }
];

export function Products() {
    return (
        <section id="productos" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Nuestros Productos
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <Image
                            src={KOVAYA_Packege}
                            alt="KOVAYA Products"
                            className="object-cover w-full h-auto transition-transform duration-300 transform hover:scale-105"
                        />

                    <div className="flex items-center text-lg text-justify">
                        <p>
                            <strong>KOVAYA</strong> es la solución todo-en-uno que transforma la forma en que gestionas tu negocio. Diseñada para gimnasios y comercios, nuestra plataforma te permite optimizar tus operaciones con herramientas inteligentes para controlar inventarios, gestionar clientes, seguir pagos y generar reportes detallados, todo desde un solo lugar. Con <strong>KOVAYA</strong>,
                            tendrás el poder de tomar decisiones más informadas y mejorar la experiencia de tus clientes, todo mientras ahorras tiempo y recursos. ¡Lleva tu negocio al siguiente nivel con KOVAYA y descubre cómo la tecnología puede impulsar tu éxito!
                        </p>
                    </div>
                    {kovayaProducts.map((product, index) => (
                        <Card key={index} className="bg-zinc-900 border-zinc-800 shadow-lg transition-all duration-300 transform hover:scale-105">
                            <CardHeader>
                                <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                            </CardHeader>
                            <CardBody>
                                <p className="text-gray-400 mb-6">{product.description}</p>
                                <Link href={product.href} passHref>
                                    <Button className="w-full flex justify-between items-center">
                                        Más información <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
