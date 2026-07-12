import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full h-screen md:h-[150dvh] pointer-events-none">
      <SectionHeader id='skills' title="Tech Stack" kicker="02 · Play With It" desc="hover or tap a node to explore the stack" />
    </SectionWrapper>
  );
};

export default SkillsSection;
