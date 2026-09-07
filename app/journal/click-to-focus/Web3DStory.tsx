"use client";

import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

type SceneProps = { progress: MutableRefObject<number>; selected: number | null; onSelect: (value: number | null) => void };
const palette = ["#f36b9f", "#9066ef", "#35b8ae"];

function StoryScene({ progress, selected, onSelect }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const meshes = useRef<Array<THREE.Mesh | null>>([]);
  const { camera } = useThree();

  useFrame((state, delta) => {
    const p = progress.current;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, 5.8 - p * 1.7, 4, delta);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, p > .64 ? .75 : 0, 4, delta);
    camera.lookAt(0, 0, 0);
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, p * Math.PI * 1.15, 3, delta);
      group.current.position.y = Math.sin(state.clock.elapsedTime * .7) * .06;
    }
    meshes.current.forEach((mesh, index) => {
      if (!mesh) return;
      const material = mesh.material as THREE.MeshPhysicalMaterial;
      const visible = (p <= .66 || index === 1) && (selected === null || selected === index);
      material.opacity = THREE.MathUtils.damp(material.opacity, visible ? 1 : .14, 7, delta);
      material.transparent = material.opacity < .99;
      material.depthWrite = material.opacity > .5;
      mesh.scale.setScalar(THREE.MathUtils.damp(mesh.scale.x, selected === index ? 1.1 : 1, 6, delta));
    });
  });

  const select = (index: number, event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(index);
    const mesh = meshes.current[index];
    if (mesh) gsap.fromTo(mesh.rotation, { z: mesh.rotation.z - .2 }, { z: mesh.rotation.z, duration: .7, ease: "back.out(2)" });
  };

  return <>
    <color attach="background" args={["#16052d"]} />
    <ambientLight intensity={1.5} />
    <directionalLight position={[4, 5, 4]} intensity={3.5} color="#f6eaff" />
    <pointLight position={[-4, -2, 2]} intensity={18} color="#7140d7" />
    <group ref={group} onPointerMissed={() => onSelect(null)}>
      <mesh ref={el => { meshes.current[0] = el; }} position={[-1.05, .2, 0]} rotation={[.2, 0, -.18]} onClick={e => select(0, e)}><capsuleGeometry args={[.62, 1.65, 12, 32]} /><meshPhysicalMaterial color={palette[0]} roughness={.28} clearcoat={.7} /></mesh>
      <mesh ref={el => { meshes.current[1] = el; }} position={[.75, .55, -.12]} rotation={[.2, 0, .35]} onClick={e => select(1, e)}><icosahedronGeometry args={[.92, 4]} /><meshPhysicalMaterial color={palette[1]} roughness={.25} clearcoat={.8} /></mesh>
      <mesh ref={el => { meshes.current[2] = el; }} position={[.55, -1.05, .35]} rotation={[0, 0, .18]} onClick={e => select(2, e)}><torusKnotGeometry args={[.48, .2, 120, 18]} /><meshPhysicalMaterial color={palette[2]} roughness={.3} clearcoat={.65} /></mesh>
    </group>
  </>;
}

export default function Web3DStory({ lang }: { lang: "en" | "ko" }) {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [selected, setSelected] = useState<number | null>(null);
  const ko = lang === "ko";
  useLayoutEffect(() => {
    if (!root.current) return;
    const context = gsap.context(() => {
      ScrollTrigger.create({ trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1, onUpdate: self => { progress.current = self.progress; } });
      gsap.utils.toArray<HTMLElement>(".web3d-step").forEach(step => gsap.fromTo(step, { opacity: .2, y: 35 }, { opacity: 1, y: 0, scrollTrigger: { trigger: step, start: "top 72%", end: "top 38%", scrub: true } }));
    }, root);
    return () => context.revert();
  }, []);
  const steps = ko ? [
    ["01 · 맥락 보기", "전체 장면에서 시작합니다.", "모든 구조를 함께 보여 공간적 관계를 먼저 파악합니다."],
    ["02 · 시점 전환", "움직이되 방향을 잃지 않습니다.", "GSAP ScrollTrigger가 스크롤을 카메라와 모델의 정돈된 전환으로 바꿉니다."],
    ["03 · 주의 집중", "하나의 구조를 강조합니다.", "보라색 구조는 선명하게 유지하고 주변 맥락은 반투명하게 낮춥니다."],
  ] : [
    ["01 · Establish context", "Begin with the complete scene.", "Every structure remains visible so the viewer can form a spatial overview."],
    ["02 · Change viewpoint", "Move, but preserve orientation.", "GSAP ScrollTrigger turns scrolling into a controlled camera and model transition."],
    ["03 · Direct attention", "Focus one structure.", "The violet structure stays vivid while the surrounding context becomes translucent."],
  ];
  return <section className="web3d-story" ref={root}>
    <div className="web3d-canvas"><Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 5.8], fov: 42 }}><StoryScene progress={progress} selected={selected} onSelect={setSelected} /></Canvas><button className="web3d-reset" onClick={() => setSelected(null)}>{ko ? "초점 초기화" : "Reset focus"}</button><div className="web3d-status">{selected === null ? (ko ? "전체 구조" : "All structures") : (ko ? `${selected + 1}번 구조 선택됨` : `Structure ${selected + 1} selected`)}</div></div>
    <div className="web3d-copy">{steps.map(step => <div className="web3d-step" key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></div>)}</div>
  </section>;
}
