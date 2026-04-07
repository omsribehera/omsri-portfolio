"use client"

import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

const NeuralNetworkScene = dynamic(
  () => import("@/components/neural-network-scene"),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralNetworkScene />
      <Navbar />
      <HeroSection />
      <div className="relative z-10 bg-background/80 backdrop-blur-sm">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
