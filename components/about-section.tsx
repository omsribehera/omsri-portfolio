"use client"

import { motion } from "framer-motion"
import { Brain, Database, Code, Cpu, BarChart3, Cloud, GraduationCap, Award } from "lucide-react"

const skills = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "XGBoost, Random Forest, CNN, LSTM, predictive models with 85%+ F1-scores",
  },
  {
    icon: Cpu,
    title: "Deep Learning & NLP",
    description: "TF-IDF, SVM, LLMs, neural networks with TensorFlow & PyTorch",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Scalable Python & SQL pipelines, multi-source data integration",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Power BI, Tableau, QuickSight - improving stakeholder insights by 40%",
  },
  {
    icon: Cloud,
    title: "Big Data & Cloud",
    description: "Spark, Databricks, Snowflake, AWS, Azure for large-scale analytics",
  },
  {
    icon: Code,
    title: "MLOps & DevOps",
    description: "dbt, Airflow, Docker, GitHub Actions for automated ML pipelines",
  },
]

const techStack = [
  "Python",
  "R",
  "SQL",
  "SAS",
  "Java",
  "C/C++",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "XGBoost",
  "Power BI",
  "Tableau",
  "Spark",
  "Databricks",
  "Snowflake",
  "AWS",
  "Azure",
  "Docker",
  "Airflow",
  "dbt",
]

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech CS (AI & ML)",
    value: "9.0 CGPA",
    subtitle: "BPUT, 2022-2026",
  },
  {
    icon: Award,
    title: "GATE DA 2026",
    value: "AIR 3475",
    subtitle: "Score: 470",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Turning Data into Intelligence
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            I&apos;m a Data Scientist and AI/ML Developer passionate about building end-to-end
            machine learning solutions. From predictive modeling to NLP pipelines and deep learning
            systems, I create intelligent applications that drive real-world impact. National Hackathon
            Winner (IIIT Kalyani) and ICPC CodeFest Top 500 participant.
          </p>
        </motion.div>

        {/* Education & Achievements Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-mono border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
