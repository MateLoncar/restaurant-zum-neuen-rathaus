# Hotel-Restaurant Zum Neuen Rathaus

Website für das Hotel-Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath. Das Projekt verwendet Next.js 15, React 19, TypeScript und Tailwind CSS 4.

## Lokal starten

Im Ordner dieses Projekts:

```powershell
npm.cmd install
npm.cmd run dev
```

Danach `http://localhost:3000` im Browser öffnen. `npm.cmd` umgeht die PowerShell-Sperre für `npm.ps1` auf Windows.

Für den Produktionsbuild und den lokalen Produktionsserver:

```powershell
npm.cmd run build
npm.cmd start
```

Die Website enthält eine serverseitige API-Route für die Anfrageformulare. Deshalb muss sie auf einem Next.js-/Node.js-Host laufen; ein rein statischer Export nach `out/` unterstützt den E-Mail-Versand nicht.

## Speisekarten und Preise ändern

Alle Karten liegen als getrennte JSON-Dateien im Ordner `content/menus/`:

- `speisekarte.json` – Speisen und Getränke aus der veröffentlichten Hauptkarte
- `mittagskarte.json` – wöchentlich wechselnder Mittagstisch
- `sonderkarte.json` – saisonale Angebote

Ein Karteneintrag sieht zum Beispiel so aus:

```json
{
  "name": "Beispielgericht",
  "description": "Beschreibung und Beilagen",
  "priceCents": 1390
}
```

`priceCents` enthält den Preis in Cent: `1390` wird als `13,90 €` dargestellt. Zum Ändern eines Preises nur diese Zahl anpassen. Für ein Gericht ohne Beschreibung kann `description` weggelassen werden. Wenn ein Bestandteil inklusive ist und keinen eigenen Preis hat, kann statt `priceCents` zum Beispiel `"priceLabel": "inklusive"` stehen.

Für eine neue Wochen- oder Sonderkarte in der passenden Datei `categories` füllen:

```json
"categories": [
  {
    "name": "Diese Woche",
    "items": [
      { "name": "Gericht 1", "description": "Beilage oder kurze Beschreibung", "priceCents": 1290 },
      { "name": "Gericht 2", "priceCents": 1490 }
    ]
  }
]
```

Du kannst beliebig viele Kategorien und Einträge hinzufügen. Achte auf gültiges JSON: doppelte Anführungszeichen verwenden und nach dem letzten Eintrag kein Komma setzen. Eine Karte ohne verfügbare Einträge zeigt automatisch den Hinweis aus `note` an. Den Hinweis kannst du ebenfalls in der jeweiligen JSON-Datei ändern.

Die Hauptkarte folgt der zuletzt auf der offiziellen Restaurant-Seite eingebundenen PDF-Karte (März 2026). Die bereitgestellte ältere PDF-Adresse aus August 2024 ist nicht mehr die aktuell eingebundene Karte. Die Mittagskarte ist mit KW 42 (12.–18. Oktober 2026) beschriftet; am 19. Oktober hatte bereits KW 43 begonnen. Sie wird auf der Website daher ausdrücklich als möglicherweise veraltet gekennzeichnet. Die Sonderkarte ist im Verzeichnis Oktober 2026 hinterlegt; ihre aktuelle Verfügbarkeit sollte telefonisch bestätigt werden.

## E-Mail-Versand einrichten

Die beiden Formulare senden Zimmer- und Tischanfragen über die Resend-API serverseitig an `hotelzumneuenrathaus@gmail.com`. Der API-Schlüssel wird nie an den Browser geschickt. Das Formular bestätigt den Versand erst, wenn Resend die Nachricht mit einer Versand-ID angenommen hat.

1. Bei [Resend](https://resend.com/) ein Konto anlegen und eine eigene Absender-Domain hinzufügen.
2. Die Domain nach den Anweisungen von Resend verifizieren und einen API-Schlüssel erstellen.
3. `.env.example` als `.env.local` kopieren.
4. In `.env.local` die Werte eintragen:

   ```dotenv
   RESEND_API_KEY=re_dein_geheimer_schluessel
   EMAIL_FROM="Zum Neuen Rathaus <anfragen@deine-verifizierte-domain.de>"
   ```

   `EMAIL_FROM` muss eine Absenderadresse der bei Resend verifizierten Domain sein. Den API-Schlüssel niemals in React-Komponenten oder in Git eintragen.
5. Den Entwicklungsserver neu starten. Für den Livebetrieb dieselben Variablen als geheime Umgebungsvariablen beim Hosting-Anbieter setzen.

Ohne gültigen Resend-Schlüssel und verifizierte Absenderadresse werden Formulare nicht als erfolgreich bestätigt. In diesem Fall werden Telefonnummer und WhatsApp als direkter Kontakt angezeigt. Eine Anfrage ist immer erst nach der persönlichen Bestätigung des Betriebs eine Reservierung oder Buchung.

## Inhalte und noch benötigte Angaben

- Die veröffentlichten Öffnungszeiten sind Dienstag bis Sonntag von 11:30–15:00 Uhr und 17:30–24:00 Uhr; Montag ist Ruhetag.
- Die Hotelzimmerpreise und Ausstattung entsprechen den Angaben aus der Nutzeranfrage und der offiziellen Hotelseite.
- In `app/datenschutz/page.tsx` muss vor Veröffentlichung der konkrete Hosting-Anbieter samt zutreffenden Angaben zu Protokolldaten und Speicherfristen ergänzt werden.
- Die offizielle Website verlinkt eine Mittagskarte für KW 42 (12.–18. Oktober 2026) und eine Sonderkarte für Oktober 2026. Die Mittagskarte ist abgelaufen; bitte die Verfügbarkeit beider Karten telefonisch bestätigen.
- Die Impressumsseite verwendet die verfügbaren Angaben der offiziellen Website. Weitere Register-, Steuer- oder Aufsichtsangaben wurden nicht ergänzt, weil sie dort nicht genannt werden.
- Vor Livegang sollten die offiziellen Preise (PDF-Stand August 2024), rechtlichen Hinweise und E-Mail-Konfiguration vom Betrieb geprüft werden.
