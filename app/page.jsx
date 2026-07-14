import Link from "next/link";
import logo from "./assets/logo";
import maxDesk from "./assets/maxDesk";

const instagram = "https://www.instagram.com/max_aulbach/";
const linkedin = "https://www.linkedin.com/in/max-aulbach-000859348/";
const whatsapp = "https://wa.me/491716327501";

function Logo() {
  return <img className="brand-logo" src={logo} alt="Max Aulbach Sales Group" />;
}

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${maxDesk})` }} aria-hidden="true" />
        <div className="hero-shade" />
        <header className="topbar topbar-light"><Logo /><span>MA Sales Group</span></header>
        <div className="hero-copy">
          <p className="eyebrow light">Max Aulbach · Sales Group</p>
          <h1>Dein nächster Schritt<br />beginnt heute.</h1>
          <p>Zwei Möglichkeiten. Ein Ziel: Mehr aus deiner Zukunft machen.</p>
          <a className="scroll-link" href="#auswahl">Möglichkeiten entdecken <span>↓</span></a>
        </div>
      </section>

      <section id="auswahl" className="choice-section">
        <div className="section-intro">
          <p className="eyebrow">Deine Möglichkeiten</p>
          <h2>Wofür interessierst du dich?</h2>
        </div>
        <div className="choice-grid">
          <Link className="choice-card" href="/vertrieb">
            <span className="choice-number">01</span><span className="choice-tag">Karriere</span>
            <h3>Werde Vertriebspartner</h3>
            <p>Baue dir gemeinsam mit uns ein eigenes Vertriebsbusiness auf und profitiere von einer starken Struktur sowie attraktiven Verdienstmöglichkeiten.</p>
            <span className="text-link">Jetzt als Vertriebspartner starten <b>→</b></span>
          </Link>
          <Link className="choice-card dark-card" href="/energiecheck">
            <span className="choice-number">02</span><span className="choice-tag">Strom &amp; Gas</span>
            <h3>Kostenloses Sparpotenzial prüfen</h3>
            <p>Lass deinen aktuellen Strom- oder Gastarif unverbindlich analysieren und finde heraus, wie viel du sparen kannst.</p>
            <span className="text-link">Jetzt Energiecheck starten <b>→</b></span>
          </Link>
        </div>
      </section>

      <section className="connected">
        <p className="eyebrow">Bleib verbunden</p><h2>Folge Max Aulbach</h2>
        <div className="socials">
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href={instagram} target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Footer() {
  return <footer><Logo /><p>© 2026 Max Aulbach · Sales Group</p><nav><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></nav></footer>;
}

export { Logo, Footer, instagram, linkedin, whatsapp };
