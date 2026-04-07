"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} — Built with passion
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-mono">&lt;</span>
            Data Scientist & AI/ML Developer
            <span className="text-primary font-mono">/&gt;</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
