# Roadmap — 123Sídla

## Hotovo
- Web 123Sídla: hero „přímo na Václaváku", sekce Proč Václavák, Služby (3 body v ceně), ceník 12/24/36 měsíců, kontakt s provozovatelem (Lyvus Properties s.r.o.), patička
- Texty: návštěvy se nepřijímám, komunikace jen e-mailem, bez telefonu, bez slibů času
- Adresa Václavské náměstí 782/22, 110 00 Praha 1 · Info@123sidla.cz

## Hotovo (pokračování)
- [x] Napojit kontaktní formulář na e-mail — FormSubmit.co se ukázal jako nespolehlivý (aktivační e-mail nedocházel vůbec). Přepnuto na odesílání přes SMTP vlastní schránky info@123sidla.cz (Webglobe). **Čeká na doplnění SMTP údajů** (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`) jako proměnných prostředí na hostingu — viz `NAVOD.md`.
- [x] Favicon (ikona na liště prohlížeče) — nastaveno na „123" v barvě značky.

## Otevřené
- [ ] Obchodní podmínky + zásady ochrany osobních údajů + vzor smlouvy o virtuálním sídle — návrh připravit, schválit právně.
- [ ] Ověřit oprávnění používat adresu Václavské náměstí 782/22 (souhlas vlastníka / nájemce).
- [ ] Registrovat doménu 123sidla.cz — ověřeno 2026-09-19 (CZ.NIC RDAP + DNS): doména není registrovaná. Uživatel ji koupí u Webglobe (registrátor REG-WEBGLOBE, .cz 99 Kč 1. rok, 359 Kč dále — ceny bez DPH). Koupit jen doménu, bez hostingu/WebEditoru.
- [ ] Napojit doménu 123sidla.cz na web — až bude registrovaná: Project Settings → Domains → Connect Domain, záznamy A pro @ i www na 185.158.133.1 + ověřovací TXT; pak ji nastavit jako Primary. DNS se upravují zdarma v Webglobe WebAdminu (Doména → DNS → DNS záznamy).
- [ ] Pošta Info@123sidla.cz — sama doména schránku nedá; u Webglobe přibrat e-mail (Mail Start) nebo nejobecnější hosting, případně schránku u jiného poskytovatele + MX záznamy.
- [ ] Telefonní číslo — doplnit, až uživatel pošle skutečné.
- [ ] Zveřejnit web.
