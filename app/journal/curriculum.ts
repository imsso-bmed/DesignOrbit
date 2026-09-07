export type Lang = "en" | "ko";
export type ArticleDraft = {
  no: string;
  slug: string;
  track: string;
  journey: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  demo: Record<Lang, string>;
  proof: Record<Lang, string>;
  sections: Record<Lang, Array<[string, string]>>;
};

const section = (en: Array<[string,string]>, ko: Array<[string,string]>) => ({ en, ko });

export const curriculum: ArticleDraft[] = [
  {
    no:"01", slug:"click-to-focus", track:"INTERACTION · RAYCASTING", journey:"L22 Raycaster and Mouse Events · L62 R3F Mouse Events",
    title:{en:"Click-to-Focus 3D Viewer",ko:"클릭한 3D 구조를 강조하는 뷰어"},
    summary:{en:"Select one structure while preserving its spatial context.",ko:"공간적 맥락을 유지하면서 하나의 구조에 시선을 집중시킵니다."},
    demo:{en:"Three selectable abstract anatomy forms, focus state, reset and mobile touch.",ko:"세 개의 추상 해부 구조 선택, 초점 상태, 초기화와 모바일 터치."},
    proof:{en:"Raycasting · state · event propagation · accessible HTML UI",ko:"레이캐스팅 · 상태 관리 · 이벤트 전파 · 접근 가능한 HTML UI"},
    sections:section([],[]),
  },
  {
    no:"02", slug:"anatomy-scene-foundations", track:"RENDERING FOUNDATIONS", journey:"L04 Transforms · L06 Cameras · L11 Materials · L14 Lights",
    title:{en:"Designing a Readable Anatomy Scene",ko:"읽기 쉬운 해부학 3D 장면 설계하기"},
    summary:{en:"Build a rendering hierarchy with camera, light, material and transforms.",ko:"카메라·조명·재질·변환을 이용해 렌더링 위계를 설계합니다."},
    demo:{en:"One organ-like model with clinical, education and showcase lighting presets.",ko:"하나의 장기형 모델에 임상·교육·쇼케이스 조명 프리셋 적용."},
    proof:{en:"Scene graph · vectors · transforms · PBR · responsive camera",ko:"씬 그래프 · 벡터 · 변환 · PBR · 반응형 카메라"},
    sections:section(
      [["Problem","A technically correct model can still be difficult to read when camera distance, light direction and material response compete with the anatomy."],["Result","The demo presents one model through three restrained presets. Each preset keeps geometry unchanged and alters only the conditions through which form is perceived."],["Core concept","Three.js separates scene, camera, light, geometry and material. Treating those objects as a system makes the visual result predictable and maintainable."],["Implementation","The scene uses a PerspectiveCamera, two-area lighting logic, physically based material values and named groups. Presets update parameters rather than reconstructing the scene."],["Difficulties","Bright highlights can erase subtle curvature, while a wide field of view distorts proportions. Mobile aspect ratios require recalculating composition rather than merely resizing the canvas."],["Medical application","The same anatomy may need neutral planning light, high-contrast teaching light or a polished communication view. Presets make those intentions explicit."],["Next experiment","The next study will replace procedural geometry with a glTF asset and document loading, naming and material normalization."]],
      [["문제","기술적으로 정확한 모델도 카메라 거리, 빛의 방향, 재질 반응이 해부 구조와 경쟁하면 읽기 어려워집니다."],["결과","하나의 모델을 임상·교육·쇼케이스 목적의 세 가지 절제된 프리셋으로 보여줍니다. 지오메트리는 바꾸지 않고 형태를 인식하게 만드는 조건만 변경합니다."],["핵심 개념","Three.js는 scene, camera, light, geometry, material을 분리합니다. 이들을 하나의 시스템으로 다루면 결과를 예측하고 유지하기 쉬워집니다."],["구현","PerspectiveCamera, 두 방향의 조명 논리, 물리 기반 재질 값과 이름이 지정된 group을 사용합니다. 프리셋은 장면을 다시 만들지 않고 매개변수만 갱신합니다."],["어려웠던 점","과도한 하이라이트는 미세한 굴곡을 지우고 넓은 화각은 비례를 왜곡합니다. 모바일에서는 캔버스 크기뿐 아니라 구도를 다시 계산해야 합니다."],["의료·과학 활용","같은 해부 구조도 수술계획에는 중립적인 빛, 교육에는 강한 대비, 홍보에는 완성도 높은 표현이 필요합니다. 프리셋은 그 의도를 명확히 합니다."],["다음 실험","절차적 도형을 glTF 에셋으로 바꾸고 로딩, 명명 규칙, 재질 정규화를 기록합니다."]]
    ),
  },
  {
    no:"03", slug:"gltf-medical-asset-pipeline", track:"ASSET PIPELINE · GLTF", journey:"L21 Imported Models · L23 Blender · L59 R3F Load Models",
    title:{en:"A glTF Pipeline for Medical Web3D",ko:"의료 Web3D를 위한 glTF 파이프라인"},
    summary:{en:"Turn Blender anatomy assets into predictable browser-ready components.",ko:"Blender 해부 모델을 예측 가능한 브라우저용 컴포넌트로 전환합니다."},
    demo:{en:"Load a multi-mesh organ, inspect names, normalize scale and report loading state.",ko:"다중 메시 장기 모델 로딩, 이름 검사, 크기 정규화, 로딩 상태 표시."},
    proof:{en:"Blender export · glTF hierarchy · async loading · error states",ko:"Blender 내보내기 · glTF 계층 · 비동기 로딩 · 오류 상태"},
    sections:section(
      [["Problem","Medical models often arrive with inconsistent scale, anonymous meshes, shared materials and unnecessary data that make viewer code fragile."],["Result","A small loader validates the asset, lists selectable structures and places the model in a stable coordinate and scale convention."],["Core concept","glTF is not only a file format; its node hierarchy, names, materials and transforms become an interface between the DCC pipeline and the application."],["Implementation","The export checklist fixes units, applies transforms, uses semantic mesh names and removes hidden data. The React loader exposes loading, success and failure states."],["Difficulties","Applying transforms can change pivots, and material sharing can cause accidental cross-object edits. A model that looks light in Blender may still be expensive after textures are decoded on the GPU."],["Medical application","Semantic names allow UI controls to target vessels, lesions or devices without hard-coded mesh indices."],["Next experiment","Measure geometry, texture and GPU costs before and after controlled optimization."]],
      [["문제","의료 모델은 단위, 익명 메시, 공유 재질, 불필요 데이터가 제각각인 경우가 많아 뷰어 코드를 불안정하게 만듭니다."],["결과","작은 로더가 에셋을 검증하고 선택 가능한 구조를 표시하며 일관된 좌표와 크기 규칙으로 배치합니다."],["핵심 개념","glTF는 단순 파일 포맷이 아닙니다. 노드 계층, 이름, 재질과 변환이 DCC 파이프라인과 애플리케이션 사이의 인터페이스가 됩니다."],["구현","단위 고정, transform 적용, 의미 있는 mesh 이름, 숨은 데이터 제거를 내보내기 체크리스트로 만듭니다. React 로더는 로딩·성공·실패 상태를 분리합니다."],["어려웠던 점","transform 적용은 pivot을 바꿀 수 있고 공유 재질은 다른 객체까지 의도치 않게 바꿉니다. Blender에서 가벼워 보이는 모델도 GPU에서 텍스처가 풀리면 무거울 수 있습니다."],["의료·과학 활용","의미 있는 이름을 사용하면 메시 인덱스를 하드코딩하지 않고 혈관, 병변, 기기를 UI에서 제어할 수 있습니다."],["다음 실험","최적화 전후의 지오메트리·텍스처·GPU 비용을 측정합니다."]]
    ),
  },
  {
    no:"04", slug:"transparent-anatomy-depth", track:"MATERIALS · DEPTH", journey:"L11 Materials · L25 Realistic Render · L31 Modified Materials",
    title:{en:"Transparency, depthWrite and renderOrder",ko:"투명 해부 구조의 depthWrite와 renderOrder"},
    summary:{en:"Explain why layered anatomy breaks and compare controlled remedies.",ko:"중첩 해부 구조가 깨지는 이유와 제어 방법을 비교합니다."},
    demo:{en:"Four identical layered models comparing opacity, depthWrite and renderOrder.",ko:"opacity, depthWrite, renderOrder 조합을 비교하는 네 개의 동일 모델."},
    proof:{en:"Transparent queue · depth buffer · sorting · reproducible comparison",ko:"투명 렌더 큐 · 깊이 버퍼 · 정렬 · 재현 가능한 비교"},
    sections:section(
      [["Problem","Lowering opacity does not guarantee a correct layered anatomy view. Surfaces may disappear, draw through one another or change appearance as the camera moves."],["Result","A four-way comparison isolates the effects of transparency, depth writing and explicit render order instead of hiding the problem inside one polished scene."],["Core concept","Opaque objects usually write to the depth buffer. Transparent objects are sorted and blended, but object-level sorting cannot perfectly resolve intersecting surfaces."],["Implementation","The same nested geometry is rendered with controlled combinations: default transparency, depthWrite disabled, explicit renderOrder and a two-pass emphasis treatment."],["Difficulties","renderOrder can fix one viewpoint and fail at another. Disabling depthWrite improves visibility but may reveal surfaces that should remain occluded."],["Medical application","Layered skin, organ, vessel and lesion views require a declared hierarchy. Visual correctness should be evaluated from clinically relevant viewpoints, not only a hero camera."],["Next experiment","Replace global transparency with clipping and compare task clarity and rendering stability."]],
      [["문제","opacity를 낮춘다고 중첩 해부 구조가 올바르게 보이는 것은 아닙니다. 표면이 사라지거나 서로 뚫고 보이고 카메라가 움직일 때 결과가 달라질 수 있습니다."],["결과","완성 장면 하나로 문제를 감추지 않고 transparency, depthWrite, 명시적 renderOrder의 영향을 네 가지 조건으로 분리해 비교합니다."],["핵심 개념","불투명 객체는 보통 depth buffer에 기록합니다. 투명 객체는 정렬 후 혼합되지만 객체 단위 정렬만으로 교차하는 표면을 완벽히 해결할 수는 없습니다."],["구현","동일한 중첩 지오메트리에 기본 투명도, depthWrite 비활성화, renderOrder 지정, 두 단계 강조 표현을 각각 적용합니다."],["어려웠던 점","renderOrder는 한 시점을 고치고 다른 시점을 망가뜨릴 수 있습니다. depthWrite를 끄면 구조가 잘 보이지만 가려져야 할 면까지 나타날 수 있습니다."],["의료·과학 활용","피부·장기·혈관·병변을 겹쳐 보여주려면 시각적 위계를 먼저 선언해야 합니다. 대표 이미지 시점뿐 아니라 실제 판독 시점에서 평가해야 합니다."],["다음 실험","전체 투명도를 clipping으로 대체하고 과제 명확성과 렌더링 안정성을 비교합니다."]]
    ),
  },
  {
    no:"05", slug:"guided-camera-tour", track:"CAMERA · GSAP", journey:"L05 Animations · L06 Cameras · L19 Scroll Based Animation",
    title:{en:"Guided Camera Transitions Without Losing Orientation",ko:"방향을 잃지 않는 안내형 카메라 전환"},
    summary:{en:"Connect explanatory steps to stable camera targets with GSAP.",ko:"설명 단계와 안정적인 카메라 목표 지점을 GSAP으로 연결합니다."},
    demo:{en:"Three anatomical landmarks, eased transitions, interrupt and reset behavior.",ko:"세 개의 해부학 랜드마크, easing 전환, 중단과 초기화 동작."},
    proof:{en:"Camera vectors · targets · timelines · scroll orchestration",ko:"카메라 벡터 · 주시점 · 타임라인 · 스크롤 오케스트레이션"},
    sections:section(
      [["Problem","A camera that jumps to a target saves time but can destroy the viewer's mental map of the anatomy."],["Result","Three narrative steps move position and target together, keep durations consistent and provide an immediate return to the overview."],["Core concept","A useful camera state includes both position and look target. Interpolating only position may create unwanted arcs or sudden rotations."],["Implementation","Named viewpoints store position, target and framing metadata. A GSAP timeline updates vectors while the render loop calls lookAt."],["Difficulties","User orbit input can conflict with scripted motion. The system must define when guidance owns the camera and how control returns to the user."],["Medical application","Guided views can lead a learner from overview to lesion to nearby vessel without requiring expert 3D navigation."],["Next experiment","Attach readable HTML labels to the same landmarks and test occlusion handling."]],
      [["문제","목표 지점으로 즉시 점프하는 카메라는 빠르지만 사용자가 해부학적 위치 관계를 잃게 만들 수 있습니다."],["결과","세 개의 설명 단계가 카메라 위치와 주시점을 함께 이동시키고 일관된 시간을 사용하며 전체 시점으로 즉시 돌아갈 수 있게 합니다."],["핵심 개념","유용한 카메라 상태에는 position뿐 아니라 look target도 포함됩니다. 위치만 보간하면 원치 않는 회전이나 곡선 이동이 생길 수 있습니다."],["구현","이름이 지정된 viewpoint에 position, target, framing 메타데이터를 저장합니다. GSAP timeline이 벡터를 갱신하고 렌더 루프에서 lookAt을 적용합니다."],["어려웠던 점","사용자의 orbit 입력과 스크립트 이동이 충돌할 수 있습니다. 언제 안내 기능이 카메라를 소유하고 언제 사용자에게 제어를 돌려줄지 정해야 합니다."],["의료·과학 활용","안내형 시점은 3D 조작에 익숙하지 않은 사용자도 전체 장기에서 병변, 인접 혈관 순으로 따라가게 할 수 있습니다."],["다음 실험","같은 랜드마크에 읽기 쉬운 HTML 라벨을 연결하고 가림 처리를 시험합니다."]]
    ),
  },
  {
    no:"06", slug:"spatial-labels-html-webgl", track:"UI · ACCESSIBILITY", journey:"L48 Mixing HTML and WebGL · L60 R3F 3D Text",
    title:{en:"Spatial Labels That Remain Readable",ko:"끝까지 읽히는 3D 공간 라벨"},
    summary:{en:"Compare in-scene text with accessible HTML annotations.",ko:"장면 내부 텍스트와 접근 가능한 HTML 주석을 비교합니다."},
    demo:{en:"Occlusion-aware labels with leader lines, focus and mobile stacking.",ko:"가림 인식 라벨, 연결선, 포커스와 모바일 스태킹."},
    proof:{en:"Projection · occlusion · DOM/WebGL coordination · keyboard access",ko:"투영 · 가림 · DOM/WebGL 연동 · 키보드 접근"},
    sections:section(
      [["Problem","Labels anchored in 3D can shrink, overlap or become unreadable, while ordinary HTML labels may detach from the structure they describe."],["Result","The demo projects 3D landmarks into screen space, hides occluded labels and moves dense mobile labels into a coordinated list."],["Core concept","Projection converts a world-space point into normalized device coordinates and then screen coordinates. Visibility still requires a depth or ray test."],["Implementation","Each landmark has a semantic ID, 3D anchor and HTML content. The render loop updates screen positions; keyboard focus selects the corresponding mesh."],["Difficulties","Continuous DOM writes can reduce performance. Label collision avoidance also becomes a layout problem separate from 3D rendering."],["Medical application","Readable labels are essential when anatomy must be named precisely and when the experience should remain usable without a mouse."],["Next experiment","Reveal internal structures with clipping while keeping labels synchronized."]],
      [["문제","3D 공간에 고정된 라벨은 작아지거나 겹치고 읽히지 않을 수 있습니다. 반대로 일반 HTML 라벨은 설명하는 구조에서 떨어져 보일 수 있습니다."],["결과","3D 랜드마크를 화면 좌표로 투영하고 가려진 라벨은 숨기며 모바일에서는 밀집된 라벨을 연동 목록으로 전환합니다."],["핵심 개념","projection은 월드 좌표를 정규화 장치 좌표와 화면 좌표로 바꿉니다. 실제 가시성 판단에는 depth 또는 ray 검사가 추가로 필요합니다."],["구현","각 랜드마크에 의미 있는 ID, 3D anchor와 HTML 콘텐츠를 둡니다. 렌더 루프가 화면 위치를 갱신하고 키보드 포커스가 해당 mesh를 선택합니다."],["어려웠던 점","지속적인 DOM 갱신은 성능을 낮출 수 있습니다. 라벨 충돌 회피는 3D 렌더링과 별개의 레이아웃 문제가 됩니다."],["의료·과학 활용","정확한 해부 구조 명칭이 필요하고 마우스 없이도 사용할 수 있어야 하는 콘텐츠에서 읽기 쉬운 라벨은 필수입니다."],["다음 실험","라벨 동기화를 유지하면서 clipping으로 내부 구조를 드러냅니다."]]
    ),
  },
  {
    no:"07", slug:"clipping-anatomy", track:"CLIPPING · INTERNAL VIEW", journey:"L27 Shaders · L31 Modified Materials · L43 Sliced Model",
    title:{en:"Revealing Anatomy with Clipping Planes",ko:"클리핑 플레인으로 내부 해부 구조 보여주기"},
    summary:{en:"Reveal internal structures without swapping or destroying geometry.",ko:"모델을 교체하거나 훼손하지 않고 내부 구조를 보여줍니다."},
    demo:{en:"One draggable clipping plane, cap treatment and resettable presets.",ko:"드래그 가능한 클리핑 플레인, 절단면 표현과 초기화 프리셋."},
    proof:{en:"Local clipping · material settings · interaction constraints",ko:"로컬 클리핑 · 재질 설정 · 인터랙션 제약"},
    sections:section(
      [["Problem","Global transparency reveals everything at once and often makes an internal target harder to distinguish."],["Result","A constrained plane reveals a controlled cross-section while preserving the opaque exterior elsewhere."],["Core concept","A clipping plane evaluates which side of a plane each fragment occupies. Local clipping allows the rule to differ by material."],["Implementation","The viewer enables localClipping, assigns the plane to selected materials and provides axis presets plus a bounded drag control."],["Difficulties","Open meshes expose hollow interiors and cap rendering requires an additional pass. Arbitrary plane motion can also produce clinically meaningless views."],["Medical application","Clipping can explain embedded lesions, device placement or layered anatomy with less visual clutter than full transparency."],["Next experiment","Profile the viewer with a large multi-structure glTF model and define a performance budget."]],
      [["문제","전체 투명도는 모든 구조를 한꺼번에 드러내 오히려 내부 목표를 구분하기 어렵게 만들 수 있습니다."],["결과","제한된 평면이 필요한 단면만 보여주고 나머지 외부 표면은 불투명하게 유지합니다."],["핵심 개념","clipping plane은 각 fragment가 평면의 어느 쪽에 있는지 판단합니다. local clipping을 사용하면 material마다 다른 규칙을 적용할 수 있습니다."],["구현","renderer의 localClipping을 활성화하고 선택한 material에 plane을 배정하며 축 프리셋과 범위가 제한된 drag 조작을 제공합니다."],["어려웠던 점","열린 mesh는 속이 빈 단면을 드러내고 절단면 채움에는 추가 pass가 필요합니다. 자유로운 평면 이동은 임상적으로 의미 없는 시점을 만들 수 있습니다."],["의료·과학 활용","클리핑은 전체 투명도보다 적은 혼란으로 내부 병변, 기기 위치, 중첩 해부 구조를 설명할 수 있습니다."],["다음 실험","대용량 다중 구조 glTF 모델로 뷰어를 프로파일링하고 성능 예산을 정의합니다."]]
    ),
  },
  {
    no:"08", slug:"large-model-performance", track:"PERFORMANCE · PROFILING", journey:"L46 Performance Tips · L47 Loading Progress · L51 Importing and Optimizing",
    title:{en:"A Performance Budget for Large 3D Models",ko:"대용량 3D 모델을 위한 성능 예산"},
    summary:{en:"Measure FPS, memory and loading before choosing an optimization.",ko:"최적화 기법을 고르기 전에 FPS·메모리·로딩을 측정합니다."},
    demo:{en:"Baseline and optimized assets with an on-screen metrics report.",ko:"기준 모델과 최적화 모델을 화면 성능 지표로 비교."},
    proof:{en:"Profiling · draw calls · geometry · texture memory · loading UX",ko:"프로파일링 · 드로우콜 · 지오메트리 · 텍스처 메모리 · 로딩 UX"},
    sections:section(
      [["Problem","Optimization claims are weak when they do not identify the actual bottleneck or record the cost of visual change."],["Result","The demo compares a baseline and one optimized asset using loading time, draw calls, triangles, frame time and approximate texture memory."],["Core concept","CPU, GPU, network and memory limits produce different symptoms. A stable test scene and device class are required before comparing changes."],["Implementation","The viewer records renderer.info, resource timing and a fixed camera route. One variable is changed per comparison."],["Difficulties","Average FPS can hide stutter and warm caches distort load tests. Mobile thermal throttling makes short desktop tests misleading."],["Medical application","Patient-specific models often contain many thin branches. Performance work must preserve clinically meaningful geometry rather than maximize polygon reduction."],["Next experiment","Move the optimized scene into a reusable R3F component architecture."]],
      [["문제","실제 병목을 밝히지 않고 시각적 변화의 비용을 기록하지 않은 최적화 주장은 설득력이 약합니다."],["결과","기준 에셋과 최적화 에셋을 로딩 시간, draw call, triangle, frame time, 대략적인 texture memory로 비교합니다."],["핵심 개념","CPU, GPU, 네트워크, 메모리 한계는 서로 다른 증상을 만듭니다. 변경 전 고정된 테스트 장면과 기기 등급을 정해야 합니다."],["구현","renderer.info, Resource Timing과 고정 카메라 경로를 기록합니다. 비교할 때는 한 번에 하나의 변수만 바꿉니다."],["어려웠던 점","평균 FPS는 순간 끊김을 숨길 수 있고 캐시는 로딩 테스트를 왜곡합니다. 모바일 열 제한 때문에 짧은 데스크톱 테스트만으로 판단할 수 없습니다."],["의료·과학 활용","환자 맞춤형 모델에는 가는 분지가 많습니다. 임상적으로 의미 있는 지오메트리를 보존하면서 성능을 개선해야 합니다."],["다음 실험","최적화된 장면을 재사용 가능한 R3F 컴포넌트 구조로 옮깁니다."]]
    ),
  },
  {
    no:"09", slug:"r3f-viewer-architecture", track:"REACT · TYPESCRIPT", journey:"L53–L59 React Three Fiber · L26 Code Structuring",
    title:{en:"Structuring a Medical Viewer with R3F",ko:"R3F로 의료 3D 뷰어 구조화하기"},
    summary:{en:"Separate scene state, domain data and UI without hiding Three.js.",ko:"Three.js를 가리지 않으면서 장면 상태·도메인 데이터·UI를 분리합니다."},
    demo:{en:"Typed structure registry, viewer state and reusable visibility controls.",ko:"타입이 지정된 구조 registry, 뷰어 상태와 재사용 가능한 표시 제어."},
    proof:{en:"React architecture · TypeScript · state boundaries · cleanup",ko:"React 아키텍처 · TypeScript · 상태 경계 · 정리 로직"},
    sections:section(
      [["Problem","A 3D prototype becomes difficult to extend when model traversal, UI state, rendering mutations and domain labels live in one component."],["Result","The viewer separates asset loading, structure registry, interaction state, scene presentation and accessible controls."],["Core concept","R3F expresses Three.js objects through React, but frequently changing render values still belong in refs and the frame loop rather than React state."],["Implementation","Typed structure metadata drives both mesh behavior and HTML controls. Effects clone disposable resources and clean them up on unmount."],["Difficulties","Too much state causes rerenders; too many imperative refs obscure data flow. The boundary is chosen according to update frequency and ownership."],["Medical application","A domain registry can attach names, colors, categories and visibility rules to anatomical structures without coupling them to UI markup."],["Next experiment","Add a small GLSL focus treatment while retaining a plain-material fallback."]],
      [["문제","모델 순회, UI 상태, 렌더링 변경, 도메인 라벨이 한 컴포넌트에 있으면 3D 프로토타입을 확장하기 어려워집니다."],["결과","에셋 로딩, 구조 registry, 인터랙션 상태, 장면 표현, 접근 가능한 컨트롤을 분리합니다."],["핵심 개념","R3F는 Three.js 객체를 React 방식으로 표현하지만 매 프레임 자주 바뀌는 값은 React state보다 ref와 frame loop에 두는 편이 적절합니다."],["구현","타입이 지정된 구조 메타데이터가 mesh 동작과 HTML 컨트롤을 함께 구동합니다. effect에서 복제한 리소스는 unmount 시 정리합니다."],["어려웠던 점","상태가 너무 많으면 rerender가 늘고 imperative ref가 너무 많으면 데이터 흐름이 불명확해집니다. 갱신 빈도와 소유권을 기준으로 경계를 정합니다."],["의료·과학 활용","도메인 registry는 UI 마크업과 결합하지 않고 해부 구조 이름, 색상, 범주와 표시 규칙을 연결할 수 있습니다."],["다음 실험","일반 material fallback을 유지하면서 작은 GLSL 초점 효과를 추가합니다."]]
    ),
  },
  {
    no:"10", slug:"glsl-focus-context", track:"GLSL · MATERIAL", journey:"L27 Shaders · L31 Modified Materials · L45 Post-processing",
    title:{en:"A Small GLSL Focus+Context Treatment",ko:"작은 GLSL Focus+Context 표현 실험"},
    summary:{en:"Use a controlled shader change to separate target and context.",ko:"제한된 셰이더 변경으로 목표 구조와 주변 맥락을 구분합니다."},
    demo:{en:"Target color preservation, context desaturation and fallback materials.",ko:"목표 색상 유지, 주변 채도 저하와 fallback material."},
    proof:{en:"Vertex/fragment flow · uniforms · shader injection · fallback",ko:"버텍스/프래그먼트 흐름 · uniform · 셰이더 주입 · 대체 표현"},
    sections:section(
      [["Problem","Geometry removal creates focus but destroys context; global opacity can create unstable layering."],["Result","A target keeps its encoded color while contextual structures move toward a restrained neutral treatment."],["Core concept","A fragment shader determines final pixel appearance. Uniforms allow focus state to change without rebuilding geometry or recompiling every frame."],["Implementation","A small material modification blends base color toward a neutral value. The same state also drives a standard-material fallback."],["Difficulties","Material customization must survive library updates and preserve lighting, tone mapping and color-space behavior."],["Medical application","Focus+Context can support sequential explanation while retaining spatial relationships between a target and surrounding anatomy."],["Next experiment","Connect the viewer to a mock REST API and handle loading, validation and stale responses."]],
      [["문제","지오메트리를 숨기면 초점은 생기지만 맥락이 사라지고 전체 opacity 조절은 중첩 표현을 불안정하게 만들 수 있습니다."],["결과","목표 구조는 의미 있는 색을 유지하고 주변 구조는 절제된 중립 표현으로 전환됩니다."],["핵심 개념","fragment shader는 최종 픽셀 표현을 결정합니다. uniform을 사용하면 지오메트리를 다시 만들거나 매 프레임 컴파일하지 않고 초점 상태를 바꿀 수 있습니다."],["구현","작은 material 수정으로 base color를 중립색과 혼합합니다. 같은 상태가 일반 material 기반 fallback도 구동합니다."],["어려웠던 점","material 커스터마이징은 라이브러리 업데이트 이후에도 동작해야 하고 조명, tone mapping, color space 동작을 보존해야 합니다."],["의료·과학 활용","Focus+Context는 목표와 주변 해부 구조의 위치 관계를 남기면서 단계별 설명을 지원할 수 있습니다."],["다음 실험","뷰어를 mock REST API에 연결하고 로딩, 검증, 오래된 응답 처리를 구현합니다."]]
    ),
  },
  {
    no:"11", slug:"viewer-data-api", track:"DATA · REST API", journey:"L26 Code Structuring · L47 Loading Progress · R3F loading patterns",
    title:{en:"Connecting 3D Structures to API Data",ko:"3D 구조와 API 데이터 연결하기"},
    summary:{en:"Treat model IDs and backend metadata as a validated contract.",ko:"모델 ID와 백엔드 메타데이터를 검증 가능한 계약으로 다룹니다."},
    demo:{en:"Mock case endpoint, schema validation, cancellation and retry states.",ko:"mock case endpoint, 스키마 검증, 요청 취소와 재시도 상태."},
    proof:{en:"REST · async TypeScript · validation · error UX",ko:"REST · 비동기 TypeScript · 검증 · 오류 UX"},
    sections:section(
      [["Problem","A viewer may render correctly but show the wrong label or value when backend IDs and mesh names drift apart."],["Result","The demo validates a mock response, resolves structure IDs through one registry and makes missing or mismatched data visible."],["Core concept","The boundary between an API and a 3D scene is a data contract. TypeScript types help developers, while runtime validation protects actual users."],["Implementation","An abortable request passes through schema validation before updating viewer state. Loading, empty, partial and error states have distinct UI."],["Difficulties","Rapid case switching can allow an old response to overwrite a new one. Asset and metadata loading may also complete in different orders."],["Medical application","Reliable identity mapping is essential when measurements, segment names and visibility controls originate outside the viewer."],["Next experiment","Write automated tests for interaction, loading failure and screenshot-stable states."]],
      [["문제","뷰어가 정상적으로 렌더링되어도 백엔드 ID와 mesh 이름이 어긋나면 잘못된 라벨이나 값을 보여줄 수 있습니다."],["결과","mock 응답을 검증하고 하나의 registry로 구조 ID를 해석하며 누락 또는 불일치 데이터를 명확히 표시합니다."],["핵심 개념","API와 3D 장면 사이의 경계는 데이터 계약입니다. TypeScript type은 개발자를 돕고 runtime validation은 실제 사용자를 보호합니다."],["구현","취소 가능한 요청이 schema validation을 통과한 뒤 뷰어 상태를 갱신합니다. 로딩, 빈 데이터, 부분 데이터, 오류 상태를 서로 다르게 보여줍니다."],["어려웠던 점","빠르게 case를 전환하면 이전 응답이 새 상태를 덮어쓸 수 있습니다. 에셋과 메타데이터의 완료 순서도 달라질 수 있습니다."],["의료·과학 활용","측정값, segment 이름, 표시 제어가 외부에서 올 때 신뢰할 수 있는 identity mapping이 필수입니다."],["다음 실험","인터랙션, 로딩 실패, 안정된 스크린샷 상태를 자동화 테스트로 작성합니다."]]
    ),
  },
  {
    no:"12", slug:"testing-3d-viewer", track:"TESTING · DELIVERY", journey:"L13 Go Live · L46 Performance · production workflow extension",
    title:{en:"Testing and Shipping a 3D Viewer",ko:"3D 뷰어 테스트하고 배포하기"},
    summary:{en:"Turn a visual prototype into a reviewable engineering portfolio piece.",ko:"시각 프로토타입을 검토 가능한 엔지니어링 포트폴리오로 완성합니다."},
    demo:{en:"Storybook states, Playwright interactions and a deployment checklist.",ko:"Storybook 상태, Playwright 인터랙션과 배포 체크리스트."},
    proof:{en:"Jest · Playwright · Storybook · ESLint · documentation",ko:"Jest · Playwright · Storybook · ESLint · 문서화"},
    sections:section(
      [["Problem","A 3D viewer can look finished while basic behavior breaks on a narrow screen, slow network or unsupported GPU."],["Result","The final project defines component states, interaction tests, visual checkpoints and a concise technical README."],["Core concept","Automated tests should verify deterministic contracts around the canvas rather than pretending every rendered pixel is stable across GPUs."],["Implementation","Unit tests cover data mapping, Playwright checks selection and reset, and Storybook exposes loading, empty, error and populated states."],["Difficulties","WebGL screenshots vary by device and asynchronous assets complicate timing. Tests require explicit ready signals and controlled fixtures."],["Medical application","A documented validation boundary helps distinguish a portfolio prototype from software intended for clinical decision-making."],["Next experiment","Package the strongest three demos as one Anatomage-focused case study with architecture, metrics and lessons learned."]],
      [["문제","3D 뷰어가 완성되어 보여도 좁은 화면, 느린 네트워크, 지원이 약한 GPU에서 기본 동작이 깨질 수 있습니다."],["결과","최종 프로젝트에 컴포넌트 상태, 인터랙션 테스트, 시각적 확인 지점과 간결한 기술 README를 정의합니다."],["핵심 개념","GPU마다 달라질 수 있는 모든 픽셀을 동일하다고 가정하기보다 캔버스 주변의 결정 가능한 동작 계약을 자동화 테스트로 검증합니다."],["구현","unit test는 데이터 매핑을 확인하고 Playwright는 선택과 초기화를 검사하며 Storybook은 loading, empty, error, populated 상태를 보여줍니다."],["어려웠던 점","WebGL screenshot은 기기마다 달라지고 비동기 에셋은 테스트 타이밍을 복잡하게 합니다. 명시적인 ready signal과 통제된 fixture가 필요합니다."],["의료·과학 활용","검증 범위를 문서화하면 포트폴리오 프로토타입과 임상 의사결정용 소프트웨어를 명확히 구분할 수 있습니다."],["다음 실험","가장 강한 세 개의 데모를 아키텍처, 성능 지표, 시행착오가 포함된 하나의 Anatomage 지원용 case study로 묶습니다."]]
    ),
  },
];
