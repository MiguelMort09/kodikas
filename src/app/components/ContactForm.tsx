'use client'

import { useState } from 'react'
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Textarea } from "@nextui-org/input"

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

    }

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
                <Input
                    id="name"
                    placeholder="Nombre completo"
                    required
                    className="bg-zinc-900"
                />
            </div>
            <div className="space-y-2">
                <Input
                    id="email"
                    placeholder="Email"
                    required
                    type="email"
                    className="bg-zinc-900"
                />
            </div>
            <div className="space-y-2">
                <Textarea
                    id="message"
                    placeholder="Mensaje"
                    required
                    className="min-h-[150px] bg-zinc-900"
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

