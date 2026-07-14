import Link from "next/link";
import { Logo } from "../page";

export const metadata = { title: "Impressum | MA Sales Group" };

export default function Impressum() {
  return <main>
    <header className="topbar pagebar"><Link href="/"><Logo /></Link></header>
    <article className="legal">
      <p className="eyebrow">Rechtliches</p>
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>Max Aulbach<br />handelnd unter MA Sales Group<br />Am Eichwäldchen 3<br />63849 Leidersbach<br />Deutschland</p>
      <h2>Kontakt</h2>
      <p>Telefon: <a href="tel:+491716327501">+49 171 6327501</a></p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Max Aulbach<br />Am Eichwäldchen 3<br />63849 Leidersbach</p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <h2>Haftung für Inhalte</h2>
      <p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nur im Rahmen der gesetzlichen Vorgaben. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.</p>
      <h2>Haftung für Links</h2>
      <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links unverzüglich entfernt.</p>
      <h2>Urheberrecht</h2>
      <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.</p>
      <p className="legal-note">Stand: Juli 2026</p>
      <Link className="text-link" href="/">← Zur Startseite</Link>
    </article>
  </main>;
}
