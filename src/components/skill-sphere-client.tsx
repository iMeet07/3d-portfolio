"use client";
import dynamic from "next/dynamic";

const SkillSphere = dynamic(() => import("./skill-sphere"), { ssr: false });

export default function SkillSphereClient() {
  return <SkillSphere />;
}
