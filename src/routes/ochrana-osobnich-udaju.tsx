import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2, P, Ul } from "@/components/legal-layout";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  component: OchranaOsobnichUdaju,
  head: () => ({
    meta: [
      { title: "Zásady ochrany osobních údajů | 123Sídla" },
      {
        name: "description",
        content:
          "Jak společnost Lyvus Properties s.r.o. (123Sídla) zpracovává osobní údaje návštěvníků webu, zájemců o virtuální sídlo a zákazníků.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function OchranaOsobnichUdaju() {
  return (
    <LegalLayout
      title="Zásady ochrany osobních údajů"
      effectiveDate="Účinné od 19. 9. 2026"
    >
      <P>
        Prostřednictvím těchto Zásad ochrany osobních údajů (dále jen
        „Zásady") informujeme subjekty údajů, jejichž osobní údaje
        zpracováváme, o rozsahu, účelu a době tohoto zpracování a o jejich
        právech.
      </P>

      <H2>1. Kdo je správcem</H2>
      <P>
        Správcem osobních údajů je{" "}
        <strong className="text-white">Lyvus Properties s.r.o.</strong>, IČO
        19172699, DIČ CZ19172699, se sídlem Kurta Konráda 2517/1, 190 00
        Praha 9 (dále jen „my" nebo „Poskytovatel"), provozovatel služby
        123Sídla. Ve věci ochrany osobních údajů nás můžete kontaktovat
        e-mailem na{" "}
        <a
          href="mailto:info@123sidla.cz"
          className="text-primary underline underline-offset-2"
        >
          info@123sidla.cz
        </a>
        .
      </P>

      <H2>2. Jaké údaje a proč zpracováváme</H2>
      <P>
        <strong className="text-white">Návštěvníci webu.</strong> Při
        prohlížení stránek 123sidla.cz můžeme zpracovávat technické údaje
        (IP adresa, typ prohlížeče) v rozsahu nezbytném pro provoz a
        zabezpečení webu. Právním základem je náš oprávněný zájem na
        fungování a ochraně webu. Tyto údaje uchováváme nejdéle po dobu 6
        měsíců.
      </P>
      <P>
        <strong className="text-white">Zájemci o službu (kontaktní formulář).</strong>{" "}
        Když nám napíšete přes kontaktní formulář, zpracováváme jméno,
        příjmení, e-mail, případně název společnosti a obsah vaší zprávy, a
        to za účelem vyřízení vašeho dotazu a přípravy nabídky. Právním
        základem je jednání směřující k uzavření smlouvy na váš popud (čl. 6
        odst. 1 písm. b) GDPR). Tyto údaje uchováváme po dobu vyřizování
        poptávky, nejdéle 12 měsíců od odeslání formuláře, pokud z ní
        nevznikne smluvní vztah.
      </P>
      <P>
        <strong className="text-white">Zákazníci a identifikace dle AML zákona.</strong>{" "}
        Jsme povinnou osobou podle zákona č. 253/2008 Sb., o některých
        opatřeních proti legalizaci výnosů z trestné činnosti a financování
        terorismu („AML zákon"). Při uzavření smlouvy o poskytnutí
        virtuálního sídla proto zpracováváme identifikační údaje zákazníka
        (jméno, datum narození, adresa, u právnických osob i údaje o
        statutárním orgánu a skutečném majiteli), případně kopie
        identifikačních dokladů a výsledky kontrol prováděných v rámci AML
        povinností. Právním základem je plnění smlouvy a plnění právních
        povinností, které nám AML zákon ukládá. Tyto údaje uchováváme po
        dobu trvání smlouvy a dále po dobu vyžadovanou AML zákonem (zpravidla
        10 let od ukončení smluvního vztahu).
      </P>
      <P>
        <strong className="text-white">Doručovaná pošta.</strong> V
        souvislosti s přijímáním poštovních zásilek na adrese sídla
        zpracováváme údaje uvedené na obálce či zásilce (zejména jméno
        adresáta a odesílatele) v rozsahu nutném pro evidenci a předání
        zásilky zákazníkovi. Právním základem je plnění smlouvy.
      </P>

      <H2>3. Komu údaje předáváme</H2>
      <P>Vaše osobní údaje můžeme v odůvodněných případech předat:</P>
      <Ul>
        <li>
          zpracovatelům, kteří pro nás zajišťují IT infrastrukturu, hosting
          webu, odesílání e-mailů nebo účetnictví,
        </li>
        <li>
          orgánům veřejné moci a jiným subjektům, pokud to vyžaduje právní
          předpis (zejména v rámci AML povinností — Finančnímu analytickému
          úřadu),
        </li>
        <li>
          jiným subjektům, je-li to nezbytné k ochraně našich práv, majetku
          nebo bezpečnosti.
        </li>
      </Ul>
      <P>Osobní údaje nepředáváme do zemí mimo Evropskou unii.</P>

      <H2>4. Cookies</H2>
      <P>
        Naše webové stránky používají pouze technické cookies nezbytné pro
        jejich základní fungování. Nepoužíváme cookies pro sledování chování
        napříč weby ani pro cílenou reklamu třetích stran. Většina
        prohlížečů je nastavena tak, aby cookies přijímala — nastavení
        cookies můžete kdykoli změnit v nastavení svého prohlížeče.
      </P>

      <H2>5. Vaše práva</H2>
      <P>Ve vztahu ke svým osobním údajům máte právo zejména:</P>
      <Ul>
        <li>na přístup k osobním údajům, které o vás zpracováváme,</li>
        <li>na opravu nepřesných nebo neúplných údajů,</li>
        <li>
          na výmaz osobních údajů, není-li dán jiný oprávněný důvod pro
          jejich další zpracování (zejména plnění AML povinností),
        </li>
        <li>na omezení zpracování za podmínek stanovených GDPR,</li>
        <li>
          vznést námitku proti zpracování založenému na našem oprávněném
          zájmu,
        </li>
        <li>
          na přenositelnost údajů, zpracováváme-li je na základě smlouvy nebo
          souhlasu,
        </li>
        <li>
          podat stížnost u Úřadu pro ochranu osobních údajů (
          <a
            href="https://www.uoou.cz"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            uoou.cz
          </a>
          ), pokud se domníváte, že zpracováním vašich údajů porušujeme
          GDPR.
        </li>
      </Ul>
      <P>
        Svá práva můžete uplatnit e-mailem na{" "}
        <a
          href="mailto:info@123sidla.cz"
          className="text-primary underline underline-offset-2"
        >
          info@123sidla.cz
        </a>
        . Upozorňujeme, že v rozsahu, v němž je zpracování osobních údajů
        nezbytné pro plnění našich povinností podle AML zákona, nemusíme
        některým žádostem (zejména o výmaz) vyhovět po dobu trvání této
        zákonné povinnosti.
      </P>

      <H2>6. Zabezpečení</H2>
      <P>
        Osobní údaje zpracováváme způsobem, který zajišťuje jejich náležité
        zabezpečení, včetně ochrany pomocí vhodných technických a
        organizačních opatření před neoprávněným či protiprávním zpracováním
        a před náhodnou ztrátou, zničením nebo poškozením.
      </P>

      <H2>7. Automatizované rozhodování</H2>
      <P>
        Při zpracování osobních údajů nedochází k automatizovanému
        individuálnímu rozhodování ani k profilování.
      </P>

      <H2>8. Změny těchto Zásad</H2>
      <P>
        Tyto Zásady můžeme přiměřeně aktualizovat, zejména v souvislosti se
        změnou právních předpisů nebo rozsahu poskytovaných služeb. Aktuální
        znění je vždy dostupné na 123sidla.cz.
      </P>

      <div className="!mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm">
        <p className="font-display font-semibold text-white">
          Lyvus Properties s.r.o.
        </p>
        <p className="mt-1">Kurta Konráda 2517/1, 190 00 Praha 9</p>
        <p className="mt-1">IČ: 19172699 · DIČ: CZ19172699 · plátce DPH</p>
        <p className="mt-1">
          E-mail:{" "}
          <a
            href="mailto:info@123sidla.cz"
            className="text-primary underline underline-offset-2"
          >
            info@123sidla.cz
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
