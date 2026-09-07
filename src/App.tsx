import { useEffect, useState } from 'react'

type Page = 'home' | 'journal' | 'article'
type Lang = 'en' | 'ko'

const route = (): Page => location.hash.includes('click-to-focus') ? 'article' : location.hash.includes('journal') ? 'journal' : 'home'

function Header({ page }: { page: Page }) {
  return <header className="topbar"><a className="brand" href="#/">DESIGN ORBIT</a><nav><a href="#/">Studio</a><a className={page !== 'home' ? 'active' : ''} href="#/journal">Journal</a><a href="mailto:designorbitkr@gmail.com">Contact</a></nav></header>
}

function Home() {
  return <><section className="hero"><p className="eyebrow">Visual research studio · Seoul</p><h1>Making complex ideas visible.</h1><p className="lead">Design Orbit connects medical illustration, interactive Web3D and clinical research experience to create visual explanations people can understand and explore.</p><div className="actions"><a className="primary" href="#/journal">Read the journal</a><a className="secondary" href="mailto:designorbitkr@gmail.com">Start a conversation</a></div><div className="orb" /></section><section className="section"><p className="section-name">Selected capabilities</p><div className="cards"><article><span>01</span><h2>Interactive Web3D</h2><p>Scroll-led visual stories for research communication and product explanation.</p></article><article><span>02</span><h2>Medical illustration</h2><p>Clear anatomical and procedural visuals grounded in clinical collaboration.</p></article><article><span>03</span><h2>Research tools</h2><p>3D Slicer modules and medical-image workflows shaped around real users.</p></article></div></section></>
}

function Journal() {
  return <><section className="journal-hero"><p className="eyebrow">Design Orbit Journal</p><h1>Experiments in seeing.</h1><p className="lead">Notes on Three.js, vtk.js, medical visualization and the design of understandable 3D experiences.</p></section><main className="journal-grid"><a className="feature" href="#/journal/click-to-focus"><p className="meta">Web3D · Three.js · 8 min</p><h2>Building a Click-to-Focus 3D Viewer</h2><p>How selection and visual hierarchy can preserve context inside a complex 3D scene.</p><strong>Read the story →</strong></a><aside><p className="meta">NEXT EXPERIMENT</p><h2>Guided camera transitions</h2><p>Moving toward a selected structure without making the viewer lose orientation.</p></aside></main></>
}

const copy = {
  en: {
    title: 'Building a Click-to-Focus 3D Viewer', stand: 'A small interaction experiment about directing attention inside complex 3D scenes—without removing the spatial context that makes them meaningful.', problem: 'When everything is visible, nothing is clear.', p1: 'Complex 3D scenes often give every structure equal visual weight. Rotation and zoom provide freedom, but freedom alone does not tell a viewer where to look. In medical and scientific communication, the object mentioned by an explanation can remain difficult to locate among surrounding structures.', p2: 'This experiment uses a simple focus-and-context interaction. Selecting one structure preserves its original appearance while surrounding structures become translucent. The target becomes clear, but its position in the complete model remains visible.', result: 'A deliberately small result', p3: 'The prototype contains three selectable structures. Click or tap one of them to retain its color and reduce the visual weight of the others. Selecting the background or Reset restores the scene.', concept: 'Selection is a state, not an effect', p4: 'In a Three.js project, raycasting connects a pointer position to an object in the scene. React Three Fiber exposes that process through pointer events. The important design decision comes afterward: every mesh derives its appearance from one selected identifier, so the full scene can always return to a known state.', difficulty: 'Where the simple idea becomes difficult', p5: 'Transparency introduces depth-sorting problems when surfaces overlap. Shared materials can also cause unexpected changes across multiple meshes. A robust implementation clones materials, stores their original properties, stops pointer-event propagation and tests touch targets on small screens.', application: 'From demonstration to communication', p6: 'The pattern can support anatomical education, patient communication and scientific storytelling. It should not be treated as a validated clinical interface without usability testing, accessibility work and appropriate data governance.', next: 'Next experiment', p7: 'The next prototype will pair selection with a guided camera transition while preserving orientation and a clear path back to the previous view.'
  },
  ko: {
    title: '클릭한 3D 구조를 강조하는 웹 뷰어 만들기', stand: '복잡한 3D 장면에서 공간적 맥락은 남기면서 사용자의 시선을 설명 대상에 집중시키는 작은 인터랙션 실험.', problem: '모든 것이 보일 때, 오히려 아무것도 명확하지 않다', p1: '복잡한 3D 장면에서는 모든 구조가 같은 시각적 비중으로 표시되기 쉽다. 회전과 확대는 자유를 주지만, 그 자유만으로 사용자가 어디를 보아야 하는지 알려주지는 않는다. 의료·과학 정보 전달에서는 설명이 가리키는 구조가 주변 요소 사이에 묻힐 수 있다.', p2: '이번 실험에는 단순한 Focus+Context 방식을 적용했다. 하나의 구조를 선택하면 원래 모습은 유지하고 주변 구조만 반투명하게 만든다. 대상은 명확해지지만 전체 모델 안에서의 위치 관계는 계속 확인할 수 있다.', result: '의도적으로 작게 만든 결과', p3: '프로토타입은 선택 가능한 세 개의 구조로 구성된다. 하나를 클릭하거나 터치하면 해당 구조의 색상은 유지되고 나머지 구조의 시각적 비중은 낮아진다. Reset을 누르면 전체 장면이 복원된다.', concept: '선택은 효과가 아니라 상태다', p4: 'Three.js에서는 Raycasting으로 포인터 위치와 장면 속 객체를 연결한다. React Three Fiber는 이를 포인터 이벤트로 제공한다. 중요한 설계는 그다음이다. 하나의 선택 식별자로 모든 mesh의 표현을 결정하면 언제든 명확한 초기 상태로 돌아갈 수 있다.', difficulty: '단순한 아이디어가 어려워지는 지점', p5: '투명 표면이 겹치면 depth sorting 문제가 발생한다. 여러 mesh가 material을 공유하면 예상하지 못한 구조까지 함께 변할 수 있다. 안정적인 구현을 위해 material 복제, 원래 속성 저장, 이벤트 전파 차단, 모바일 터치 영역 테스트가 필요하다.', application: '시연에서 정보 전달로', p6: '이 패턴은 해부학 교육, 환자 설명, 과학 스토리텔링에 활용할 수 있다. 다만 사용성 검증과 접근성 점검, 적절한 데이터 관리 없이 임상 인터페이스로 간주해서는 안 된다.', next: '다음 실험', p7: '다음 프로토타입에서는 구조 선택과 부드러운 카메라 이동을 연결한다. 사용자가 방향을 잃지 않고 이전 시점으로 돌아올 수 있는 방법도 함께 설계할 예정이다.'
  }
}

