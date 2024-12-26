import type { Metadata } from "next";
import { jetbrainsMono } from './fonts'
import "./globals.css";
import React from "react";

const domain: URL = new URL(process.env.NEXT_PUBLIC_API_BASE_URL || "https://kodikas.com.mx");

export const metadata: Metadata = {
    metadataBase: domain,
    applicationName: "KODIKAS | SOLICONES DE SOFTWARE",
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
      <head>
          <meta property="og:image:type" content="image/png"/>
          <meta property="og:site_name" content="KODIKAS | SOLICONES DE SOFTWARE"/>
          <meta property="og:url" content="https://kodikas.com.mx"/>
      </head>

      <body className={`${jetbrainsMono.className} w-full`}>
          {children}
      </body>
      </html>
  );
}
