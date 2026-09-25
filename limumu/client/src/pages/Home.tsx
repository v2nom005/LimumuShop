import { useEffect } from "react";

const serverLink = "https://discord.gg/JyKJNzfUZ3";
const developerLink = "https://discord.gg/TeVdHYybvb";

// 상품 설명은 이 배열의 문장만 직접 수정하면 사이트에 반영됩니다.
const productDescriptions = [
  { text: "셀프봇, 디스코드 사용자 계정으로 여러 기능, 명령어를 자동화 시켜 사용하는 것입니다.(각종 명령어랑 기능들은 티켓 열고 말하시면 알려드리겠습니다)", price: "프리미엄 2.0 · 고급 1.0 ~ 1.5" },
  { text: "호스팅, 자신의 컴퓨터가 아닌 외부에서 웹사이트 또는 여러 봇을 켜두는 것입니다 (말 그대로 봇을 365일 24시간 내내 돌아가게해주는것입니다) .", price: "2.0 /모바일은 디스코드를 직접 들어가서 해야하기에 2000원에 추가 비용이 있습니다(셀프봇만)" },
  { text: "디스코드 근성봇, 디코 공식 봇을 이용한 근성봇 입니다 도배, 각종 미니게임 등등 모두있어 놀거나 근성하기에 좋습니다 사셔도 부담없이 살수있습니다 무조건 보장합니다 ", price: "1.5" },
  { text: "토큰 근성봇, 토큰근성이란 사용자 토큰을 이용해 각종 자동화를 이용한 도배, 미니게임 등등 원격 조종 할수있는 것 (각종 명령어랑 기능들은 티켓 열고 말하시면 알려드리겠습니다).", price: "1.0" },
  { text: "용병권, 근성이나 힘이 쎈 상대를 못이길때 도와주는 일종에 보조 수단입니다.", price: "2,000원" },
  { text: "서버 복사, 말 그대로 서버 채널 , 역할 권한 등 다 그대로 똑같이 복사해서 옮겨드립니다.", price: "0.3" },
  { text: "말 그대로 서버에 괄자가 있다면 초대해서 테러할수있습니다 기능 보고싶으면 디엠주세요 .", price: "문의" },
  { text: "서버에 관리자가 있을 시 사용 가능한 테러봇입니다..", price: "문의" },
];

const otherDescriptions = [
  { label: "SERVER NOTE", title: "리무무 허즈 종합샵", text: "필요한 상품과 서비스를 한 곳에서 확인하고, 디스코드 티켓을 통해 상세 안내까지 받을 수 있는 공간입니다." },
  { label: "HOW TO BUY", title: "구매는 티켓에서", text: "원하는 상품의 설명을 확인한 뒤 서버 티켓을 열어 문의해주세요. 담당자의 안내에 따라 순서대로 진행됩니다." },
  { label: "CONTACT", title: "궁금한 점은 문의", text: "상품 내용, 진행 방식, 이용 가능 여부가 궁금하다면 주문 전에 편하게 질문해주세요. 확인 후 자세히 안내해드립니다." },
];

export default function Home() {
  useEffect(() => {
    const blockShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const blocked = event.key === "F12" || (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) || (event.ctrlKey && key === "u");
      if (blocked) { event.preventDefault(); event.stopPropagation(); }
    };
    const blockContextMenu = (event: MouseEvent) => event.preventDefault();
    window.addEventListener("keydown", blockShortcuts, true);
    window.addEventListener("contextmenu", blockContextMenu);
    return () => {
      window.removeEventListener("keydown", blockShortcuts, true);
      window.removeEventListener("contextmenu", blockContextMenu);
    };
  }, []);

  return (
    <main className="minimal-page">
      <div className="minimal-orb minimal-orb--one" />
      <div className="minimal-orb minimal-orb--two" />
      <div className="minimal-grid" />

      <div className="landing-shell">
        <header className="minimal-header">
          <a className="minimal-brand" href="#top"><span>✦</span><strong>리무무 허즈</strong><small>종합샵</small></a>
          <div className="minimal-header-status"><i /> DISCORD SERVER / OPEN</div>
          <a className="minimal-header-link" href={serverLink} target="_blank" rel="noreferrer">서버 입장 ↗</a>
        </header>

        <section className="minimal-hero" id="top">
          <div className="minimal-hero-copy">
            <p className="minimal-label">COMMUNITY SHOP / 2026</p>
            <h1>리무무 허즈 종합샵</h1>
            <div className="minimal-hero-actions">
              <a className="hero-button hero-button--main" href={serverLink} target="_blank" rel="noreferrer">디스코드 서버 입장 <span>↗</span></a>
              <a className="hero-button hero-button--line" href="#products">상품 설명 보기 <span>↓</span></a>
            </div>
            <div className="minimal-hero-meta"><span>● NOW OPEN</span><b>티켓 문의 가능</b><b>상품 설명 08</b></div>
          </div>
          <div className="minimal-hero-card">
            <div className="hero-card-glow" />
            <div className="hero-card-top"><span>LIMUMU / HERS</span><span>01 — 08</span></div>
            <div className="hero-card-mark">LHS</div>
            <p className="hero-card-kicker">COMMUNITY SERVER</p>
            <h2>리무무 허즈<br /><span>종합샵</span></h2>
            <p className="hero-card-copy">빠르고 성능 확실한 서비스를<br />경험하세요.</p>
            <div className="hero-card-stats"><div><strong>24/7</strong><span>OPEN</span></div><div><strong>08</strong><span>INFO</span></div><div><strong>∞</strong><span>VIBES</span></div></div>
            <a href={serverLink} target="_blank" rel="noreferrer">discord.gg/JyKJNzfUZ3 <span>↗</span></a>
          </div>
        </section>

        <section className="minimal-content" id="products">
          <p className="minimal-label">PRODUCT DESCRIPTIONS / 상품 설명</p>
          <div className="description-grid">
            {productDescriptions.map((product, index) => (
              <article className="description-card" key={product.text}>
                <span>0{index + 1}</span><div><p>{product.text}</p><b className="product-price">가격 {product.price}</b></div>
              </article>
            ))}
          </div>

          <section className="other-descriptions">
            <p className="minimal-label">OTHER DESCRIPTIONS / 이용 안내</p>
            <div className="other-description-grid">
              {otherDescriptions.map((item) => (
                <article className="other-description-card" key={item.label}>
                  <span>{item.label}</span><h2>{item.title}</h2><p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="minimal-developer">
            <p className="minimal-label">DEVELOPER DESCRIPTION</p>
            <p className="developer-copy">사이트 제작과 업데이트가 필요하다면 개발자 서버에서 문의해주세요. 페이지 구성과 디자인에 대한 상담도 함께 도와드립니다.</p>
            <a href={developerLink} target="_blank" rel="noreferrer">베놈 (Venom) 개발자 서버 ↗</a>
          </section>
        </section>
      </div>
    </main>
  );
}
