import Link from "next/link";
import { Footer, Logo } from "../page";
import frankfurtOffice from "../assets/frankfurtOffice";

const check = "https://wa.me/491716327501?text=Hallo%20Max%2C%20ich%20m%C3%B6chte%20meinen%20kostenlosen%20Energiecheck%20machen.";

export default function Energiecheck() {
 return <main>
  <header className="topbar pagebar"><Link href="/"><Logo /></Link><nav><a href="#vorteile">Vorteile</a><a href="#ablauf">Ablauf</a><a className="nav-cta" href={check}>Energiecheck</a></nav></header>
  <section className="energy-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.35)), url(${frankfurtOffice})` }}><div><p className="eyebrow light">Kostenlos &amp; unverbindlich</p><h1>Zahlst du zu viel<br />für Strom und Gas?</h1><p>Wir prüfen deinen aktuellen Tarif persönlich und zeigen dir transparent, ob und wie viel Sparpotenzial möglich ist.</p><a className="button light-button" href={check}>Kostenlos prüfen lassen →</a></div></section>
  <section className="energy-lead"><p className="eyebrow">Einfach sparen</p><h2>Eine Abrechnung.<br />Ein kurzer Check. Klare Ergebnisse.</h2><p>Schick uns deine letzte Strom- oder Gasabrechnung. Wir übernehmen die Analyse und melden uns mit einer verständlichen Einschätzung bei dir zurück.</p></section>
  <section id="vorteile" className="benefits"><article><span>01</span><h3>100 % kostenlos</h3><p>Die Prüfung kostet dich nichts und verpflichtet dich zu keinem Wechsel.</p></article><article><span>02</span><h3>Persönlich geprüft</h3><p>Keine unübersichtliche Vergleichsmaske – du erhältst eine nachvollziehbare Einschätzung.</p></article><article><span>03</span><h3>Komplett begleitet</h3><p>Wenn ein Wechsel sinnvoll ist, begleiten wir dich durch den gesamten Ablauf.</p></article></section>
  <section id="ablauf" className="check-panel"><div><p className="eyebrow light">In wenigen Minuten</p><h2>So funktioniert der Energiecheck.</h2><ol><li><b>1</b>Abrechnung per WhatsApp senden</li><li><b>2</b>Tarif kostenlos analysieren lassen</li><li><b>3</b>Persönliche Auswertung erhalten</li></ol></div><aside><p>Du brauchst lediglich ein Foto oder PDF deiner letzten Strom- oder Gasabrechnung.</p><a className="button" href={check}>Abrechnung jetzt senden →</a><small>Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.</small></aside></section>
  <section className="final-cta"><p className="eyebrow">Jetzt prüfen</p><h2>Finde heraus, ob du jeden Monat Geld liegen lässt.</h2><a className="button" href={check}>Kostenlosen Energiecheck starten →</a></section><Footer />
 </main>
}
