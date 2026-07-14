import yacht from "../assets/yacht";
import logo from "../assets/logo";
const whatsapp = "https://wa.me/491716327501?text=Energiecheck";

const Check = () => <span className="check" aria-hidden="true">✓</span>;

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="/" aria-label="MA Sales Group Startseite"><img className="energyLogo" src={logo} alt="" /><span>MA SALES GROUP</span></a>
        <nav aria-label="Hauptnavigation">
          <a href="#ablauf">So funktioniert&apos;s</a><a href="#vorteile">Ihre Vorteile</a><a href="#faq">FAQ</a><a href="#kontakt">Kontakt</a>
        </nav>
        <a className="outlineButton" href={whatsapp} target="_blank" rel="noreferrer">◉ Strompreis prüfen</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Kostenloser Energiecheck</p>
          <h1>Zahlen Sie noch<br/><span>zu viel</span> für Strom &amp; Gas?</h1>
          <p className="lead">Schicken Sie uns einfach Ihre letzte Abrechnung. Wir prüfen kostenlos und unverbindlich, ob Sie sparen können – und übernehmen auf Wunsch den kompletten Wechsel.</p>
          <a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer"><b>◉</b> Strompreis jetzt prüfen</a>
          <p className="micro">Kostenlos · unverbindlich · in ca. 2 Minuten</p>
          <a className="textLink" href="#ablauf">So einfach funktioniert&apos;s ↓</a>
          <div className="trustRow"><span><Check/> Persönliche Prüfung</span><span><Check/> Kein Papierkram</span><span><Check/> Sicher &amp; transparent</span></div>
        </div>
        <div className="heroVisual" aria-label="Beispiel eines Stromkostenvergleichs">
          <div className="bill">
            <div className="billTop"><span className="roundIcon">↯</span><div><b>Stromabrechnung</b><small>Beispieldarstellung</small></div></div>
            <div className="line wide"/><div className="line medium"/><div className="billDivider"/>
            <div className="billData"><span>Jahresverbrauch</span><b>3.250 kWh</b></div>
            <div className="billData"><span>Jahreskosten bisher</span><b>1.484 €</b></div>
            <div className="line wide"/><div className="line short"/>
          </div>
          <div className="savingCard">
            <p>Ihre mögliche Ersparnis</p><span className="status"><Check/> Beispielanalyse</span>
            <div className="compare"><div><span>Bisheriger Tarif</span><b>1.484 € / Jahr</b></div><i/><div><span>Neues Angebot</span><b>1.056 € / Jahr</b></div><i className="greenBar"/></div>
            <small>in diesem Beispiel</small><strong>428 €</strong><em>/ Jahr</em>
            <ul><li><Check/> Preis geprüft</li><li><Check/> Tarif verglichen</li><li><Check/> Wechselservice inklusive</li></ul>
          </div>
        </div>
      </section>

      <section className="steps" id="ablauf"><p className="sectionTag">Einfacher geht&apos;s nicht</p><h2>In 3 Schritten zum besseren Tarif</h2><div className="stepGrid">
        <article><b>1</b><div><h3>Abrechnung senden</h3><p>Foto Ihrer Strom- oder Gasabrechnung direkt per WhatsApp schicken.</p></div></article>
        <article><b>2</b><div><h3>Angebot erhalten</h3><p>Wir prüfen Ihre Konditionen und senden Ihnen ein persönliches Angebot.</p></div></article>
        <article><b>3</b><div><h3>Entspannt sparen</h3><p>Wenn es sich lohnt, übernehmen wir auf Wunsch die komplette Umstellung.</p></div></article>
      </div></section>

      <section className="benefits" id="vorteile"><div><p className="sectionTag">Ihr Vorteil</p><h2>Warum mehr zahlen,<br/>wenn ein kurzer Check reicht?</h2><p>Viele Tarife laufen jahrelang unverändert weiter. Ein Foto Ihrer Abrechnung genügt, damit wir Ihren aktuellen Preis persönlich prüfen – ohne Kosten und ohne Verpflichtung.</p><a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer">Abrechnung per WhatsApp senden</a></div><div className="benefitGrid"><article><span>€</span><h3>Mögliche Ersparnis</h3><p>Je nach Verbrauch und aktuellem Tarif können mehrere hundert Euro im Jahr möglich sein.</p></article><article><span>2</span><h3>Nur ca. 2 Minuten</h3><p>Abrechnung fotografieren, senden, fertig. Mehr brauchen wir für die erste Prüfung nicht.</p></article><article><span>✓</span><h3>Komplett begleitet</h3><p>Vom Vergleich bis zur Umstellung: Wir kümmern uns um die nächsten Schritte.</p></article><article><span>♡</span><h3>Persönlich für Sie da</h3><p>Keine anonyme Vergleichsmaschine, sondern ein fester Ansprechpartner.</p></article></div></section>

      <section className="lifestyle"><div><p className="sectionTag">Mehr von Ihrem Geld</p><h2>Vielleicht steckt Ihr nächster Urlaub schon in Ihrer Abrechnung.</h2><p>Ob Urlaub, Rücklage oder einfach mehr Spielraum im Alltag: Geld, das unnötig in einem teuren Tarif steckt, lässt sich sinnvoller nutzen. Lassen Sie deshalb unverbindlich prüfen, was bei Ihnen möglich ist.</p><a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer">Jetzt kostenlos prüfen</a></div><div className="holidayPhoto"><img src={yacht} alt="Max Aulbach auf einer Yacht mit Blick auf das Meer" /><div><b>Mehr Spielraum.<br/>Weniger Energiekosten.</b><small>Individuell geprüft statt pauschal versprochen.</small></div></div></section>

      <section className="faq" id="faq"><p className="sectionTag">Häufige Fragen</p><h2>Gut zu wissen</h2><div className="faqGrid">
        <details><summary>Ist die Prüfung wirklich kostenlos?</summary><p>Ja. Die Prüfung Ihrer Abrechnung ist kostenlos und unverbindlich.</p></details>
        <details><summary>Was muss ich schicken?</summary><p>Ein gut lesbares Foto oder PDF Ihrer letzten Strom- oder Gasabrechnung genügt für den ersten Check.</p></details>
        <details><summary>Muss ich anschließend wechseln?</summary><p>Nein. Sie entscheiden ganz in Ruhe, ob Sie ein vorgeschlagenes Angebot annehmen möchten.</p></details>
        <details><summary>Was passiert bei einem Wechsel?</summary><p>Wir begleiten die Umstellung. Die Energieversorgung läuft ohne Unterbrechung weiter.</p></details>
      </div></section>

      <section className="finalCta" id="kontakt"><p>Kostenlos &amp; unverbindlich</p><h2>Ein Foto kann Ihnen zeigen,<br/>ob Sie Jahr für Jahr zu viel zahlen.</h2><a className="primaryButton light" href={whatsapp} target="_blank" rel="noreferrer">◉ Energiecheck per WhatsApp starten</a><small>Vorgefertigte Nachricht: „Energiecheck“</small></section>

      <footer><div className="footerTop"><a className="brand" href="/"><img className="energyLogo" src={logo} alt="" /><span>MA SALES GROUP</span></a><p>Ihr persönlicher Ansprechpartner für Strom- und Gastarife.</p><div className="energySocials"><a href="https://www.instagram.com/max_aulbach/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.linkedin.com/in/max-aulbach-000859348/" target="_blank" rel="noreferrer">LinkedIn</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footerBottom"><span>Max Aulbach · MA Sales Group</span><span><a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a> · <a href="tel:+491716327501">+49 171 6327501</a></span></div></footer>
