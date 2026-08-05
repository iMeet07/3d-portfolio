import { config } from "@/data/config";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { translate } from "../../anim";
import styles from "./style.module.scss";

interface FooterProps {
  setIsActive: (v: boolean) => void;
}

const socials = [
  config.social.linkedin
    ? { label: "LinkedIn", href: config.social.linkedin, Icon: Linkedin }
    : null,
  config.social.github
    ? { label: "GitHub", href: config.social.github, Icon: Github }
    : null,
  config.email
    ? { label: "Email", href: `mailto:${config.email}`, Icon: Mail }
    : null,
].filter(Boolean) as { label: string; href: string; Icon: React.ElementType }[];

export default function Footer({ setIsActive }: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        {socials.map((s, i) => (
          <motion.a
            key={s.href}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            custom={[0.1 + i * 0.06, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={() => setIsActive(false)}
            className={styles.socialLink}
          >
            <s.Icon size={14} />
            <span>{s.label}</span>
            <ArrowUpRight size={11} className={styles.arrow} />
          </motion.a>
        ))}
      </div>
      <motion.p
        custom={[0.3, 0]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.tagline}
      >
        AI/ML Engineer · Data Scientist
      </motion.p>
    </div>
  );
}