function Demo() {
  const [selected, setSelected] = useState<number | null>(null)
  return <div className="demo" onClick={() => setSelected(null)}><button className="reset" onClick={(e) => { e.stopPropagation(); setSelected(null) }}>Reset</button><div className="model">{[1,2,3].map(n => <button key={n} aria-label={`Structure ${n}`} className={`shape s${n} ${selected && selected !== n ? 'dim' : ''} ${selected === n ? 'selected' : ''}`} onClick={e => { e.stopPropagation(); setSelected(n) }} />)}</div><div className="demo-label">{selected ? `Structure ${selected}` : 'Select a structure'}</div></div>
}

function Article() {
  const [lang, setLang] = useState<Lang>('en'); const c = copy[lang]
  return <article><div className="article-tools"><a href="#/journal">← Journal</a><div className="switch"><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button><button className={lang === 'ko' ? 'active' : ''} onClick={() => setLang('ko')}>한국어</button></div></div><header className="article-head"><p className="eyebrow">THREE.JS · INTERACTION STUDY 01</p><h1>{c.title}</h1><p className="stand">{c.stand}</p><p className="byline">Words and experiment by Soyoung Lim · Design Orbit</p></header><main className="story"><h2>{c.problem}</h2><p className="dropcap">{c.p1}</p><p>{c.p2}</p><blockquote>Focus should clarify the target without erasing its world.</blockquote><h2>{c.result}</h2><p>{c.p3}</p><figure><Demo /><figcaption>Click or tap a structure. This abstract model contains no patient-derived data.</figcaption></figure><h2>{c.concept}</h2><p>{c.p4}</p><pre><code>{`const [selected, setSelected] = useState<string | null>(null)\n\nconst active = selected === null || selected === name\nopacity = active ? 1 : 0.18`}</code></pre><h2>{c.difficulty}</h2><p>{c.p5}</p><h2>{c.application}</h2><p>{c.p6}</p><div className="note">Public demo only. No patient data, hospital interface or company source code is included.</div><h2>{c.next}</h2><p>{c.p7}</p></main></article>
}

export default function App() {
  const [page, setPage] = useState<Page>(route())
  useEffect(() => { const fn = () => { setPage(route()); scrollTo(0,0) }; addEventListener('hashchange', fn); return () => removeEventListener('hashchange', fn) }, [])
  return <><Header page={page}/>{page === 'home' ? <Home/> : page === 'journal' ? <Journal/> : <Article/>}<footer>© 2026 Design Orbit · <a href="mailto:designorbitkr@gmail.com">designorbitkr@gmail.com</a></footer></>
}
