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
  { value: "10+", label: "accepted research abstracts" },
  { value: "300K+", label: "patient records analyzed" },
  { value: "5+", label: "active studies + papers" },
];

const DATASETS = ["N3C", "TriNetX", "ACS TQIP", "ACS NSQIP", "SEER"];

const STUDIES = [
  {
    title: "Blunt Spleen Injury — AIS-Grade-Stratified Analysis",
    lab: "Stony Brook BMI Lab · Prof. Fusheng Wang & Dr. Randeep Jawa",
    status: "ASC 2027 Accepted",
    statusColor: "default" as const,
    points: [
      "16,226-patient ADULTTQIP cohort (AIS 3–5) built from 2.3M registry records across 323 variables.",
      "Four-method AIS-stratified causal battery (GAM, PSM, IPTW, AIPW): SAE reduces mortality at AIS-4 (OR 0.29) and AIS-5 (OR 0.17); surgery harmful at AIS-3 by GAM, protective at AIS-5 across all methods.",
      "Nine-year trend cohort (n=99,868): SAE adoption doubled (16.9%→33.7%), mortality declined (7.7%→6.6%).",
      "AMIA 2027 poster submitted; JAMA Surgery manuscript in preparation.",
    ],
    tags: ["Python", "R", "GAM", "PSM", "IPTW", "AIPW", "SQLite"],
  },
  {
    title: "SGLT2i vs DPP-4i & GLP-1RA — Cognitive Outcomes in T2D",
    lab: "Stony Brook Medicine · Dr. Farrukh M. Koraishy",
    status: "Ongoing",
    statusColor: "secondary" as const,
    points: [
      "Three national TTE studies on TriNetX EHR (DPP-4i N=43,005; GLP-1RA N=52,918; CKM N=67,938).",
      "GLP-1RA analysis complete: OW Cox HR=0.98, Fine-Gray sHR=0.98, reviewed and accepted by PI.",
      "DPP-4i: 1:1 PSM (13,311 matched pairs) + matched vs unmatched generalizability analysis.",
      "54% SGLT2i exclusion by PSM driven by late-era cardiovascular complexity (HF 45% vs 22%) — empirical basis for overlap weighting as primary estimator.",
    ],
    tags: ["R", "TriNetX", "PSM", "Overlap Weighting", "Cox", "Fine-Gray"],
  },
  {
    title: "The Generation Bottleneck: Limits of Reranking & Majority Voting in LLM Reasoning",
    lab: "AMS 691 — LLM Frontier · Stony Brook University",
    status: "Course paper",
    statusColor: "secondary" as const,
    points: [
      "Systematically evaluated multi-sample reasoning strategies on the GSM8K benchmark.",
      "Majority voting degrades accuracy from 82.5% → 61.67%; PRM-based reranking recovers to 74.5% but fails to match baseline.",
      "Proves the bottleneck lies in generation quality, not selection — PRMs misled by structurally coherent but logically incorrect reasoning.",
    ],
    tags: ["LLMs", "Reasoning", "GSM8K", "PRMs"],
  },
];

const PUBLICATIONS = [
  {
    type: "First Author",
    items: [
      {
        title: "Severe Blunt Splenic Injury Management: Should Interventional Radiologists Replace Surgeons?",
        venue: "22nd Annual Academic Surgical Congress · Washington, DC · Feb 9, 2027",
        status: "Accepted — Quickshot Presentation",
        statusVariant: "default" as const,
      },
      {
        title: "Generalized Additive Model Analysis of High-Grade Blunt Splenic Injury",
        venue: "AMIA 2027 Amplify Informatics Conference · Atlanta, GA · Apr 12-15, 2027",
        status: "Submitted — decision Dec 2026",
        statusVariant: "secondary" as const,
      },
      {
        title: "Splenic Artery Embolization Reduces Mortality Across Nine Years and 99,868 Patients",
        venue: "Academic Surgical Congress Annual Meeting 2027",
        status: "In preparation",
        statusVariant: "outline" as const,
      },
      {
        title: "AIS-Grade-Stratified Analysis Across Two TQIP Periods (N=16,226)",
        venue: "Targeting JAMA Surgery",
        status: "Manuscript in preparation",
        statusVariant: "outline" as const,
      },
    ],
  },
  {
    type: "Co-Authored",
    items: [
      {
        title: "SGLT2 vs DPP-4 Inhibitor Initiation and Cognitive Outcomes in Older Adults With Type 2 Diabetes: Interaction With CKD",
        venue: "Stony Brook DOM Research Symposium · Sep 18, 2026",
        status: "Accepted — Oral & Poster",
        statusVariant: "default" as const,
      },
      {
        title: "ACS NSQIP Hysterectomy Outcomes Series (8 abstracts) + SEER Gynecologic Oncology Series",
        venue: "2026 ACS Quality, Safety and Cancer Conference",
        status: "9 abstracts accepted",
        statusVariant: "default" as const,
      },
      {
        title: "Social Vulnerability, COVID-Related Care Disruption, and Emergency Department Utilization",
        venue: "Under peer review with major revisions, 2026",
        status: "Under review",
        statusVariant: "secondary" as const,
      },
    ],
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
          10+ accepted research abstracts spanning surgical outcomes, causal
          inference, and healthcare disparities — built on population-scale EHR
          and registry datasets:
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
                Blunt Spleen Injury — 2016 vs 2024 Outcome Trends
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-0.5">
                2.3M patients → 16,226 cohort · ACS TQIP registry · 2016 & 2024
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
                      variant={study.statusColor ?? "secondary"}
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

        {/* Publications & Presentations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14"
        >
          <h3 className="font-display text-lg font-semibold text-foreground mb-6">
            Publications & Presentations
          </h3>
          <div className="space-y-8">
            {PUBLICATIONS.map((group) => (
              <div key={group.type}>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  {group.type}
                </p>
                <div className="space-y-3">
                  {group.items.map((pub) => (
                    <div
                      key={pub.title}
                      className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card/50 px-5 py-4"
                    >
                      <div className="space-y-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {pub.title}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {pub.venue}
                        </p>
                      </div>
                      <Badge
                        variant={pub.statusVariant}
                        className="shrink-0 font-mono text-[10px] whitespace-nowrap"
                      >
                        {pub.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default ResearchSection;