import logo from "../assets/logo";
const whatsapp = "https://wa.me/491716327501?text=Energiecheck";

const Check = () => <span className="check" aria-hidden="true">✓</span>;

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="/" aria-label="MA Sales Group Startseite"><img className="energyLogo" src={logo} alt="" /><span>MA SALES GROUP</span></a>
        <nav aria-label="Hauptnavigation">
          <a href="#ablauf">So funktioniert&apos;s</a><a href="#vorteile">Ihre Vorteile</a><a href="#faq">FAQ</a><a href="#kontakt">Kontakt</a>
        </nav>
        <a className="outlineButton" href={whatsapp} target="_blank" rel="noreferrer">◉ Strompreis prüfen</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Kostenloser Energiecheck</p>
          <h1>Zahlen Sie noch<br/><span>zu viel</span> für Strom &amp; Gas?</h1>
          <p className="lead">Schicken Sie uns einfach Ihre letzte Abrechnung. Wir prüfen kostenlos und unverbindlich, ob Sie sparen können – und übernehmen auf Wunsch den kompletten Wechsel.</p>
          <a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer"><b>◉</b> Strompreis jetzt prüfen</a>
          <p className="micro">Kostenlos · unverbindlich · in ca. 2 Minuten</p>
          <a className="textLink" href="#ablauf">So einfach funktioniert&apos;s ↓</a>
          <div className="trustRow"><span><Check/> Persönliche Prüfung</span><span><Check/> Kein Papierkram</span><span><Check/> Sicher &amp; transparent</span></div>
        </div>
        <div className="heroVisual" aria-label="Beispiel eines Stromkostenvergleichs">
          <div className="bill">
            <div className="billTop"><span className="roundIcon">↯</span><div><b>Stromabrechnung</b><small>Beispieldarstellung</small></div></div>
            <div className="line wide"/><div className="line medium"/><div className="billDivider"/>
            <div className="billData"><span>Jahresverbrauch</span><b>3.250 kWh</b></div>
            <div className="billData"><span>Jahreskosten bisher</span><b>1.484 €</b></div>
            <div className="line wide"/><div className="line short"/>
          </div>
          <div className="savingCard">
            <p>Ihre mögliche Ersparnis</p><span className="status"><Check/> Beispielanalyse</span>
            <div className="compare"><div><span>Bisheriger Tarif</span><b>1.484 € / Jahr</b></div><i/><div><span>Neues Angebot</span><b>1.056 € / Jahr</b></div><i className="greenBar"/></div>
            <small>in diesem Beispiel</small><strong>428 €</strong><em>/ Jahr</em>
            <ul><li><Check/> Preis geprüft</li><li><Check/> Tarif verglichen</li><li><Check/> Wechselservice inklusive</li></ul>
          </div>
        </div>
      </section>

      <section className="steps" id="ablauf"><p className="sectionTag">Einfacher geht&apos;s nicht</p><h2>In 3 Schritten zum besseren Tarif</h2><div className="stepGrid">
        <article><b>1</b><div><h3>Abrechnung senden</h3><p>Foto Ihrer Strom- oder Gasabrechnung direkt per WhatsApp schicken.</p></div></article>
        <article><b>2</b><div><h3>Angebot erhalten</h3><p>Wir prüfen Ihre Konditionen und senden Ihnen ein persönliches Angebot.</p></div></article>
        <article><b>3</b><div><h3>Entspannt sparen</h3><p>Wenn es sich lohnt, übernehmen wir auf Wunsch die komplette Umstellung.</p></div></article>
      </div></section>

      <section className="benefits" id="vorteile"><div><p className="sectionTag">Ihr Vorteil</p><h2>Warum mehr zahlen,<br/>wenn ein kurzer Check reicht?</h2><p>Viele Tarife laufen jahrelang unverändert weiter. Ein Foto Ihrer Abrechnung genügt, damit wir Ihren aktuellen Preis persönlich prüfen – ohne Kosten und ohne Verpflichtung.</p><a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer">Abrechnung per WhatsApp senden</a></div><div className="benefitGrid"><article><span>€</span><h3>Mögliche Ersparnis</h3><p>Je nach Verbrauch und aktuellem Tarif können mehrere hundert Euro im Jahr möglich sein.</p></article><article><span>2</span><h3>Nur ca. 2 Minuten</h3><p>Abrechnung fotografieren, senden, fertig. Mehr brauchen wir für die erste Prüfung nicht.</p></article><article><span>✓</span><h3>Komplett begleitet</h3><p>Vom Vergleich bis zur Umstellung: Wir kümmern uns um die nächsten Schritte.</p></article><article><span>♡</span><h3>Persönlich für Sie da</h3><p>Keine anonyme Vergleichsmaschine, sondern ein fester Ansprechpartner.</p></article></div></section>

      <section className="lifestyle"><div><p className="sectionTag">Mehr von Ihrem Geld</p><h2>Vielleicht steckt Ihr nächster Urlaub schon in Ihrer Abrechnung.</h2><p>Ob Urlaub, Rücklage oder einfach mehr Spielraum im Alltag: Geld, das unnötig in einem teuren Tarif steckt, lässt sich sinnvoller nutzen. Lassen Sie deshalb unverbindlich prüfen, was bei Ihnen möglich ist.</p><a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer">Jetzt kostenlos prüfen</a></div><div className="holidayPhoto"><img src={yacht} alt="Max Aulbach auf einer Yacht mit Blick auf das Meer" /><div><b>Mehr Spielraum.<br/>Weniger Energiekosten.</b><small>Individuell geprüft statt pauschal versprochen.</small></div></div></section>

      <section className="faq" id="faq"><p className="sectionTag">Häufige Fragen</p><h2>Gut zu wissen</h2><div className="faqGrid">
        <details><summary>Ist die Prüfung wirklich kostenlos?</summary><p>Ja. Die Prüfung Ihrer Abrechnung ist kostenlos und unverbindlich.</p></details>
        <details><summary>Was muss ich schicken?</summary><p>Ein gut lesbares Foto oder PDF Ihrer letzten Strom- oder Gasabrechnung genügt für den ersten Check.</p></details>
        <details><summary>Muss ich anschließend wechseln?</summary><p>Nein. Sie entscheiden ganz in Ruhe, ob Sie ein vorgeschlagenes Angebot annehmen möchten.</p></details>
        <details><summary>Was passiert bei einem Wechsel?</summary><p>Wir begleiten die Umstellung. Die Energieversorgung läuft ohne Unterbrechung weiter.</p></details>
      </div></section>

      <section className="finalCta" id="kontakt"><p>Kostenlos &amp; unverbindlich</p><h2>Ein Foto kann Ihnen zeigen,<br/>ob Sie Jahr für Jahr zu viel zahlen.</h2><a className="primaryButton light" href={whatsapp} target="_blank" rel="noreferrer">◉ Energiecheck per WhatsApp starten</a><small>Vorgefertigte Nachricht: „Energiecheck“</small></section>

    </main>
  );
}
