"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../ui/button";
import { File, Mail, MapPin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { Marquee } from "../ui/marquee";

const ROLES = [
  "AI/ML Engineer",
  "Systems Engineer",
  "LLM & RAG Builder",
  "Data Scientist",
  "Clinical AI Researcher",
  "Startup Founder",
];

const TECH_ITEMS = [
  "Python",
  "PyTorch",
  "LangChain",
  "LangGraph",
  "FAISS",
  "Spring Boot",
  "Apache Kafka",
  "Redis",
  "ChromaDB",
  "Next.js",
  "FastAPI",
  "AWS SageMaker",
  "Docker",
  "Kubernetes",
  "Pandas",
  "Scikit-learn",
  "R",
  "SQL",
  "TensorFlow",
  "Neo4J",
  "PySpark",
  "MLflow",
  "Streamlit",
];

const RoleRotator = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-gradient font-medium whitespace-nowrap"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const FloatingCard = ({
  children,
  className,
  delay = 0,
  animClass = "animate-float",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animClass?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "absolute gradient-hairline rounded-xl border border-border/70 bg-card/80 backdrop-blur-md px-3 py-2 shadow-lg",
      animClass,
      className
    )}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </motion.div>
);

const HeroRight = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, delay: 1.2 }}
    className="relative hidden md:flex items-center justify-center h-full"
  >
    {/* Aurora blob background */}
    <div className="absolute w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-violet-600/25 via-fuchsia-600/15 to-cyan-500/10 rounded-full blur-3xl -z-[1]" />

    {/* Profile photo with gradient border */}
    <div className="relative w-56 h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-tr from-[var(--brand-from)] via-[var(--brand-via)] to-[var(--brand-to)]">
        <div className="w-full h-full rounded-[calc(1.5rem-2px)] overflow-hidden bg-card">
          <Image
            src="/assets/meet-pic.jpeg"
            alt="Meet Brahmbhatt"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Floating IBM card — top right */}
      <FloatingCard
        className="-top-7 -right-8 lg:-right-14"
        delay={1.6}
        animClass="animate-float"
      >
        <div className="font-display text-lg font-bold text-gradient">IBM</div>
        <div className="font-mono text-[10px] text-muted-foreground leading-none">
          AI Engineer Intern
        </div>
      </FloatingCard>

      {/* Floating research card — bottom left */}
      <FloatingCard
        className="-bottom-8 -left-10 lg:-left-16"
        delay={2.0}
        animClass="animate-float-slow"
      >
        <div className="font-display text-lg font-bold text-gradient">9+</div>
        <div className="font-mono text-[10px] text-muted-foreground leading-none">
          Research Abstracts
        </div>
      </FloatingCard>

      {/* Open to work badge — right center */}
      <FloatingCard
        className="top-1/2 -translate-y-1/2 -right-10 lg:-right-20"
        delay={1.8}
        animClass="animate-float"
      >
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
          <span className="font-mono text-[10px] text-green-400 font-medium">
            Open to work
          </span>
        </div>
        <div className="font-mono text-[10px] text-muted-foreground">
          Summer 2026
        </div>
      </FloatingCard>

      {/* Location card — bottom right */}
      <FloatingCard
        className="-bottom-5 -right-6 lg:-right-10"
        delay={2.2}
        animClass="animate-float-slow"
      >
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-[var(--brand-via)]" />
          <span className="font-mono text-[10px] text-muted-foreground">
            Stony Brook, NY
          </span>
        </div>
      </FloatingCard>
    </div>
  </motion.div>
);

const TechMarquee = () => (
  <div className="relative w-full overflow-hidden py-3">
    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    <Marquee className="[--duration:30s]" pauseOnHover repeat={2}>
      {TECH_ITEMS.map((tech) => (
        <span
          key={tech}
          className="font-mono text-xs text-muted-foreground/60 border border-border/50 rounded-full px-3 py-1 bg-secondary/20 whitespace-nowrap hover:text-foreground/80 hover:border-primary/30 transition-colors"
        >
          {tech}
        </span>
      ))}
    </Marquee>
  </div>
);

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2 h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)]">
        {/* Left */}
        <div
          className={cn(
            "z-[2] col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-[0.95] text-left font-bold tracking-tight",
                          "text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default font-display text-gradient pb-2"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 text-md text-slate-600 dark:text-zinc-300",
                      "cursor-default font-display text-lg sm:text-xl md:text-2xl whitespace-nowrap"
                    )}
                  >
                    <RoleRotator />
                  </p>
                </BlurIn>

                <BlurIn delay={1.4}>
                  <p
                    className={cn(
                      "md:self-start mt-2 text-sm text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-base max-w-md leading-relaxed"
                    )}
                  >
                    Clinical AI pipelines on 300K-patient EHRs. Distributed
                    systems at 10K TPS. Multi-agent LLM workflows. I build
                    things that hold up at scale.
                  </p>
                </BlurIn>

                <BlurIn delay={1.5}>
                  <p
                    className={cn(
                      "md:self-start mt-1 font-mono text-xs text-slate-400 dark:text-zinc-500",
                      "cursor-default whitespace-nowrap"
                    )}
                  >
                    MS in Data Science @ Stony Brook · ex-IBM · published researcher
                  </p>
                </BlurIn>
              </div>

              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href={"/assets/Meet-Brahmbhatt-Resume.pdf"}
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={18} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Link href={`mailto:${config.email}`} aria-label="Email Meet Brahmbhatt">
                      <Button variant={"outline"} aria-label="Email">
                        <Mail size={18} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                      aria-label="GitHub profile"
                    >
                      <Button variant={"outline"} aria-label="GitHub">
                        <SiGithub size={18} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                      aria-label="LinkedIn profile"
                    >
                      <Button variant={"outline"} aria-label="LinkedIn">
                        <SiLinkedin size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right — profile photo with floating cards */}
        <div className="col-span-1 relative">
          {!isLoading && <HeroRight />}
        </div>
      </div>

      {/* Tech marquee strip */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="absolute bottom-16 left-0 right-0 px-4"
        >
          <TechMarquee />
        </motion.div>
      )}

      <div className="absolute bottom-4 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
