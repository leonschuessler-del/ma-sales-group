import Link from "next/link";
import { Footer, Logo, instagram, linkedin } from "../page";
import maxDesk from "../assets/maxDesk";
import frankfurtOffice from "../assets/frankfurtOffice";
import restaurant from "../assets/restaurant";

const apply = "https://wa.me/491716327501?text=Hallo%20Max%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Karriere%20im%20Vertrieb.";

export default function Vertrieb() {
  return <main>
    <header className="topbar pagebar"><Link href="/"><Logo /></Link><nav><a href="#chance">Die Chance</a><a href="#ablauf">Ablauf</a><a className="nav-cta" href={apply}>Jetzt starten</a></nav></header>
    <section className="sales-hero">
      <div className="sales-copy"><p className="eyebrow">Karriere im Vertrieb</p><h1>Mehr erreichen.<br />Selbst entscheiden.</h1><p>Baue dir mit einer starken Struktur, persönlicher Unterstützung und klaren Prozessen dein eigenes Vertriebsbusiness auf.</p><a className="button" href={apply}>Als Vertriebspartner starten →</a></div>
      <div className="sales-image"><img src={maxDesk} alt="Max Aulbach sitzt am Schreibtisch" /></div>
    </section>
    <section id="chance" className="statement"><p className="eyebrow">Deine Chance</p><h2>Kein leeres Versprechen.<br />Ein klarer Weg.</h2><div className="three-cols"><article><span>01</span><h3>Starke Struktur</h3><p>Du erhältst klare Prozesse und ein Umfeld, das dich bei deinen nächsten Schritten unterstützt.</p></article><article><span>02</span><h3>Persönliche Begleitung</h3><p>Direkter Austausch, ehrliches Feedback und Unterstützung vom Einstieg bis zum Aufbau.</p></article><article><span>03</span><h3>Attraktive Möglichkeiten</h3><p>Dein Einsatz und deine Entwicklung bestimmen, was du aus deiner Karriere machst.</p></article></div></section>
    <section className="split-feature"><img src={frankfurtOffice} alt="Arbeitsplatz mit Blick auf Frankfurt" /><div><p className="eyebrow light">Für Macher</p><h2>Du musst nicht alles können.<br />Du musst anfangen.</h2><p>Wir suchen Menschen, die Verantwortung übernehmen, lernbereit sind und sich langfristig etwas Eigenes aufbauen wollen.</p><a className="button light-button" href={apply}>Unverbindlich kennenlernen →</a></div></section>
    <section id="ablauf" className="process"><p className="eyebrow">So geht es weiter</p><h2>Dein Einstieg in drei Schritten.</h2><ol><li><b>01</b><span><strong>Kontakt aufnehmen</strong>Schreib uns kurz über WhatsApp.</span></li><li><b>02</b><span><strong>Kennenlernen</strong>Wir sprechen über deine Ziele und Möglichkeiten.</span></li><li><b>03</b><span><strong>Gemeinsam starten</strong>Du erhältst Struktur, Wissen und persönliche Begleitung.</span></li></ol></section>
    <section className="desk-cta"><img src={restaurant} alt="Max Aulbach in einem Restaurant" /><div><p className="eyebrow light">Bereit?</p><h2>Dein nächster Schritt beginnt heute.</h2><a className="button light-button" href={apply}>Jetzt Kontakt aufnehmen →</a></div></section>
    <section className="mini-social"><span>Bleib verbunden</span><a href={instagram}>Instagram ↗</a><a href={linkedin}>LinkedIn ↗</a></section><Footer />
  </main>
}
