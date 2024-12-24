'use client'
import { NavBar } from './components/NavBar'
import {Hero} from "@/app/components/Hero";
import {Services} from "@/app/components/Services";
import {AboutUs} from "@/app/components/AboutUs";
import {ContacSection} from "@/app/components/ContactSection";
import {Footer} from "@/app/components/Footer";
import {Products} from "@/app/components/Products";

export default function Home() {
  return (
      <div className="min-h-screen relative bg-black">
          <NavBar />
          <main>
              <Hero/>
              <Services/>
              <Products/>
              <AboutUs/>
              <ContacSection/>
              <Footer/>
          </main>
      </div>
  )
}

