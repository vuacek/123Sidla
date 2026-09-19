import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2, P, Ul } from "@/components/legal-layout";

export const Route = createFileRoute("/obchodni-podminky")({
  component: ObchodniPodminky,
  head: () => ({
    meta: [
      { title: "Obchodní podmínky | 123Sídla" },
      {
        name: "description",
        content:
          "Obchodní podmínky pro poskytování služby virtuálního sídla společností Lyvus Properties s.r.o. (123Sídla).",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ObchodniPodminky() {
  return (
    <LegalLayout title="Obchodní podmínky" effectiveDate="Účinné od 19. 9. 2026">
      <P>
        Tyto obchodní podmínky upravují práva a povinnosti společnosti{" "}
        <strong className="text-white">Lyvus Properties s.r.o.</strong>, IČO
        19172699, DIČ CZ19172699, se sídlem Kurta Konráda 2517/1, 190 00
        Praha 9 (dále jen „Poskytovatel"), a zákazníka při poskytování služby
        virtuálního sídla prostřednictvím internetových stránek 123sidla.cz.
        Kontaktní e-mail Poskytovatele je{" "}
        <a
          href="mailto:info@123sidla.cz"
          className="text-primary underline underline-offset-2"
        >
          info@123sidla.cz
        </a>
        .
      </P>
      <P>
        Služba je poskytována na adrese{" "}
        <strong className="text-white">
          Václavské náměstí 782/22, 110 00 Praha 1
        </strong>{" "}
        (dále jen „Adresa sídla"). Tyto Obchodní podmínky tvoří součást
        smlouvy o poskytování služby virtuálního sídla (dále jen „Smlouva").
      </P>

      <H2>1. Zákazník a rozsah služby</H2>
      <P>
        Zákazníkem může být fyzická osoba podnikající, právnická osoba, nebo
        fyzická osoba uzavírající smlouvu mimo rámec své podnikatelské
        činnosti či samostatného výkonu povolání (dále jen „Spotřebitel").
        Zákazník je oprávněn využívat službu pouze způsobem odpovídajícím
        právním předpisům, těmto Obchodním podmínkám a sjednanému rozsahu
        služby.
      </P>
      <P>Služba zahrnuje zejména:</P>
      <Ul>
        <li>
          poskytnutí souhlasu s umístěním sídla nebo adresy podnikatele na
          Adrese sídla,
        </li>
        <li>
          možnost využívat Adresu sídla pro zápis do příslušného veřejného
          rejstříku nebo evidence, pokud to právní předpisy umožňují,
        </li>
        <li>přijímání poštovních zásilek doručovaných na Adresu sídla,</li>
        <li>
          elektronické informování zákazníka o vybraných přijatých zásilkách,
        </li>
        <li>
          skenování vybraných zásilek nebo jejich částí v rozsahu stanoveném
          Poskytovatelem.
        </li>
      </Ul>
      <P>
        Není-li výslovně sjednáno jinak, služba nezahrnuje kancelářské
        prostory, pracovní místo, zasedací místnost, provozovnu ani možnost
        osobního jednání na Adrese sídla.
      </P>

      <H2>2. Objednávka a uzavření Smlouvy</H2>
      <P>
        Zákazník může službu objednat prostřednictvím internetových stránek
        123sidla.cz nebo jiným způsobem umožněným Poskytovatelem. Před
        odesláním objednávky je zákazník povinen zkontrolovat správnost a
        úplnost zadaných údajů. Odesláním objednávky zákazník činí návrh na
        uzavření Smlouvy.
      </P>
      <P>
        Smlouva je uzavřena okamžikem, kdy Poskytovatel objednávku přijme a
        současně jsou splněny podmínky pro zahájení poskytování služby,
        zejména podmínky identifikace a kontroly zákazníka podle čl. 3 těchto
        Obchodních podmínek.
      </P>
      <P>Poskytovatel je oprávněn objednávku odmítnout, zejména pokud:</P>
      <Ul>
        <li>zákazník neposkytne požadovanou součinnost,</li>
        <li>zákazník neprojde požadovanou identifikací nebo kontrolou,</li>
        <li>zákazník uvede nepravdivé nebo neúplné údaje,</li>
        <li>
          účel využívání služby je pro Poskytovatele nepřijatelný z hlediska
          AML, právního nebo reputačního rizika, nebo
        </li>
        <li>
          uzavření nebo plnění Smlouvy by bylo v rozporu s právními předpisy.
        </li>
      </Ul>
      <P>
        Pokud zákazník uzavírá Smlouvu jako Spotřebitel prostřednictvím
        internetových stránek, musí být před odesláním objednávky zřejmé, že
        objednávka zakládá povinnost zaplatit.
      </P>

      <H2>3. Cena a platební podmínky</H2>
      <P>Cena služby se určuje podle délky zvoleného smluvního období:</P>
      <Ul>
        <li>12 měsíců: 4 188 Kč včetně DPH (349 Kč měsíčně),</li>
        <li>24 měsíců: 7 176 Kč včetně DPH (299 Kč měsíčně),</li>
        <li>36 měsíců: 8 964 Kč včetně DPH (249 Kč měsíčně).</li>
      </Ul>
      <P>
        Cena za celé zvolené smluvní období se hradí předem, není-li výslovně
        sjednáno jinak. <strong className="text-white">Poskytovatel je plátcem DPH</strong> —
        uvedené ceny jsou konečné ceny včetně DPH. Poskytovatel není oprávněn
        jednostranně zvýšit cenu již uhrazeného smluvního období.
      </P>

      <H2>4. Identifikace zákazníka a AML/KYC</H2>
      <P>
        Poskytovatel je ve vztahu k poskytování služby virtuálního sídla
        povinnou osobou podle zákona č. 253/2008 Sb., o některých opatřeních
        proti legalizaci výnosů z trestné činnosti a financování terorismu
        („AML zákon"). Poskytovatel je proto oprávněn a v rozsahu stanoveném
        právními předpisy povinen provést identifikaci a kontrolu zákazníka
        před uzavřením Smlouvy nebo před zahájením poskytování služby,
        zejména ověření totožnosti, údaje o skutečném majiteli a informace o
        účelu a povaze podnikání. Identifikace může být provedena
        elektronicky, včetně využití prostředku elektronické identifikace
        BankID.
      </P>
      <P>
        Pokud zákazník neposkytne požadovanou součinnost nebo nelze řádně
        provést identifikaci či kontrolu zákazníka, Poskytovatel není povinen
        Smlouvu uzavřít nebo je oprávněn její plnění ukončit v souladu s
        právními předpisy.
      </P>

      <H2>5. Poskytnutí a používání Adresy sídla</H2>
      <P>
        Zákazník je oprávněn používat Adresu sídla pouze po dobu trvání
        Smlouvy a odpovídá za to, že ji řádně uvede ve všech příslušných
        veřejných rejstřících a evidencích. Zákazník není bez předchozího
        písemného souhlasu Poskytovatele oprávněn označovat Adresu sídla jako
        svou provozovnu, kancelář, zákaznické centrum nebo místo určené pro
        osobní jednání s klienty.
      </P>

      <H2>6. Poštovní zásilky</H2>
      <P>
        Poskytovatel přijímá poštovní zásilky doručované na Adresu sídla
        zákazníka. U běžné listovní pošty může Poskytovatel provést její
        zpracování a elektronické zaslání zákazníkovi, zejména formou skenu.
        U doporučených zásilek, zásilek do vlastních rukou, balíků a jiných
        zásilek, jejichž převzetí vyžaduje zvláštní postup, může Poskytovatel
        zákazníkovi zaslat výzvu s informací o způsobu jejich převzetí; tyto
        zásilky nejsou automaticky předmětem skenování jejich obsahu.
        Zákazník je povinen udržovat u Poskytovatele aktuální a funkční
        e-mailovou adresu. Poskytovatel neodpovídá za obsah zásilek, za
        jejich odesílatele ani za případné prodlení nebo chyby provozovatele
        poštovních služeb.
      </P>

      <H2>7. Pošta po skončení Smlouvy</H2>
      <P>
        Po skončení Smlouvy již Poskytovatel není povinen přijímat poštu
        jménem zákazníka jako součást poskytované služby. Zákazník je povinen
        zajistit změnu zapsané adresy nejpozději do 14 dnů od skončení
        Smlouvy, pokud právní předpis nebo rozhodnutí příslušného orgánu
        nestanoví jinou lhůtu. Zásilky doručené na původní Adresu sídla po
        skončení Smlouvy mohou být vráceny odesílateli. Poskytovatel není
        povinen po skončení Smlouvy zásilky zákazníka dlouhodobě uchovávat,
        skenovat ani přeposílat.
      </P>

      <H2>8. Návštěvy a provozovna</H2>
      <P>
        Adresa sídla slouží jako sídlo nebo adresa podnikatele a pro účely
        přijímání pošty v rozsahu sjednané služby.{" "}
        <strong className="text-white">
          Návštěvy zákazníků ani jejich klientů na Adrese sídla nejsou
          přijímány.
        </strong>{" "}
        Adresa není poskytována jako kancelář, provozovna, zákaznické
        centrum ani místo určené k osobnímu jednání.
      </P>

      <H2>9. Doba trvání Smlouvy</H2>
      <P>
        Smlouva se uzavírá na dobu určitou podle zákazníkem zvoleného období
        — 12, 24 nebo 36 měsíců. Smlouva se automaticky neprodlužuje.
        Pokračování služby po skončení smluvního období vyžaduje novou
        objednávku nebo jiný výslovný souhlas stran.
      </P>

      <H2>10. Předčasné ukončení zákazníkem</H2>
      <P>
        Zákazník může požádat o předčasné ukončení Smlouvy. Uhrazená cena za
        již sjednané období se při předčasném ukončení zákazníkem nevrací v
        poměrné části, pokud právní předpis nestanoví jinak. Tím nejsou
        dotčena zákonná práva Spotřebitele, zejména právo odstoupit od
        smlouvy uzavřené distančním způsobem.
      </P>

      <H2>11. Odstoupení Spotřebitele</H2>
      <P>
        Pokud je zákazník Spotřebitelem a Smlouva byla uzavřena distančním
        způsobem, má Spotřebitel právo odstoupit od Smlouvy ve lhůtě 14 dnů,
        pokud zákon nestanoví výjimku — a to jakýmkoli jednoznačným
        prohlášením zaslaným Poskytovateli, zejména e-mailem na{" "}
        <a
          href="mailto:info@123sidla.cz"
          className="text-primary underline underline-offset-2"
        >
          info@123sidla.cz
        </a>
        . Pokud Spotřebitel výslovně požádá o zahájení poskytování služby
        před uplynutím této lhůty a poskytování je zcela dokončeno, může tím
        právo na odstoupení zaniknout; o této skutečnosti bude Spotřebitel
        předem informován a bude k tomu vyžádán jeho výslovný souhlas.
      </P>

      <H2>12. Ukončení Smlouvy Poskytovatelem</H2>
      <P>
        Poskytovatel může Smlouvu ukončit s okamžitou účinností zejména
        tehdy, pokud zákazník neposkytne součinnost při AML/KYC kontrole,
        uvede nepravdivé údaje, poruší právní předpisy nebo tyto Obchodní
        podmínky, používá Adresu sídla jako provozovnu bez souhlasu
        Poskytovatele, nebo pokud pokračování smluvního vztahu není možné či
        přijatelné z důvodu zákonné povinnosti Poskytovatele. V takovém
        případě nemá zákazník nárok na vrácení poměrné části ceny, pokud
        právní předpis nestanoví jinak.
      </P>

      <H2>13. Zakázané použití služby</H2>
      <P>
        Zákazník nesmí službu využívat k podvodné nebo jiné protiprávní
        činnosti, k legalizaci výnosů z trestné činnosti nebo financování
        terorismu, k obcházení AML, daňových nebo jiných zákonných
        povinností, k činnosti bez potřebného oprávnění, k uvádění
        nepravdivých údajů vůči úřadům, bankám nebo třetím osobám, ani
        způsobem poškozujícím dobré jméno Poskytovatele nebo vlastníka
        nemovitosti.
      </P>

      <H2>14. Odpovědnost</H2>
      <P>
        Poskytovatel odpovídá za řádné poskytování sjednaných služeb v
        rozsahu stanoveném Smlouvou a právními předpisy. Poskytovatel
        neodpovídá zejména za obsah zásilek, jednání odesílatelů, jednání
        České pošty či jiných doručovacích služeb, rozhodnutí orgánů veřejné
        moci, výpadky služeb třetích stran ani za škodu způsobenou
        nesprávnými nebo neaktuálními údaji poskytnutými zákazníkem.
      </P>

      <H2>15. Reklamace</H2>
      <P>
        Zákazník může reklamaci služby uplatnit e-mailem na{" "}
        <a
          href="mailto:info@123sidla.cz"
          className="text-primary underline underline-offset-2"
        >
          info@123sidla.cz
        </a>
        , s uvedením jména či obchodní firmy, kontaktních údajů, popisu
        reklamované skutečnosti a data, kdy problém vznikl. Spotřebitel má
        práva z vadného plnění v rozsahu stanoveném občanským zákoníkem a
        dalšími právními předpisy.
      </P>

      <H2>16. Mimosoudní řešení spotřebitelských sporů</H2>
      <P>
        Pokud je zákazník Spotřebitelem a spor se nepodaří vyřešit vzájemnou
        dohodou, může podat návrh na mimosoudní řešení sporu u České obchodní
        inspekce, Ústřední inspektorát – oddělení ADR, Gorazdova 1969/24, 120
        00 Praha 2, e-mail{" "}
        <a
          href="mailto:adr@coi.gov.cz"
          className="text-primary underline underline-offset-2"
        >
          adr@coi.gov.cz
        </a>
        .
      </P>

      <H2>17. Ochrana osobních údajů</H2>
      <P>
        Informace o způsobu, účelu, rozsahu a době zpracování osobních údajů
        jsou uvedeny v samostatném dokumentu{" "}
        <a
          href="/ochrana-osobnich-udaju"
          className="text-primary underline underline-offset-2"
        >
          Zásady ochrany osobních údajů
        </a>
        .
      </P>

      <H2>18. Rozhodné právo a závěrečná ustanovení</H2>
      <P>
        Smlouva a právní vztahy z ní vyplývající se řídí právním řádem České
        republiky. Případné spory budou řešeny věcně a místně příslušnými
        soudy České republiky. Pokud se některé ustanovení těchto Obchodních
        podmínek stane neplatným, nemá tato skutečnost vliv na platnost
        ostatních ustanovení. Aktuální znění je vždy zveřejněno na
        123sidla.cz. Tyto Obchodní podmínky nabývají účinnosti dne 19. 9.
        2026.
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
