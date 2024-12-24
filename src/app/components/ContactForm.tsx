'use client'
import React, { useState } from 'react'
import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.kodikas.test/api/contact-me`, {
                method: 'POST',
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                alert({
                    title: "Mensaje enviado",
                    description: "Nos pondremos en contacto contigo pronto.",
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert('ERROR: ' + error.message);
            } else {
                console.error('Unknown error:', error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
                <Input
                    id="name"
                    name="name"
                    placeholder="Nombre completo"
                    required
                    className="bg-zinc-900"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    type="email"
                    className="bg-zinc-900"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Mensaje"
                    required
                    className="min-h-[150px] bg-zinc-900"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
            >
                {isLoading ? "Enviando..." : "Enviar mensaje"}
            </Button>
        </form>
    )
}