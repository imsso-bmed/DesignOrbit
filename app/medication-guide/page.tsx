"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function StoryObject({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  const left = useRef<THREE.Mesh>(null);
  const right = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!group.current || !left.current || !right.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (progress - .5) * .45, .05);
    left.current.position.x = THREE.MathUtils.lerp(-.15, -1.25, Math.min(progress * 2, 1));
    right.current.position.x = THREE.MathUtils.lerp(.15, 1.25, Math.min(progress * 2, 1));
    const split = Math.max(0, Math.min((progress - .45) * 2.5, 1));
    left.current.scale.setScalar(1 - split * .28);
    right.current.scale.setScalar(1 - split * .1);
    group.current.position.y = Math.sin(progress * Math.PI * 2) * .25;
  });
  return <group ref={group}>
    <mesh ref={left}>
      <icosahedronGeometry args={[1.05, 5]} />
      <meshStandardMaterial color="#d9ff70" roughness={.32} metalness={.05} />
    </mesh>
    <mesh ref={right}>
      <icosahedronGeometry args={[1.05, 5]} />
      <meshStandardMaterial color="#ff9178" roughness={.38} metalness={.05} />
    </mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.25, .018, 8, 160]} />
      <meshBasicMaterial color="#f5f1e9" transparent opacity={.58} />
    </mesh>
  </group>;
}

const chapters = [
  ["01", "Before the guide", "Medication abortion is not contraception. This prototype explains two evidence-based approaches and how their components differ. It does not yet provide personal dosing instructions."],
  ["02", "Two pathways", "One approach combines oral mifepristone with misoprostol. The other uses misoprostol alone. The right option depends on clinical context and access."],
  ["03", "Different roles", "Mifepristone blocks the action of progesterone. Misoprostol causes the uterus to contract and helps the pregnancy pass."],
  ["04", "Different routes", "Mifepristone is taken orally. Misoprostol may be used through buccal, sublingual, or vaginal routes. A reviewed guide must explain each route without shame or ambiguity."],
  ["05", "Care and support", "A complete youth-centered guide must include what to expect, when to seek urgent help, privacy, consent, emotional support, and trusted local care."],
  ["06", "Review before release", "Clinical details, local access information, and emergency guidance will only be released after review by a qualified reproductive-health professional."],
];

export default function MedicationGuide() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max ? scrollY / max : 0);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);

  return <main className="medGuide">
    <div className="medCanvas"><Canvas camera={{ position: [0, 0, 7], fov: 38 }}><ambientLight intensity={1.8}/><directionalLight position={[4,5,5]} intensity={3}/><StoryObject progress={progress}/></Canvas></div>
    <header className="medNav"><a href="/">DESIGN ORBIT</a><span>VISUAL PROTOTYPE · CLINICAL REVIEW PENDING</span></header>
    <section className="medIntro">
      <p className="eyebrow">YOUTH-CENTERED 3D SCROLLYTELLING</p>
      <h1>Two paths.<br/>Clear information.<br/>No judgment.</h1>
      <p>A visual structure for explaining medication abortion with dignity and clarity. Medical instructions are intentionally withheld until expert review.</p>
      <span className="scrollCue">SCROLL TO EXPLORE ↓</span>
    </section>
    <div className="medChapters">
      {chapters.map(([no,title,body]) => <section key={no} className="medChapter"><div><span>{no}</span><h2>{title}</h2><p>{body}</p></div></section>)}
    </div>
    <section className="medReview"><p className="eyebrow">PUBLICATION GATE</p><h2>Designed first.<br/>Reviewed before release.</h2><p>This prototype follows the World Health Organization’s abortion-care framework at a structural level. Doses, timing, contraindications, warning signs, and Korea-specific access information require current expert review before publication.</p><a href="https://www.who.int/publications/i/item/9789240039483" target="_blank" rel="noreferrer">WHO Abortion care guideline ↗</a></section>
    <footer className="medFooter"><a href="/">← Design Orbit</a><a href="mailto:designorbitkr@gmail.com">designorbitkr@gmail.com</a></footer>
  </main>;
}
