"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-lg opacity-50 animate-pulse" />
            <Image
              src="/images/omsri-profile.jpeg"
              alt="Omsri Behera"
              fill
              className="rounded-full object-cover border-4 border-primary/30 relative z-10"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest">
            HI, I&apos;M OMSRI BEHERA
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Data Scientist &{" "}
          <span className="text-primary">AI/ML Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          B.Tech in Computer Science (AI &amp; ML) | GATE DA 2026 Qualified
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I build intelligent ML solutions, scalable data pipelines, and AI-powered applications.
          Experienced with XGBoost, CNN, LSTM, NLP, LLMs, and cloud platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <a href="https://blobs.vusercontent.net/blob/Omsri_Final_Resume%20%281%29-3npfibyLuE7k2dOuXZb5YzAIppL9cF.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/omsribehera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/omsribehera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/u/Omsri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LeetCode"
          >
            <Code2 className="w-6 h-6" />
          </a>
          <a
            href="mailto:omsribehera4@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10"
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono mb-2">SCROLL</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
