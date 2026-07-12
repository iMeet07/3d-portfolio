import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../ui/button";
import { File, Mail } from "lucide-react";
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

const ROLES = [
  "AI/ML Engineer",
  "Data Scientist",
  "LLM & RAG Builder",
  "Clinical AI Researcher",
  "Founder",
];

const STATS = [
  "9+ research abstracts",
  "300K+ records modeled",
  "91% precision RAG",
  "ex-IBM",
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

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
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
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
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
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
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
                      "md:self-start mt-1 font-thin text-sm text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-base whitespace-nowrap"
                    )}
                  >
                    MS in Data Science @ Stony Brook University
                  </p>
                </BlurIn>
                <BlurIn delay={1.6}>
                  <div className="mt-4 flex flex-wrap gap-2 max-w-md">
                    {STATS.map((stat) => (
                      <span
                        key={stat}
                        className={cn(
                          "rounded-full border border-border bg-secondary/30 backdrop-blur-sm",
                          "px-3 py-1 font-mono text-[11px] sm:text-xs text-muted-foreground",
                          "hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
                        )}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href={"/assets/Meet-Brahmbhatt-Resume.pdf"}
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
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
                    <Link href={`mailto:${config.email}`}>
                      <Button variant={"outline"}>
                        <Mail size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
