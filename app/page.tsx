"use client";

import { useState } from "react";

const content = {
  en: {
    nav: ["Services", "Projects", "Journal", "Process", "About"],
    eyebrow: "INTERACTIVE 3D VISUALIZATION SERVICES",
    title: "Complex ideas, made visible in interactive 3D.",
    intro: "Design Orbit creates custom, browser-based 3D stories for medical education, scientific research, and product communication—from content structure and visualization to interactive web development.",
    action: "Explore services",
    selected: "Custom interactive 3D stories",
    selectedSub: "A complete visualization service that turns research, procedures, products, and complex subjects into clear web experiences.",
    projects: [
      ["01", "SIGNATURE SERVICE", "Interactive 3D Story", "A complete scrollytelling page where a custom 3D model, camera, highlights, animation, and explanatory text progress together—designed for education, research, or promotion.", "Content strategy · 3D model · Three.js · Responsive"],
      ["02", "RESEARCH & EDUCATION", "Research Visualization Page", "Transform a paper, study, or complex scientific topic into a visual narrative that combines research structure, 3D models, figures, and interactive explanation.", "Research translation · Scientific communication · Web3D"],
      ["03", "PRODUCT COMMUNICATION", "Interactive Product Experience", "Explain how a medical device, life-science technology, or product works through browser-based 3D, exploded views, guided interactions, and branded storytelling.", "Product 3D · Interaction · Website integration"],
      ["04", "VISUAL COMMUNICATION", "Medical & Scientific Illustration", "Anatomically informed illustrations, procedural visuals, and scientific diagrams—delivered independently or integrated into an interactive 3D experience.", "Medical illustration · Information design · 2D/3D"],
    ],
    sampleLabel: "CURRENT PRODUCT SAMPLE",
    sampleTitle: "A youth-centered guide to medication abortion—explained through scroll and 3D.",
    sampleBody: "The first standardized sample will compare the mifepristone-plus-misoprostol regimen with the misoprostol-only regimen, including how the medicines work and why administration routes differ. Clinical instructions will remain unpublished until expert review is complete.",
    nextSample: "NEXT SAMPLE · ACL injury and reconstruction after a climbing landing",
    viewSample: "View visual prototype",
    showcaseTitle: "Medical illustration showcase",
    showcaseBody: "A dedicated gallery for existing medical and scientific illustration work. Selected projects will be added next.",
    journalTitle: "Small experiments, published as a growing practice.",
    journalBody: "A biweekly cycle of learning one Web3D technique, building a focused demo, and documenting it in English and Korean.",
    journalLink: "View the learning roadmap",
    capTitle: "From complex source material to a finished 3D experience",
    caps: [
      ["01", "Content review", "Define the audience, communication goal, evidence, source materials, and the single idea the experience must make clear."],
      ["02", "Storyboard & prototype", "Translate the content into a spatial narrative, then review the visual direction, model, camera, and interaction together."],
      ["03", "Build & delivery", "Develop the responsive Web3D page, incorporate review feedback, and deliver it as a standalone experience or website integration."],
    ],
    aboutLabel: "ABOUT DESIGN ORBIT",
    aboutTitle: "Clinical understanding, visual communication, and Web3D in one practice.",
    about: "Founded by medical visualization researcher Soyoung Lim, Design Orbit combines a background in design and biomedical art with five years of experience collaborating in a hospital surgical research environment. This clinical-to-visual perspective helps translate expert knowledge into accurate, understandable interactive experiences. The practice extends beyond medicine to life science, education, research, and products that need a clearer spatial story.",
    facts: ["Design + medical illustration", "5 years in applied 3D research", "Computer science in progress", "Three.js · R3F · vtk.js"],
    footer: "Tell us what your audience needs to understand. We will shape it into an interactive 3D story.",
  },
  ko: {
    nav: ["서비스", "프로젝트", "기술 저널", "제작 과정", "소개"],
    eyebrow: "인터랙티브 3D 시각화 서비스",
    title: "복잡한 아이디어를 인터랙티브 3D로 명확하게.",
    intro: "Design Orbit는 의료 교육, 과학 연구, 제품 커뮤니케이션을 위한 맞춤형 브라우저 기반 3D 스토리를 만듭니다. 콘텐츠 구조 설계부터 시각화, 3D 모델, 인터랙티브 웹 개발까지 통합해 제공합니다.",
    action: "서비스 보기",
    selected: "맞춤형 인터랙티브 3D 스토리",
    selectedSub: "연구, 수술 과정, 제품, 복잡한 개념을 명확한 웹 경험으로 바꾸는 통합 시각화 서비스입니다.",
    projects: [
      ["01", "대표 서비스", "Interactive 3D Story", "맞춤형 3D 모델과 카메라, 강조 효과, 애니메이션, 설명 문구가 스크롤에 맞춰 함께 전개되는 완성형 페이지를 제작합니다.", "콘텐츠 기획 · 3D 모델 · Three.js · 반응형"],
      ["02", "연구·교육", "Research Visualization Page", "논문, 연구 결과, 복잡한 과학 주제를 연구 구조와 3D 모델, 도해, 인터랙티브 설명이 연결된 시각적 이야기로 전환합니다.", "연구 해석 · 과학 커뮤니케이션 · Web3D"],
      ["03", "제품 커뮤니케이션", "Interactive Product Experience", "의료기기, 생명과학 기술, 일반 제품의 작동 원리를 3D 분해도, 단계별 인터랙션, 브랜드 스토리로 설명합니다.", "제품 3D · 인터랙션 · 웹사이트 연동"],
      ["04", "비주얼 커뮤니케이션", "메디컬·과학 일러스트레이션", "해부학 기반 일러스트레이션, 수술·치료 과정, 과학 다이어그램을 단독 결과물 또는 인터랙티브 3D 경험의 일부로 제작합니다.", "메디컬 일러스트 · 정보디자인 · 2D/3D"],
    ],
    sampleLabel: "현재 제작 중인 상품 샘플",
    sampleTitle: "청소년을 위한 약물적 임신중지 이용안내를 스크롤과 3D로 설명합니다.",
    sampleBody: "첫 표준 샘플은 미페프리스톤+미소프로스톨 병용요법과 미소프로스톨 단독요법의 작용과 투여 경로 차이를 비교합니다. 구체적인 이용안내는 전문가 검토가 완료되기 전까지 공개하지 않습니다.",
    nextSample: "다음 샘플 · 클라이밍 착지 후 ACL 손상과 재건술",
    viewSample: "시각 프로토타입 보기",
    showcaseTitle: "메디컬 일러스트레이션 쇼케이스",
    showcaseBody: "기존 메디컬·과학 일러스트레이션 작업을 위한 전용 갤러리입니다. 대표 작품을 다음 단계에서 추가할 예정입니다.",
    journalTitle: "작은 기술 실험을 꾸준한 작업으로 축적합니다.",
    journalBody: "격주마다 Web3D 기술 하나를 공부하고, 작은 데모를 제작해 영문·한글 기술 글과 함께 공개합니다.",
    journalLink: "학습 로드맵 보기",
    capTitle: "복잡한 원자료에서 완성된 3D 경험까지",
    caps: [
      ["01", "콘텐츠 검토", "대상 사용자, 전달 목표, 근거 자료와 핵심 메시지를 정의하고 원자료를 함께 검토합니다."],
      ["02", "스토리보드·프로토타입", "내용을 공간적 이야기로 바꾸고 시각 방향, 3D 모델, 카메라와 인터랙션을 단계적으로 확인합니다."],
      ["03", "개발·납품", "반응형 Web3D 페이지를 개발하고 검토 의견을 반영해 독립 페이지 또는 고객 웹사이트 연동 형태로 제공합니다."],
    ],
    aboutLabel: "DESIGN ORBIT 소개",
    aboutTitle: "임상 이해, 시각 커뮤니케이션, Web3D를 하나의 작업으로 연결합니다.",
    about: "Design Orbit를 운영하는 임소영은 디자인과 바이오메디컬 아트를 전공하고 5년간 병원 외과 연구 환경에서 의료진과 3D 연구를 수행했습니다. 전문가의 언어와 요구를 이해하고 정확하면서도 이해하기 쉬운 시각 경험으로 번역하는 것이 강점입니다. 의료를 기반으로 생명과학, 교육, 연구, 제품 등 공간적 설명이 필요한 영역으로 작업을 확장합니다.",
    facts: ["디자인 + 메디컬 일러스트", "5년간 응용 3D 연구", "컴퓨터과학 학사 과정", "Three.js · R3F · vtk.js"],
    footer: "당신의 사용자가 무엇을 이해해야 하는지 알려주세요. 인터랙티브 3D 스토리로 설계하겠습니다.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "ko">("en");
  const t = content[lang];
  return <main className={`siteShell ${lang === "ko" ? "ko" : "en"}`}>
    <header>
      <a className="brand" href="#top"><span className="mark"><i /></span>DESIGN ORBIT</a>
      <nav>{t.nav.map((n, i) => <a key={n} href={["#work","#showcase","/journal","#process","#about"][i]}>{n}</a>)}</nav>
      <div className="headerTools"><a className="mobileJournal" href="/journal">{lang==="ko"?"기술 저널":"Journal"} ↗</a><div className="lang"><button className={lang==="en"?"on":""} onClick={()=>setLang("en")}>EN</button><span>/</span><button className={lang==="ko"?"on":""} onClick={()=>setLang("ko")}>KO</button></div><a className="navCta" href="mailto:designorbitkr@gmail.com">Start a project ↗</a></div>
    </header>
    <section className="hero" id="top">
      <div className="heroCopy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lede">{t.intro}</p><a className="link" href="#work">{t.action}<b>↓</b></a></div>
      <div className="visual" aria-hidden="true"><div className="halo"/><i className="o a"/><i className="o b"/><i className="o c"/><div className="core"><span>RESEARCH</span><strong>3D</strong><span>WEB</span></div><div className="visualNote n1">CLINICAL<br/>KNOWLEDGE</div><div className="visualNote n2">INTERACTIVE<br/>STORY</div></div>
    </section>
    <section className="section" id="work">
      <div className="sectionHead"><h2>{t.selected}</h2><p>{t.selectedSub}</p></div>
      <div className="projects">{t.projects.map(([no,type,title,body,tags])=><article key={no}><span className="no">{no}</span><div><p className="eyebrow">{type}</p><h3>{title}</h3><p>{body}</p></div><span className="tags">{tags}</span></article>)}</div>
      <div className="sample"><p className="eyebrow">{t.sampleLabel}</p><h3>{t.sampleTitle}</h3><div><p>{t.sampleBody}</p><a className="sampleLink" href="/medication-guide">{t.viewSample} →</a><p className="nextSample">{t.nextSample}</p></div></div>
    </section>
    <section className="section showcase" id="showcase"><div className="sectionHead"><h2>{t.showcaseTitle}</h2><p>{t.showcaseBody}</p></div><div className="gallery">{Array.from({length:6}).map((_,i)=><div key={i}><span>0{i+1}</span></div>)}</div></section>
    <section className="journalInvite"><p className="eyebrow">DESIGN ORBIT JOURNAL · BIWEEKLY</p><h2>{t.journalTitle}</h2><div><p>{t.journalBody}</p><a href="/journal">{t.journalLink} ↗</a></div></section>
    <section className="section capabilities" id="process"><h2>{t.capTitle}</h2><div className="capGrid">{t.caps.map(([no,title,body])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="section about" id="about"><p className="eyebrow">{t.aboutLabel}</p><div className="aboutGrid"><h2>{t.aboutTitle}</h2><div><p className="aboutBody">{t.about}</p><div className="facts">{t.facts.map(x=><span key={x}>{x}</span>)}</div></div></div></section>
    <footer><div className="brand"><span className="mark"><i /></span>DESIGN ORBIT</div><p>{t.footer}</p><a className="email" href="mailto:designorbitkr@gmail.com">designorbitkr@gmail.com</a><p>© 2026</p></footer>
  </main>;
}
