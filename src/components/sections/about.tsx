"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Rocket, FlaskConical } from "lucide-react";

const QUICK_FACTS = [
  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Stony Brook, NY" },
  {
    icon: <GraduationCap className="w-3.5 h-3.5" />,
    label: "MS Data Science '27",
  },
  { icon: <FlaskConical className="w-3.5 h-3.5" />, label: "9+ research abstracts" },
  { icon: <Rocket className="w-3.5 h-3.5" />, label: "2x founder" },
];

const EDUCATION = [
  {
    school: "Stony Brook University",
    degree: "M.S. in Data Science",
    dates: "Aug 2025 – May 2027",
    detail:
      "LLM Frontier · Database Systems · Statistical Computing · Statistical Learning",
  },
  {
    school: "Gujarat Technological University",
    degree: "B.E. in Computer Engineering — Honors Minor in Data Science",
    dates: "Aug 2021 – May 2025",
    detail: "GPA 3.87/4 · Distributed Systems · OS · Networks · DBMS",
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="From Surat to Stony Brook — the story so far."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 blur-xl" />
              <Image
                src="/assets/meet-pic.jpeg"
                alt="Meet Brahmbhatt"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="relative rounded-2xl object-cover border border-border shadow-lg aurora-glow"
                priority={false}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {QUICK_FACTS.map((fact) => (
                <Badge
                  key={fact.label}
                  variant="outline"
                  className="gap-1.5 text-xs font-normal bg-secondary/30 border-transparent"
                >
                  {fact.icon}
                  {fact.label}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 text-base text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m a Data Science graduate student at{" "}
              <span className="text-foreground font-medium">
                Stony Brook University
              </span>{" "}
              who turns complex problems into AI-powered systems — from RAG
              pipelines and multi-agent LLM workflows to clinical research on
              300K+ patient records.
            </p>
            <p>
              My path: grew up in Surat, India → B.E. in Computer Engineering
              with an Honors minor in Data Science → AI internships at{" "}
              <span className="text-foreground font-medium">IBM</span> and{" "}
              <span className="text-foreground font-medium">Goldenmace</span>{" "}
              → moved to New York in 2025 for grad school. Along the way I led
              a 100+ member Google Developer Student Club, co-founded{" "}
              <span className="text-foreground font-medium">KwikTex</span> (1st
              Prize, IdeaGiri startup competition), and today I&apos;m building{" "}
              <span className="text-foreground font-medium">FrugalMoments</span>{" "}
              — a live marketplace for bundled social experiences.
            </p>
            <p>
              Currently: dual research assistantships in clinical AI — EHR
              outcomes modeling with Dr. Farrukh M. Koraishy and trauma
              registry analysis at the Stony Brook DB Lab — while seeking{" "}
              <span className="text-foreground font-medium">
                Summer 2026 AI/ML/Data Science internships
              </span>
              .
            </p>

            <div className="grid gap-3 pt-4">
              {EDUCATION.map((edu) => (
                <Card
                  key={edu.school}
                  className="bg-card/50 border-border hover:border-primary/20 transition-colors"
                >
                  <CardContent className="py-4 px-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <span className="font-semibold text-foreground">
                        {edu.school}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {edu.dates}
                      </span>
                    </div>
                    <div className="text-sm">{edu.degree}</div>
                    <div className="text-xs text-muted-foreground/80 mt-1 font-mono">
                      {edu.detail}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
