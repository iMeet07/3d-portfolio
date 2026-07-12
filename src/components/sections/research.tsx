"use client";

import { motion } from "motion/react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TQIPChart } from "@/components/tqip-chart";

const STATS = [
  { value: "9+", label: "co-authored research abstracts" },
  { value: "300K+", label: "patient records analyzed" },
  { value: "3", label: "active studies + papers" },
];

const DATASETS = ["N3C", "TriNetX", "ACS TQIP", "ACS NSQIP", "SEER"];

const STUDIES = [
  {
    title: "Blunt Spleen Injury — Comparative Effectiveness",
    lab: "Stony Brook DB Lab · Prof. Fusheng Wang",
    status: "Manuscript in progress",
    points: [
      "Distilled 2.3M trauma-registry patients into a 35,387-patient cohort across 323 variables.",
      "Propensity-score-matched analysis: angioembolization linked to ~40% lower mortality vs observation (OR 0.61, p<0.001).",
      "GAM primary model with AUC 0.876; 2016→2024 trend analysis of treatment adoption and outcomes.",
      "Caught a silent data-contamination bug during pipeline build: AIS spleen filter was matching prefix '44xx' (thorax) instead of '5442xx' (abdomen → solid organ → spleen). The code ran fine, the counts looked plausible, but the cohort was wrong. Fixed by verifying the full AIS coding schema; confirmed 35,387 matches the original R study.",
    ],
    tags: ["Python", "PSM", "GAM", "SQLite"],
    showChart: true,
  },
  {
    title: "SGLT2i vs DPP-4i — Cognitive Impairment Risk in T2D",
    lab: "Stony Brook University · Dr. Farrukh M. Koraishy",
    status: "Ongoing",
    points: [
      "National TriNetX cohort of 43,065 older adults with Type 2 Diabetes (from 8.9M screened).",
      "Matched vs unmatched cohort comparisons across index year, cardiorenal disease, and medication-burden phenotypes.",
      "Evaluating generalizability and the role of PSM as sensitivity vs primary analysis.",
    ],
    tags: ["R", "EHR", "Propensity Matching", "Epidemiology"],
  },
  {
    title: "The Generation Bottleneck: Limits of Reranking & Majority Voting in LLM Reasoning",
    lab: "AMS 691 — LLM Frontier · Stony Brook University",
    status: "Course research paper",
    points: [
      "Systematically evaluated multi-sample reasoning strategies on the GSM8K benchmark.",
      "Majority voting degrades accuracy from 82.5% → 61.67%; PRM-based reranking recovers to 74.5% but fails to match baseline.",
      "Proves the bottleneck lies in generation quality, not selection — PRMs misled by structurally coherent but logically incorrect reasoning.",
    ],
    tags: ["LLMs", "Reasoning", "GSM8K", "PRMs"],
  },
];

const ResearchSection = () => {
  return (
    <SectionWrapper
      id="research"
      className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="research"
          title="Research"
          kicker="04 · Published Work"
          desc="Clinical AI on population-scale health data."
          className="mb-12 md:mb-16 mt-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="gradient-hairline flex flex-col items-center text-center rounded-xl border border-border bg-card/50 py-6 px-2"
            >
              <span className="text-3xl md:text-4xl font-bold font-display text-gradient">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base text-muted-foreground leading-relaxed mb-8"
        >
          Co-author on 9+ accepted research abstracts spanning surgical
          outcomes, risk modeling, and healthcare disparities — built on
          population-scale EHR and registry datasets:
          <span className="inline-flex flex-wrap gap-1.5 ml-2 align-middle">
            {DATASETS.map((d) => (
              <Badge
                key={d}
                variant="outline"
                className="text-xs font-mono bg-secondary/30 border-transparent"
              >
                {d}
              </Badge>
            ))}
          </span>
        </motion.div>

        {/* TQIP Trend Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 rounded-2xl border border-border bg-card/50 p-6 md:p-8"
        >
          <div className="flex items-start justify-between gap-3 mb-6">
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Blunt Spleen Injury — 8-Year Outcome Trends
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-0.5">
                2.3M patients → 35,387 cohort · ACS TQIP registry · 2016–2024
              </p>
            </div>
            <Badge variant="secondary" className="shrink-0 font-mono text-[10px]">
              Real data
            </Badge>
          </div>
          <TQIPChart />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {STUDIES.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full bg-card text-card-foreground border-border hover:border-primary/20 transition-colors duration-300 shadow-sm hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-bold tracking-tight leading-snug">
                      {study.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="shrink-0 font-mono text-[10px] font-normal"
                    >
                      {study.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {study.lab}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {study.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs font-normal bg-secondary/30 border-transparent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResearchSection;
