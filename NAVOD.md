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

- **Kontaktní formulář zatím nikam zprávu neposílá** — po odeslání se jen zobrazí
  poděkování. Napojení na e-mail je úkol v `roadmap.md`.
- **Návštěvy na adrese se nepřijímají** — web to výslovně uvádí na dvou místech.
  Tyto věty nemažte, jinak lidé začnou na Václavák chodit.
- **Telefonní číslo zatím nezveřejňujeme** (nemáme ho) — komunikace vede na
  `Info@123sidla.cz`.
- **Provozovatel** (Lyvus Properties s.r.o., IČ 19172699, DIČ CZ19172699) se uvádí
  na jednom místě, v sekci Kontakt.
- Ceny se odvozují jen od délky smlouvy: 12 měsíců 349 Kč, 24 měsíců 299 Kč,
  36 měsíců 249 Kč měsíčně.
