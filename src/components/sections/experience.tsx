"use client";

import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";

const CURRENT_IDS = [1, 2, 3]; // Koraishy GRA + KCC Capital Partners + DB Lab

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  const isCurrent = CURRENT_IDS.includes(experience.id);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-10 md:pl-14"
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute left-0 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center",
          isCurrent
            ? "border-[var(--brand-via)] bg-[var(--brand-from)]/10"
            : "border-border bg-card"
        )}
      >
        {isCurrent && (
          <span className="w-2 h-2 rounded-full bg-[var(--brand-via)] animate-pulse-glow" />
        )}
      </div>

      {/* Card */}
      <div
        className={cn(
          "rounded-2xl border border-border bg-card p-5 md:p-6",
          "hover:border-primary/25 transition-colors duration-300 shadow-sm hover:shadow-md",
          isCurrent && "gradient-hairline"
        )}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                {experience.title}
              </h3>
              {isCurrent && (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-green-400 border border-green-400/30 rounded-full px-2 py-0.5 bg-green-400/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              {experience.company}
            </div>
          </div>
          <Badge
            variant="secondary"
            className="w-fit shrink-0 font-mono text-xs font-normal whitespace-nowrap"
          >
            {experience.startDate} – {experience.endDate}
          </Badge>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2 mb-5">
          {experience.description.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-[0.4em] w-1 h-1 shrink-0 rounded-full bg-[var(--brand-via)]/60" />
              {point}
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skillName) => {
            const skill = SKILLS[skillName as SkillNames];
            return (
              <Badge
                key={skillName}
                variant="outline"
                className="gap-1.5 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
              >
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="w-3.5 h-3.5 object-contain opacity-80"
                />
                {skill.label}
              </Badge>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10">
      <div className="w-full max-w-3xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          kicker="03 · The Work So Far"
          desc="Research labs, industry AI, and communities I've led."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="relative flex flex-col gap-6 md:gap-8">
          {/* Vertical timeline line */}
          <div className="absolute left-[9px] top-5 bottom-5 w-px bg-gradient-to-b from-[var(--brand-from)]/60 via-border to-transparent" />

          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
