"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { Button } from "../ui/button";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Download, Menu, X } from "lucide-react";
import { useLenis } from "@/lib/lenis";

interface HeaderProps {
  loader?: boolean;
}

const NAV_LINKS = [
  { title: "About", href: "/#about" },
  { title: "Skills", href: "/#skills" },
  { title: "Experience", href: "/#experience" },
  { title: "Research", href: "/#research" },
  { title: "Projects", href: "/#projects" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/#contact" },
];

const Header = ({ loader }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;

    const id = href.slice(2); // "/#experience" → "experience"
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(el, { offset: -70, duration: 1.5 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: loader ? 3.5 : 0, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000]",
        "transition-all duration-300 ease-in-out",
        "backdrop-blur-xl",
        scrolled || mobileOpen
          ? "bg-background/80 border-b border-border/50 shadow-[0_1px_20px_hsl(var(--foreground)/0.04)]"
          : "bg-transparent border-b border-border/20"
      )}
    >
      <div className="flex items-center justify-between px-5 md:px-8 lg:px-12 h-14">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-sm tracking-wide hover:opacity-70 transition-opacity shrink-0"
        >
          {config.author}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wide text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          <FunnyThemeToggle className="w-5 h-5" />
          <a
            href="/assets/Meet-Brahmbhatt-Resume.pdf"
            target="_blank"
            rel="noopener"
            className="hidden md:flex"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 font-mono text-xs h-8 px-3"
            >
              <Download className="w-3 h-3" />
              Resume
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-4 py-3 gap-0.5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.15 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => { handleNavClick(e, link.href); setMobileOpen(false); }}
                    className="block px-3 py-2.5 rounded-md text-sm font-mono uppercase tracking-wide text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 pb-1 px-2">
                <a
                  href="/assets/Meet-Brahmbhatt-Resume.pdf"
                  target="_blank"
                  rel="noopener"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-1.5 font-mono text-xs"
                  >
                    <Download className="w-3 h-3" />
                    Resume
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
