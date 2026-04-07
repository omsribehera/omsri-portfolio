"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Code2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/omsribehera", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/omsribehera", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Omsri", label: "LeetCode" },
  { icon: Mail, href: "mailto:omsribehera4@gmail.com", label: "Email" },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I&apos;m always interested in hearing about new projects, research opportunities,
            and collaborations in AI/ML and Data Science. Feel free to reach out!
          </p>
          <p className="text-muted-foreground text-sm mb-8 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            +91-7653947477
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 mb-12" asChild>
            <a href="mailto:omsribehera4@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Say Hello
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
