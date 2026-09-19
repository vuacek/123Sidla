# 123Sídla — návod k zdrojovým souborům

Web je postavený na React + TanStack Start (TypeScript, Tailwind CSS v4). Kód je váš,
můžete s ním libovolně nakládat i mimo Lovable.

## 1. Co si nainstalovat

- **Node.js 20 nebo novější** (nebo ještě rychlejší [Bun](https://bun.sh))
- editor (VS Studio Code a podobně)

## 2. Spuštění na vlastním počítači

```text
npm install
npm run dev
```

Otevře se lokální náhled webu (obvykle `http://localhost:5173`).

## 3. Sestavení pro internet

```text
npm run build
```

Výstup najdete ve složce `dist/`. Sestavení je připravené pro platformu Cloudflare
(nitro), ale web umí spustit i Vercel, Netlify nebo jakýkoli Node/edge hosting.

## 4. Kde se co mění

| Chcete změnit | Soubor |
| --- | --- |
| texty, sekce, ceny, formulář | `src/routes/index.tsx` |
| barvy, písma, skleněné karty | `src/styles.css` |
| fotografie | `src/assets/vaclavak-hero.jpg` |
| titulek a popis pro Google | `src/routes/index.tsx` a `src/routes/__root.tsx` (funkce `head()`) |
| ikona webu | `public/favicon.ico` |

## 5. Hosting a doména

- **Hosting:** Cloudflare Workers/Pages, Vercel nebo Netlify — všechny mají bezplatný
  provoz a https automaticky. Stačí nahrát/repo napojit a spustit `npm run build`.
- **Doména 123sidla.cz:** u registrátora (Webglobe) v DNS nastavte záznamy, které vám
  hostingový poskytovatel ukáže (obvykle `A` nebo `CNAME` pro `@` a `www`), a přidejte
  ověřovací TXT záznam. Poté doménu u hostingu nastavíte jako hlavní.

## 6. Důležité poznámky k obsahu

- **Kontaktní formulář posílá poptávky na Info@123sidla.cz přes SMTP vaší
  vlastní schránky** (žádná cizí služba typu FormSubmit — ty se ukázaly
  jako nespolehlivé, mail se často vůbec nedoručí). Aby to fungovalo, je
  potřeba na hostingu nastavit tyto proměnné prostředí (Environment
  Variables):

  | Proměnná | Význam | Příklad |
  | --- | --- | --- |
  | `SMTP_HOST` | adresa odchozího SMTP serveru vaší schránky | najdete ve WebAdminu Webglobe → Pošta → e-mailová schránka → „Nastavení pro poštovního klienta" |
  | `SMTP_PORT` | port SMTP | obvykle `465` (SSL) nebo `587` (STARTTLS) |
  | `SMTP_USER` | přihlašovací jméno schránky | `info@123sidla.cz` |
  | `SMTP_PASS` | heslo ke schránce | — |
  | `SMTP_FROM` | (nepovinné) adresa „Od" | výchozí je `SMTP_USER` |
  | `CONTACT_EMAIL` | (nepovinné) kam poptávky chodí | výchozí je `info@123sidla.cz` |

  Přesný `SMTP_HOST` a port najdete ve WebAdminu Webglobe u dané schránky
  (sekce Pošta / E-mailové schránky), případně vám je na vyžádání sdělí
  podpora Webglobe. Bez těchto proměnných formulář zobrazí chybovou
  hlášku a poptávka se neodešle — kód sám o sobě žádné SMTP údaje
  neobsahuje ani je nikam neposílá mimo tuto schránku.
- **Návštěvy na adrese se nepřijímají** — web to výslovně uvádí na dvou místech.
  Tyto věty nemažte, jinak lidé začnou na Václavák chodit.
- **Telefonní číslo zatím nezveřejňujeme** (nemáme ho) — komunikace vede na
  `Info@123sidla.cz`.
- **Provozovatel** (Lyvus Properties s.r.o., IČ 19172699, DIČ CZ19172699) se uvádí
  na jednom místě, v sekci Kontakt.
- Ceny se odvozují jen od délky smlouvy: 12 měsíců 349 Kč, 24 měsíců 299 Kč,
  36 měsíců 249 Kč měsíčně.
