"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS, type Skill } from "@/data/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useRouter } from "next/navigation";
import { useSounds } from "./realtime/hooks/use-sounds";

gsap.registerPlugin(ScrollTrigger);

type Section = "hero" | "about" | "skills" | "experience" | "research" | "projects" | "contact";

// Evenly distribute points on a sphere via Fibonacci lattice
function fibonacciSphere(n: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return pts;
}

// Map a dark/invisible brand color to an aurora fallback
function resolveColor(hex: string): string {
  const dark = ["#000000", "#fff", "#ffffff", "#fff"];
  if (dark.includes(hex.toLowerCase()) || hex === "#000") return "#7c3aed";
  return hex;
}

interface NodeData {
  mesh: THREE.Mesh;
  glow: THREE.Mesh;
  ring: THREE.Mesh;
  originalPos: THREE.Vector3;
  skill: Skill;
  color: THREE.Color;
}

const SECTION_CAMERA: Record<Section, { z: number; x: number; y: number; speed: number }> = {
  hero:       { z: 5.5, x: 0,    y: 0.3,  speed: 0.0022 },
  about:      { z: 6.8, x: -1.2, y: 0.4,  speed: 0.0014 },
  skills:     { z: 3.6, x: 0,    y: 0,    speed: 0.0055 },
  experience: { z: 6.0, x: 1.2,  y: -0.3, speed: 0.0018 },
  research:   { z: 5.8, x: -0.6, y: 0.6,  speed: 0.0025 },
  projects:   { z: 7.5, x: 0,    y: -0.5, speed: 0.0035 },
  contact:    { z: 6.2, x: 0,    y: 0,    speed: 0.001  },
};

