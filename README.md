# Giorgio & Francesca — Save the Date

Prima bozza del wedding website per Giorgio Delmenico e Francesca Vigo.

## Contenuto

- intro animata con busta color avorio
- sigillo in ceralacca verde salvia con monogramma FG
- fiore bianco sotto al sigillo
- animazione di apertura + zoom per simulare l'ingresso nella busta
- homepage "Benvenuti"
- menu a tendina con:
  - Benvenuti
  - Dettagli cerimonia
  - Alloggi consigliati
  - Conferma la tua presenza
- sezioni placeholder già pronte da personalizzare
- layout responsive per smartphone e desktop

## File

- `index.html` → struttura del sito
- `styles.css` → colori, tipografia, animazioni e responsive
- `script.js` → interazioni della busta e menu
- `assets/envelope-reference.png` → immagine di riferimento usata temporaneamente come hero

## Come provarlo sul computer

Apri direttamente `index.html` nel browser. Per un'anteprima più fedele, puoi anche usare un server locale, ma non è obbligatorio.

## Come pubblicarlo GRATIS con GitHub Pages

### 1. Crea un account GitHub
Vai su github.com e crea un account se non ne hai già uno.

### 2. Crea un nuovo repository
Dalla home di GitHub:

1. clicca **New repository**
2. nome consigliato: `giorgio-francesca-save-the-date`
3. scegli **Public**
   - GitHub Pages gratuito funziona in modo semplice con repository pubblici
   - il sito non verrà normalmente trovato da altri se non condividete il link, ma tecnicamente sarà pubblico
4. clicca **Create repository**

### 3. Carica i file
Nel repository appena creato:

1. clicca **Add file** → **Upload files**
2. trascina dentro TUTTO il contenuto di questa cartella:
   - index.html
   - styles.css
   - script.js
   - cartella assets
3. clicca **Commit changes**

ATTENZIONE: `index.html` deve trovarsi nella radice del repository, non dentro un'altra sottocartella.

### 4. Attiva GitHub Pages
Nel repository:

1. vai su **Settings**
2. nel menu laterale clicca **Pages**
3. sotto **Build and deployment** scegli:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. clicca **Save**

GitHub mostrerà poi l'indirizzo del sito, tipicamente:

`https://NOMEUTENTE.github.io/giorgio-francesca-save-the-date/`

### 5. Modifiche future
Quando vi preparo una nuova versione potete sostituire i file nel repository e GitHub Pages aggiornerà automaticamente il sito.

## Nota importante sulla privacy

Un sito GitHub Pages NON è veramente privato: chi possiede il link può accedervi e il repository pubblico può essere trovato.

Per un matrimonio spesso è sufficiente distribuire il link solo agli invitati, ma se volete una vera protezione con password conviene usare ad esempio Cloudflare Pages + Access, Netlify con protezione, oppure un piccolo hosting con autenticazione.

## Prima modifica consigliata

Sostituite il placeholder della hero con una vostra foto.

In `styles.css`, cercate `.photo-placeholder` e sostituite:

`url('assets/envelope-reference.png')`

con il nome della vostra foto, per esempio:

`url('assets/noi.jpg')`

Poi caricate `noi.jpg` dentro la cartella `assets`.
