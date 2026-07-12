"use client";

import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { cn } from "@/lib/utils";

type Category = {
  index: string;
  title: string;
  hue: string; // tailwind-ish accent classes
  chips: string[];
};

const CATEGORIES: Category[] = [
  {
    index: "01",
    title: "Languages",
    hue: "from-violet-500/20 to-violet-500/5 hover:border-violet-400/40",
    chips: ["Python", "SQL", "R", "TypeScript", "Java", "C++", "Go", "Bash"],
  },
  {
    index: "02",
    title: "ML & AI",
    hue: "from-fuchsia-500/20 to-fuchsia-500/5 hover:border-fuchsia-400/40",
    chips: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Transformers",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Time Series",
    ],
  },
  {
    index: "03",
    title: "LLM & RAG",
    hue: "from-cyan-500/20 to-cyan-500/5 hover:border-cyan-400/40",
    chips: [
      "LangChain",
      "LangGraph",
      "FAISS",
      "ChromaDB",
      "Ollama",
      "RAG Fusion",
      "Agents",
      "Claude / GPT / Gemini",
    ],
  },
  {
    index: "04",
    title: "Data Engineering",
    hue: "from-emerald-500/20 to-emerald-500/5 hover:border-emerald-400/40",
    chips: ["Pandas", "NumPy", "PySpark", "Airflow", "ETL Pipelines", "PostgreSQL", "SQLite"],
  },
  {
    index: "05",
    title: "Cloud & MLOps",
    hue: "from-amber-500/20 to-amber-500/5 hover:border-amber-400/40",
    chips: [
      "AWS SageMaker",
      "EC2 / S3 / Lambda",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "MLflow",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    index: "06",
    title: "Product & Web",
    hue: "from-sky-500/20 to-sky-500/5 hover:border-sky-400/40",
    chips: [
      "Next.js",
      "React",
      "FastAPI",
      "Flask",
      "Streamlit",
      "Supabase",
      "Stripe",
      "Tailwind",
    ],
  },
  {
    index: "07",
    title: "Distributed Systems",
    hue: "from-rose-500/20 to-rose-500/5 hover:border-rose-400/40",
    chips: [
      "Spring Boot",
      "Spring AI",
      "Spring WebFlux",
      "Apache Kafka",
      "Redis",
      "Neo4J",
      "Elasticsearch",
      "Resilience4J",
      "SAGA / CQRS",
      "Outbox Pattern",
      "Zipkin",
      "ELK Stack",
    ],
  },
];

const ToolkitSection = () => {
  return (
    <SectionWrapper
      id="toolkit"
      className="flex flex-col items-center justify-center py-24 z-10"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground/70 mb-2">
              02.5 · The Toolkit
            </p>
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gradient pb-1">
              What I reach for
            </h3>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-[16rem] text-right hidden sm:block">
            the stack behind the research, the pipelines, and the products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className={cn(
                "group rounded-2xl border border-border bg-gradient-to-b p-5",
                "transition-colors duration-300",
                cat.hue
              )}
            >
              <div className="flex items-baseline justify-between mb-4">
                <h4 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {cat.title}
                </h4>
                <span className="font-mono text-[10px] text-muted-foreground/60">
                  {cat.index}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.chips.map((chip) => (
                  <span
                    key={chip}
                    className={cn(
                      "rounded-md border border-border/60 bg-background/40 backdrop-blur-sm",
                      "px-2 py-0.5 font-mono text-[11px] text-muted-foreground",
                      "group-hover:text-foreground/90 transition-colors"
                    )}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolkitSection;
