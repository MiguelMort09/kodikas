import type { Metadata } from "next";
import { jetbrainsMono } from './fonts'
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "KÓDIKAS",
    description: "Desarrollo de soluciones tecnologicas"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
      <head>
          <meta property="og:image:alt" content="KODIKAS"/>
          <meta property="og:image:type" content="image/png"/>
          <meta property="og:site_name" content="KÓDIKAS | SOLICONES DE SOFTWARE"/>
          <meta property="og:url" content="https://www.kodikas.com.mx/"/>
      </head>

      <body className={`${jetbrainsMono.className} w-full`}>
          {children}
      </body>
      </html>
  );
}
