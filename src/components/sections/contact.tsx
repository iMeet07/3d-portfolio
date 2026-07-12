"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Clock, Zap, Coffee, BrainCircuit, Server, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { cn } from "@/lib/utils";
import { SiGithub, SiLinkedin } from "react-icons/si";

const CONTACT_METHODS = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: config.email.replace(/@/g, "(at)"),
    href: `mailto:${config.email}`,
    highlight: true,
  },
  {
    icon: <SiLinkedin className="w-4 h-4" />,
    label: "LinkedIn",
    value: "meet-brahmbhatt-ai",
    href: config.social.linkedin,
  },
  {
    icon: <SiGithub className="w-4 h-4" />,
    label: "GitHub",
    value: "iMeet07",
    href: config.social.github,
  },
];

const ContactRight = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    className="flex flex-col gap-6 mt-10 md:mt-20"
  >
    {/* Availability status */}
    <div className="gradient-hairline rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-glow" />
        <span className="font-mono text-sm text-green-400 font-medium">
          Open to opportunities
        </span>
      </div>
      <p className="font-display text-2xl font-bold text-foreground leading-tight mb-2">
        Seeking Summer 2026{" "}
        <span className="text-gradient">AI/ML &amp; Data Science</span>{" "}
        internships
      </p>
      <p className="font-mono text-xs text-muted-foreground leading-relaxed">
        Interested in research engineering, applied ML, LLM systems, or clinical
        AI roles. Happy to chat about research, projects, or just AI.
      </p>
    </div>

    {/* Direct contact methods */}
    <div className="flex flex-col gap-2">
      {CONTACT_METHODS.map((method) => (
        <Link key={method.label} href={method.href} target="_blank">
          <div
            className={cn(
              "flex items-center gap-3 rounded-xl border border-border px-4 py-3",
              "hover:border-primary/30 hover:bg-secondary/30 transition-all duration-200",
              method.highlight &&
                "bg-primary/5 border-primary/20 hover:border-primary/40"
            )}
          >
            <span className="text-muted-foreground">{method.icon}</span>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                {method.label}
              </span>
              <span className="font-mono text-sm text-foreground truncate">
                {method.value}
              </span>
            </div>
            <span className="text-muted-foreground/40 text-xs">↗</span>
          </div>
        </Link>
      ))}
    </div>

    {/* Quick stats */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: <Clock className="w-3.5 h-3.5" />, label: "Response", value: "< 24 hrs" },
        { icon: <Zap className="w-3.5 h-3.5" />, label: "Time zone", value: "EST / UTC-5" },
        { icon: <Coffee className="w-3.5 h-3.5" />, label: "Availability", value: "Full-time" },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border bg-card/40 p-3 flex flex-col gap-1 items-center text-center"
        >
          <span className="text-muted-foreground">{item.icon}</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60">
            {item.label}
          </span>
          <span className="font-mono text-[11px] text-foreground font-medium">
            {item.value}
          </span>
        </div>
      ))}
    </div>

    {/* What I'm looking for */}
    <div className="flex flex-col gap-2">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">
        What I&apos;m looking for
      </p>
      {[
        {
          icon: <BrainCircuit className="w-4 h-4 shrink-0" />,
          color: "#a78bfa",
          title: "AI/ML & Research Engineering",
          desc: "Production LLM pipelines, RAG systems, clinical AI, NLP tooling",
        },
        {
          icon: <Server className="w-4 h-4 shrink-0" />,
          color: "#60a5fa",
          title: "Backend / Platform",
          desc: "Distributed microservices, Spring Boot + Kafka, data-intensive APIs",
        },
        {
          icon: <FlaskConical className="w-4 h-4 shrink-0" />,
          color: "#34d399",
          title: "Research Collaboration",
          desc: "Clinical data science, EHR analysis, outcomes research with publication potential",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-3 rounded-xl border border-border/60 px-4 py-3 bg-card/30"
          style={{ borderColor: `${item.color}25` }}
        >
          <span style={{ color: item.color }} className="mt-0.5">{item.icon}</span>
          <div>
            <p className="font-mono text-xs font-medium text-foreground/90">{item.title}</p>
            <p className="font-mono text-[10px] text-muted-foreground/60 mt-0.5 leading-snug">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Personal note */}
    <blockquote className="border-l-2 border-[var(--brand-via)] pl-4 py-1 italic text-muted-foreground text-sm leading-relaxed">
      "The most interesting problems are always at the intersection of messy
      data and high-stakes decisions. That's where I want to build."
    </blockquote>
  </motion.div>
);

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto">
      <SectionHeader
        id="contact"
        className="relative mb-10"
        kicker="06 · Say Hi"
        title={
          <>
            LET&apos;S WORK
            <br />
            TOGETHER
          </>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-8">
        {/* Left — contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="mt-10 md:mt-20 bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl border border-border">
            <CardHeader>
              <CardTitle className="font-display text-3xl">Drop a note</CardTitle>
              <CardDescription>
                Or reach me directly at{" "}
                <a
                  target="_blank"
                  href={`mailto:${config.email}`}
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  {config.email}
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>

        {/* Right — availability + links */}
        <ContactRight />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
