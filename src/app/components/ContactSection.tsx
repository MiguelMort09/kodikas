import {Building2, MessageSquare} from "lucide-react";
import {ContactForm} from "@/app/components/ContactForm";

export const ContacSection = () => (
    <section id="contacto" className="py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Contáctanos
                    </h2>
                    <p className="text-gray-400 mb-8">
                        ¿Tienes un proyecto en mente? Nos encantaría escucharte y ayudarte
                        a hacerlo realidad.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-white"/>
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Email</h3>
                                <p className="text-gray-400">atencionaclientes@kodikas.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-white"/>
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Oficina</h3>
                                <p className="text-gray-400">San Francisco de Campeche, Campeche, México.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900 p-8 rounded-lg">
                    <ContactForm/>
                </div>
            </div>
        </div>
    </section>
);