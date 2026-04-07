"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sun, LineChart, Film, MessageSquare, ShoppingCart, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: Sun,
    title: "Community Solar Adoption",
    description:
      "Engineered geospatial analytics pipeline identifying 63 GWh/year solar potential and $2.1M savings through advanced spatial data analysis.",
    tags: ["Python", "Geospatial", "Analytics", "Data Engineering"],
    github: "https://github.com/omsribehera",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: LineChart,
    title: "Stock Forecasting (CNN + LSTM)",
    description:
      "Built hybrid deep learning model achieving strong predictive accuracy on financial time-series data using CNN and LSTM architectures.",
    tags: ["TensorFlow", "CNN", "LSTM", "Time Series"],
    github: "https://github.com/omsribehera",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Film,
    title: "Netflix Data Visualization",
    description:
      "Performed comprehensive EDA and segmentation analysis to uncover user trends and content patterns in Netflix streaming data.",
    tags: ["Python", "Pandas", "Visualization", "EDA"],
    github: "https://github.com/omsribehera",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: MessageSquare,
    title: "Gun Control NLP Analysis",
    description:
      "Designed NLP pipeline with TF-IDF + SVM achieving F1-score of 0.84 for sentiment classification on gun control discourse.",
    tags: ["NLP", "TF-IDF", "SVM", "Scikit-learn"],
    github: "https://github.com/omsribehera",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: ShoppingCart,
    title: "Brazilian E-commerce ML Benchmark",
    description:
      "Compared and optimized multiple ML models on large-scale e-commerce dataset, achieving performance improvements through systematic benchmarking.",
    tags: ["XGBoost", "Random Forest", "Python", "ML"],
    github: "https://github.com/omsribehera",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: FileText,
    title: "Back-translation Research",
    description:
      "Research publication: Evaluating Back-translation Performance for Low Resource English-Marathi Language Pair and Neural Machine Translation studies.",
    tags: ["NMT", "Research", "NLP", "Low-Resource"],
    github: "https://github.com/omsribehera",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            A selection of projects showcasing my expertise in machine learning,
            deep learning, NLP, and data analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
            <a href="https://github.com/omsribehera" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