export default function SkillSphere() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { bypassLoading } = usePreloader();
  const { playPressSound, playReleaseSound } = useSounds();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const router = useRouter();

  const soundRefs = useRef({ press: playPressSound, release: playReleaseSound });
  soundRefs.current = { press: playPressSound, release: playReleaseSound };

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");

  // URL hash sync
  useEffect(() => {
    const path = activeSection === "hero" ? "/" : `/#${activeSection}`;
    router.push(path, { scroll: false });
  }, [activeSection, router]);

  // Main Three.js effect
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ── RENDERER ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // ── SCENE & CAMERA ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0.3, 5.5);
    camera.lookAt(0, 0, 0);

    // ── LIGHTS ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const ptV = new THREE.PointLight(0x7c3aed, 5, 15);
    ptV.position.set(-2, 2, 3);
    scene.add(ptV);
    const ptC = new THREE.PointLight(0x0891b2, 5, 15);
    ptC.position.set(2, -2, 3);
    scene.add(ptC);
    const ptF = new THREE.PointLight(0xc026d3, 3, 12);
    ptF.position.set(0, 3, -3);
    scene.add(ptF);

    // ── CENTRAL AI CORE ───────────────────────────────────────────────────────
    const coreGeo = new THREE.IcosahedronGeometry(0.24, 5);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x7c3aed,
      emissiveIntensity: 3.5,
      roughness: 0.05,
      metalness: 0.95,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Core wireframe shell — icosahedron lines give it a "tech gem" look
    const wireGeo = new THREE.IcosahedronGeometry(0.28, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc026d3,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wire);

    // Outer soft atmosphere sphere
    const atmGeo = new THREE.SphereGeometry(0.52, 32, 32);
    const atmMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.07,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // ── SKILL NODES ───────────────────────────────────────────────────────────
    const skillList = Object.values(SKILLS);
    const sfRadius = isMobile ? 1.75 : 2.1;
    const positions = fibonacciSphere(skillList.length, sfRadius);

    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeGeo = new THREE.IcosahedronGeometry(0.068, 2);
    const glowGeo = new THREE.SphereGeometry(0.135, 12, 12);
    const ringGeo = new THREE.TorusGeometry(0.115, 0.008, 6, 24);

    const nodes: NodeData[] = [];

    skillList.forEach((skill, i) => {
      const hex = resolveColor(skill.color);
      const color = new THREE.Color(hex);

      // Core node (solid glowing icosahedron)
      const nodeMat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 2.2,
        roughness: 0.12,
        metalness: 0.8,
      });
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.copy(positions[i]);
      nodeGroup.add(mesh);

      // Soft additive glow halo
      const glowMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat.clone());
      glow.position.copy(positions[i]);
      nodeGroup.add(glow);

      // Orbital ring (starts invisible, appears on hover)
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat.clone());
      ring.position.copy(positions[i]);
      // Orient ring to face outward from sphere center
      ring.lookAt(0, 0, 0);
      ring.rotateX(Math.PI / 2);
      nodeGroup.add(ring);

      nodes.push({ mesh, glow, ring, originalPos: positions[i].clone(), skill, color });
    });

    // ── NEURAL CONNECTION LINES ───────────────────────────────────────────────
    const CONNECT_DIST = 0.9;
    const lineVerts: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < CONNECT_DIST) {
          lineVerts.push(positions[i].x, positions[i].y, positions[i].z, positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.09,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    nodeGroup.add(new THREE.LineSegments(lineGeo, lineMat));

    // ── OUTER DUST FIELD ─────────────────────────────────────────────────────
    const NDUST = 350;
    const dustPos = new Float32Array(NDUST * 3);
    const dustColors = new Float32Array(NDUST * 3);
    const palette = [
      new THREE.Color(0x7c3aed),
      new THREE.Color(0xc026d3),
      new THREE.Color(0x0891b2),
    ];
    for (let i = 0; i < NDUST; i++) {
      const r = 2.5 + Math.random() * 2.0;
      const t = Math.random() * Math.PI * 2;
      const p = Math.random() * Math.PI;
      dustPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      dustPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      dustPos[i * 3 + 2] = r * Math.cos(p);
      const c = palette[i % 3];
      dustColors[i * 3] = c.r; dustColors[i * 3 + 1] = c.g; dustColors[i * 3 + 2] = c.b;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.Float32BufferAttribute(dustPos, 3));
    dustGeo.setAttribute("color", new THREE.Float32BufferAttribute(dustColors, 3));
    const dustMat = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.02,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // ── EQUATORIAL ACCENT RING (decorative) ───────────────────────────────────
    const equatorGeo = new THREE.TorusGeometry(sfRadius * 1.08, 0.004, 6, 120);
    const equatorMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const equator = new THREE.Mesh(equatorGeo, equatorMat);
    equator.rotation.x = Math.PI / 2;
    nodeGroup.add(equator);

    // ── RAYCASTING ────────────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster();
    raycaster.params.Line = { threshold: 0 };
    const mouse = new THREE.Vector2(-10, -10);
    let hoveredNode: NodeData | null = null;
    const nodeMeshes = nodes.map(n => n.mesh);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── SHARED ACTIVATE / DEACTIVATE ─────────────────────────────────────────
    const activateNode = (nd: NodeData) => {
      gsap.to(nd.mesh.scale, { x: 3.2, y: 3.2, z: 3.2, duration: 0.4, ease: "back.out(1.7)" });
      gsap.to(nd.glow.material as THREE.MeshBasicMaterial, { opacity: 0.6, duration: 0.3 });
      gsap.to(nd.ring.material as THREE.MeshBasicMaterial, { opacity: 0.75, duration: 0.3 });
      (nd.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 7;
      soundRefs.current.press();
      setSelectedSkill(nd.skill);
    };

    const deactivateNode = (nd: NodeData) => {
      gsap.to(nd.mesh.scale, { x: 1, y: 1, z: 1, duration: 0.4, ease: "power2.out" });
      gsap.to(nd.glow.material as THREE.MeshBasicMaterial, { opacity: 0.22, duration: 0.4 });
      gsap.to(nd.ring.material as THREE.MeshBasicMaterial, { opacity: 0, duration: 0.25 });
      (nd.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.2;
      soundRefs.current.release();
      setSelectedSkill(null);
    };

    // ── MOBILE TOUCH ─────────────────────────────────────────────────────────
    let touchDismissTimer: ReturnType<typeof setTimeout> | null = null;

    const onTouchEnd = (e: TouchEvent) => {
      if (!e.changedTouches.length) return;
      const touch = e.changedTouches[0];
      const tx = (touch.clientX / window.innerWidth) * 2 - 1;
      const ty = -(touch.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(new THREE.Vector2(tx, ty), camera);
      const hits = raycaster.intersectObjects(nodeMeshes, false);
      const hit = hits.length > 0 ? (nodes.find(n => n.mesh === hits[0].object) ?? null) : null;

      if (touchDismissTimer) clearTimeout(touchDismissTimer);

      if (hit && hit === hoveredNode) {
        // Tap same node → dismiss
        deactivateNode(hoveredNode);
        hoveredNode = null;
        return;
      }

      if (hoveredNode) {
        deactivateNode(hoveredNode);
        hoveredNode = null;
      }

      if (hit) {
        hoveredNode = hit;
        activateNode(hit);
        touchDismissTimer = setTimeout(() => {
          if (hoveredNode === hit) {
            deactivateNode(hit);
            hoveredNode = null;
          }
        }, 4000);
      }
    };

    renderer.domElement.addEventListener("touchend", onTouchEnd);

    // ── ANIMATION LOOP ────────────────────────────────────────────────────────
    let rotSpeed = SECTION_CAMERA.hero.speed;
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Group rotation
      nodeGroup.rotation.y += rotSpeed;

      // Core animation
      const corePulse = 1 + Math.sin(t * 2.2) * 0.09;
      core.scale.setScalar(corePulse);
      core.rotation.y += 0.008;
      core.rotation.z += 0.004;
      coreMat.emissiveIntensity = 3 + Math.sin(t * 2) * 1;
      wire.rotation.y += 0.006;
      wire.rotation.x -= 0.003;
      (wireMat as THREE.MeshBasicMaterial).opacity = 0.25 + Math.sin(t * 1.5) * 0.12;

      // Orbit point lights
      ptV.position.set(Math.sin(t * 0.38) * 3.5, 2.5, Math.cos(t * 0.38) * 3.5);
      ptC.position.set(Math.sin(t * 0.38 + Math.PI) * 3.5, -2.5, Math.cos(t * 0.38 + Math.PI) * 3.5);

      // Subtle node bobbing
      for (let i = 0; i < nodes.length; i++) {
        const nd = nodes[i];
        const bob = 1 + Math.sin(t * 0.65 + i * 0.42) * 0.018;
        const pos = nd.originalPos.clone().multiplyScalar(bob);
        if (nd !== hoveredNode) {
          nd.mesh.position.copy(pos);
          nd.glow.position.copy(pos);
          nd.ring.position.copy(pos);
        }
      }

      // Dust slow rotation
      dust.rotation.y += 0.0006;
      dust.rotation.x += 0.0003;

      // ── HOVER DETECTION ────────────────────────────────────────────────────
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(nodeMeshes, false);
      const hit = hits.length > 0 ? (nodes.find(n => n.mesh === hits[0].object) ?? null) : null;

      if (hit !== hoveredNode) {
        if (hoveredNode) deactivateNode(hoveredNode);
        if (hit) activateNode(hit);
        hoveredNode = hit;
      }

      // Hover ring spin
      if (hoveredNode) {
        hoveredNode.ring.rotation.z += 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();
    bypassLoading();

    // ── SECTION SCROLL TRIGGERS ───────────────────────────────────────────────
    const enterSection = (section: Section) => {
      const s = SECTION_CAMERA[section];
      rotSpeed = s.speed;
      setActiveSection(section);
      gsap.to(camera.position, { x: s.x, y: s.y, z: s.z, duration: 1.3, ease: "power2.inOut" });
      // Pulse the sphere on section change
      gsap.fromTo(nodeGroup.scale, { x: 0.92, y: 0.92, z: 0.92 }, { x: 1, y: 1, z: 1, duration: 0.8, ease: "back.out(1.4)" });
    };

    const trigger = (id: string, enter: Section, back: Section) => {
      ScrollTrigger.create({
        trigger: id,
        start: "top 55%",
        onEnter:     () => enterSection(enter),
        onLeaveBack: () => enterSection(back),
      });
    };

    trigger("#about",      "about",      "hero");
    trigger("#skills",     "skills",     "about");
    trigger("#toolkit",    "experience", "skills");
    trigger("#experience", "experience", "skills");
    trigger("#research",   "research",   "experience");
    trigger("#projects",   "projects",   "research");
    trigger("#contact",    "contact",    "projects");

    ScrollTrigger.refresh();

    // ── RESIZE ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── CLEANUP ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      if (touchDismissTimer) clearTimeout(touchDismissTimer);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("touchend", onTouchEnd);
      ScrollTrigger.getAll().forEach(st => st.kill());
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [isMobile, bypassLoading]);

  return (
    <>
      {/* Three.js canvas mount point */}
      <div ref={mountRef} className="fixed inset-0 w-full h-full" />

      {/* Skill tooltip — appears at bottom center on hover */}
      <div
        className="fixed bottom-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300"
        style={{ opacity: selectedSkill ? 1 : 0, transform: `translateX(-50%) translateY(${selectedSkill ? "0px" : "12px"})` }}
      >
        {selectedSkill && (
          <div className="flex items-start gap-3 px-5 py-3 rounded-2xl border border-border/60 bg-card/85 backdrop-blur-md shadow-2xl gradient-hairline max-w-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedSkill.icon}
              alt={selectedSkill.label}
              className="w-9 h-9 object-contain shrink-0 mt-0.5"
              style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
            />
            <div className="min-w-0">
              <p className="font-display font-bold text-foreground text-sm leading-tight">{selectedSkill.label}</p>
              <p className="font-mono text-[11px] text-muted-foreground leading-snug">{selectedSkill.shortDescription}</p>
              {selectedSkill.howIUseThis && (
                <p className="font-mono text-[10px] text-foreground/50 leading-snug mt-1.5 border-t border-border/40 pt-1.5">
                  {selectedSkill.howIUseThis}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
