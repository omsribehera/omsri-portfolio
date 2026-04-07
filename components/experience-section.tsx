"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, Users } from "lucide-react"

const experiences = [
  {
    period: "May 2025 — Dec 2025",
    title: "Data Analyst",
    company: "Infosys Springboard",
    location: "Remote",
    description:
      "Led end-to-end analysis on large workforce datasets, generating actionable KPIs. Integrated multi-source datasets enabling granular county-level insights. Designed interactive Tableau dashboards improving stakeholder insights by 40%.",
    skills: ["Tableau", "Data Analytics", "KPI Development", "Data Integration"],
  },
  {
    period: "Jan 2025 — Aug 2025",
    title: "Data Analyst",
    company: "Edunet IBM Foundation",
    location: "India",
    description:
      "Built scalable Python & SQL pipelines for large-scale analytics. Reduced query latency by 45%, improving system efficiency. Delivered dashboards used by 300+ users for business simulations.",
    skills: ["Python", "SQL", "Pipeline Development", "Dashboard Design"],
  },
  {
    period: "2024",
    title: "Data Scientist Intern",
    company: "Deloitte",
    location: "Bangalore",
    description:
      "Developed predictive models achieving 85% F1-score. Built regression models with MAE < 30 minutes. Automated EDA pipelines reducing analysis time by 50%.",
    skills: ["Machine Learning", "Predictive Modeling", "EDA Automation", "Regression"],
  },
]

const achievements = [
  {
    icon: Award,
    title: "National Hackathon Winner",
    subtitle: "IIIT Kalyani - AI/ML Track",
  },
  {
    icon: Award,
    title: "ICPC CodeFest",
    subtitle: "Top 500 among 13,000+ participants",
  },
  {
    icon: Briefcase,
    title: "Inter Hackathon BPUT",
    subtitle: "Built and trained 500+ ML models",
  },
]

const volunteer = [
  {
    period: "Jan 2026 — Mar 2026",
    title: "Campus Representative",
    company: "Open Source Connect (OSCG 2026)",
  },
  {
    period: "Jan 2026 — Mar 2026",
    title: "Campus Ambassador",
    company: "IIT Gandhinagar (Blithchron)",
  },
  {
    period: "Jan 2026 — Mar 2026",
    title: "Contributor",
    company: "Elite Coders (ECWoC 2026)",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-44 shrink-0">
                  <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                </div>
                
                <div className="flex-1 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {exp.title}
                    <span className="text-primary"> · </span>
                    <span className="text-primary font-normal">{exp.company}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Honors &amp; Awards</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Volunteer &amp; Leadership</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {volunteer.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-card border border-border"
              >
                <p className="text-xs font-mono text-muted-foreground mb-1">{item.period}</p>
                <p className="font-semibold text-foreground text-sm">{item.title}</p>
                <p className="text-xs text-primary">{item.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
