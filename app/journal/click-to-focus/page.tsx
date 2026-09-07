"use client";

import { useState } from "react";
import Web3DStory from "./Web3DStory";

const copy = {
  en: {
    back: "Journal index", label: "ARTICLE 01 · THREE.JS + R3F + GSAP", title: "Building a click-to-focus 3D viewer.", intro: "A small browser experiment in guiding attention without removing spatial context.", tryIt: "Scroll the demo and click any form.",
    sections: [["The problem", "When every object in a complex 3D scene carries equal visual weight, the viewer has to decide where to look before they can understand the explanation. The experiment asks whether one click can create focus while keeping enough surrounding structure to preserve orientation."], ["Core concept", "React Three Fiber provides Three.js raycasting through pointer events. Selection is stored as a single piece of React state. GSAP ScrollTrigger converts page progress into a controlled camera position and model rotation, while Three.js remains responsible for rendering every frame."], ["Implementation", "Three independently selectable meshes use physical materials. The selected mesh stays opaque and grows slightly; the others ease toward lower opacity. Original material behavior is restored when the background or reset control is selected."], ["What was difficult", "Transparency is not only an opacity setting. Depth writing and drawing order affect whether overlapping surfaces remain legible. Touch targets also need more generous composition on small screens, so the text stays outside the WebGL canvas as accessible HTML."], ["Where it can be used", "The same pattern can connect a sentence to one anatomical structure, explain a stage in a procedure, or focus attention on a product component. Patient-derived data and clinical instructions are deliberately outside this public prototype."], ["Next experiment", "The next study will define camera targets for three narrative stages and compare immediate movement with an eased guided transition."]],
  },
  ko: {
    back: "저널 목록", label: "첫 번째 글 · THREE.JS + R3F + GSAP", title: "클릭한 3D 구조에 초점을 만드는 웹 뷰어.", intro: "공간적 맥락을 없애지 않으면서 사용자의 시선을 안내하는 작은 브라우저 실험입니다.", tryIt: "스크롤하고 도형을 직접 선택해보세요.",
    sections: [["해결할 문제", "복잡한 3D 장면에서 모든 객체가 같은 시각적 비중을 가지면 사용자는 설명을 이해하기 전에 먼저 어디를 볼지 결정해야 합니다. 이번 실험은 한 번의 선택으로 초점을 만들면서도 방향을 잃지 않을 만큼 주변 구조를 남길 수 있는지 확인합니다."], ["핵심 개념", "React Three Fiber는 Three.js의 레이캐스팅을 포인터 이벤트로 제공합니다. 선택 상태는 하나의 React state로 관리합니다. GSAP ScrollTrigger는 페이지 진행도를 카메라 위치와 모델 회전으로 연결하고, 매 프레임의 실제 렌더링은 Three.js가 담당합니다."], ["구현", "서로 독립적으로 선택할 수 있는 세 개의 메시와 물리 기반 재질을 사용했습니다. 선택된 메시는 불투명한 상태를 유지하며 조금 커지고, 나머지는 낮은 투명도로 부드럽게 전환됩니다. 배경이나 초기화 버튼을 선택하면 전체 상태가 복원됩니다."], ["어려웠던 점", "투명 표현은 opacity 값만의 문제가 아닙니다. depthWrite와 그리기 순서가 겹친 표면의 가독성을 바꿉니다. 모바일에서는 선택 영역과 구성이 더 넉넉해야 하므로 설명 텍스트는 WebGL 장면이 아닌 접근 가능한 HTML로 유지했습니다."], ["활용 가능성", "같은 패턴으로 문장과 특정 해부 구조를 연결하거나, 수술 과정의 한 단계를 설명하거나, 제품의 특정 부품에 시선을 모을 수 있습니다. 환자 유래 데이터와 실제 임상 지시는 이 공개 프로토타입에서 의도적으로 제외했습니다."], ["다음 실험", "다음 글에서는 세 개의 설명 단계에 카메라 위치와 주시점을 정의하고 즉시 이동과 easing을 적용한 안내형 전환을 비교합니다."]],
  },
};

export default function Article() {
  const [lang, setLang] = useState<"en" | "ko">("en");
  const t = copy[lang];
  return <main className={`journalArticle ${lang === "ko" ? "ko" : "en"}`}>
    <header className="journalNav"><a className="brand" href="/"><span className="mark"><i /></span>DESIGN ORBIT</a><div className="journalTools"><div className="lang"><button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button><span>/</span><button className={lang === "ko" ? "on" : ""} onClick={() => setLang("ko")}>KO</button></div><a href="/journal">← {t.back}</a></div></header>
    <article className="articleIntro"><p className="eyebrow">{t.label}</p><h1>{t.title}</h1><p>{t.intro}</p><span>{t.tryIt} ↓</span></article>
    <Web3DStory lang={lang} />
    <article className="articleBody">{t.sections.map(([heading, body], i) => <section key={heading}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{heading}</h2><p>{body}</p></div></section>)}</article>
    <footer><div className="brand"><span className="mark"><i /></span>DESIGN ORBIT</div><p>{lang === "ko" ? "작은 기술 실험을 더 큰 시각화 작업으로 축적합니다." : "Small technical studies becoming a larger visual practice."}</p><a className="email" href="mailto:designorbitkr@gmail.com">designorbitkr@gmail.com</a><p>© 2026</p></footer>
  </main>;
}
