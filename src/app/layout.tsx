import type { Metadata } from "next";
import { jetbrainsMono } from './fonts'
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "KODIKAS",
  description: "Desarrollo de soluciones tecnologicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
      <meta property="og:image:type" content="image/png"/>

      <body className={`${jetbrainsMono.className} w-full`}>
      {children}
      </body>
      </html>
  );
}
