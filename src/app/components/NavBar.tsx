'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image";
import KodikasLogo from "../../../public/KODIKAS.png";
import { Menu, X } from 'lucide-react'

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Productos', href: '#productos' },
    { name: 'Nosotros', href: '#nosotros' },
]

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (window.location.hash) {
            const section = document.querySelector(window.location.hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <nav className="fixed top-0 z-50 w-full bg-black/75">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            key={'#hero'}
                            href={'#hero'}
                            onClick={(e) => scrollToSection(e, '#hero')}
                        >
                            <Image
                                src={KodikasLogo}
                                alt="KODIKAS Logo"
                                className="h-14 w-auto object-cover"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    onClick={(e) => scrollToSection(e, item.href)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                onClick={(e) => {
                                    setIsOpen(false);
                                    scrollToSection(e, item.href);
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

