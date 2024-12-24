import { jetbrainsMono } from './fonts'
import { NavBar } from './components/NavBar'
import {Hero} from "@/app/components/Hero";
import {Services} from "@/app/components/Services";
import {AboutUs} from "@/app/components/AboutUs";
import {ContacSection} from "@/app/components/ContactSection";
import {Footer} from "@/app/components/Footer";
import {Products} from "@/app/components/Products";

export default function Home() {
  return (
      <main className={`relative min-h-screen bg-black ${jetbrainsMono.className}`} >
        <NavBar />
        {/* Hero Section */}
          <Hero/>
        {/* Services Section */}
        <Services/>
      <Products/>
        {/* About Us Section */}
        <AboutUs/>
        {/* Contact Section */}
        <ContacSection/>
        {/* Footer */}
        <Footer/>
      </main>
  )
}

