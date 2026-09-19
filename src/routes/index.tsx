import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import vaclavakHero from "@/assets/vaclavak-hero.jpg";
import { sendContactEmail } from "@/lib/contact-email.server";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Prestižní virtuální sídlo na Václaváku | Sídlo firmy od 249 Kč",
      },
      {
        name: "description",
        content:
          "Virtuální sídlo firmy přímo na Václavském náměstí v Praze 1. Sídlo pro obchodní rejstřík, příjem a úschovna pošty. Od 249 Kč měsíčně.",
      },
      {
        property: "og:title",
        content: "Virtuální sídlo Praha 1 | 123Sídla",
      },
      {
        property: "og:description",
        content:
          "Sídlo firmy přímo na Václavském náměstí v Praze 1. Příjem a úschovna pošty. Od 249 Kč měsíčně.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const terms = [
  {
    months: 12,
    price: "349",
    total: "4 188",
    savings: null,
    badge: null,
    note: "Rok bez závazku",
  },
  {
    months: 24,
    price: "299",
    total: "7 176",
    savings: "1 200",
    badge: "Nejoblíbenější",
    note: "Dva roky, nižší sazba",
  },
  {
    months: 36,
    price: "249",
    total: "8 964",
    savings: "3 600",
    badge: "Nejvýhodnější",
    note: "Tři roky za nejnižší cenu",
  },
];

const services = [
  {
    title: "Sídlo společnosti v souladu se zákonem",
    text: "Označení tohoto sídla jako sídla vaší společnosti — v souladu se zákonem a se všemi náležitostmi pro obchodní rejstřík.",
  },
  {
    title: "Příjem a úschovna pošty",
    text: "Dopisy i balíky na vaší adrese převezmeme a bezpečně je pro vás uchováme.",
  },
  {
    title: "Informování o doručené poště e-mailem",
    text: "Jakmile vám na adrese něco dorazí, dáme vám vědět e-mailem — nic vám neunikne.",
  },
];



function Index() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<number | "nevím">(24);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setSending(true);

    const formData = new FormData(e.currentTarget);

    try {
      await sendContactEmail({
        data: {
          jmeno: String(formData.get("jmeno") ?? ""),
          spolecnost: String(formData.get("spolecnost") ?? ""),
          email: String(formData.get("email") ?? ""),
          delkaSmlouvy: String(formData.get("delka_smlouvy") ?? ""),
          zprava: String(formData.get("zprava") ?? ""),
        },
      });
      setSent(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "E-mail se nepodařilo odeslat, zkuste to prosím znovu.",
      );
    } finally {
      setSending(false);
    }
  }

  const chosen = terms.find((t) => t.months === selected);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      {/* ambient gradient light */}
      <div className="pointer-events-none absolute -top-40 -left-32 size-[520px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 size-[560px] rounded-full bg-indigo-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-[420px] rounded-full bg-primary/10 blur-[120px]" />

      {/* diagonal frosted glass panels */}
      <div className="glass pointer-events-none absolute -right-24 top-10 hidden h-[520px] w-[360px] rotate-[14deg] rounded-3xl border border-white/15 lg:block" />
      <div className="glass pointer-events-none absolute -right-6 top-24 hidden h-[520px] w-[360px] rotate-[14deg] rounded-3xl border border-white/10 lg:block" />
      <div className="glass pointer-events-none absolute -left-16 bottom-10 hidden h-[360px] w-[280px] -rotate-[16deg] rounded-3xl border border-white/10 lg:block" />

      {/* nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-primary font-display text-sm font-bold tracking-tight text-primary-foreground">
            123
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none tracking-tight">
              123
              <span className="text-primary">Sídla</span>
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Sídlo na Václaváku
            </p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#sluzby" className="transition hover:text-white">
            Služby
          </a>
          <a href="#lokalita" className="transition hover:text-white">
            Lokalita
          </a>
          <a href="#cenik" className="transition hover:text-white">
            Ceník
          </a>
          <a href="#kontakt" className="transition hover:text-white">
            Kontakt
          </a>
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Získat nabídku
        </a>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-20 md:pt-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Praha 1 · Václavské náměstí
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">
              Virtuální sídlo
              <br />
              <span className="text-primary">přímo na Václaváku.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Oficiální adresa vaší společnosti na Václavském náměstí — v samém
              srdci Prahy 1. Vaši poštu vyzvedneme, naskenujeme a pošleme
              e-mailem, vy se o nic starat nemusíte. Čím déle u nás zůstanete,
              tím méně platíte — od 249 Kč měsíčně.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cenik"
                className="rounded-full bg-white px-6 py-3 font-display text-sm font-semibold text-background transition hover:bg-white/90"
              >
                Zobrazit ceník
              </a>
              <a
                href="#kontakt"
                className="rounded-full border border-white/20 px-6 py-3 font-display text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Nezávazná poptávka
              </a>
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-0.5 text-primary">•</span>
              <span>
                Sídelní adresa a vyřizování pošty — <strong className="font-semibold text-white">návštěvy na
                adrese nepřijímáme</strong>.
              </span>
            </p>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-primary">
                  249 Kč
                </p>
                <p className="text-sm text-muted-foreground">
                  nejnižší měsíční sazba
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">
                  3 roky
                </p>
                <p className="text-sm text-muted-foreground">nejdelší smlouva</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">
                  0 Kč
                </p>
                <p className="text-sm text-muted-foreground">skryté poplatky</p>
              </div>
            </div>
          </div>

          {/* glass feature card */}
          <div
            id="lokalita"
            className="glass rounded-3xl border border-white/15 p-8 shadow-2xl shadow-black/40"
          >
            <img
              src={vaclavakHero}
              alt="Václavské náměstí v Praze 1 za soumraku"
              width={1280}
              height={768}
              className="aspect-[4/3] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
            />
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 font-display font-bold text-primary">
                  01
                </div>
                <div>
                  <p className="font-display font-semibold">
                    Adresa na Václaváku
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Zápis do obchodního rejstříku
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 font-display font-bold text-primary">
                  02
                </div>
                <div>
                  <p className="font-display font-semibold">Poštovní schránka</p>
                  <p className="text-sm text-muted-foreground">
                    Příjem a úschovna pošty, informace a sken dokumentu e-mailem
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 font-display font-bold text-primary">
                  03
                </div>
                <div>
                  <p className="font-display font-semibold">Vše na dálku</p>
                  <p className="text-sm text-muted-foreground">
                    Smlouva i korespondence bez osobní návštěvy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section
        id="sluzby"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Služby
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
            Co je v ceně zahrnuto
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Nejde jen o adresu na dokumentech — o vaši poštu se postaráme a
            jakmile vám něco přijde, ozveme se e-mailem.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass rounded-3xl border border-white/15 p-8"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 font-display text-lg font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-5 font-display text-lg font-semibold">
                {s.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* location band */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Lokalita
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
            Proč zrovna Václavák
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl border border-white/15 p-8">
            <p className="font-display text-lg font-semibold">
              Adresa, která zaujme
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Václavské náměstí na vizitce, v e-mailu i v obchodním rejstříku
              působí sebevědomě — a to i u klientů, kteří Prahu 1 znají.
            </p>
          </div>
          <div className="glass rounded-3xl border border-white/15 p-8">
            <p className="font-display text-lg font-semibold">
              Všechno na dosah
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Metro A i B na Můstku, hlavní nádraží do pár minut a desítky
              kancelářských budov a bank v bezprostředním okolí.
            </p>
          </div>
          <div className="glass rounded-3xl border border-white/15 p-8">
            <p className="font-display text-lg font-semibold">
              Prestiž bez nájmu
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Skutečná adresa v centru Prahy za zlomek nájmu kanceláře — měsíčně
              už od 249 Kč podle délky smlouvy.
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section
        id="cenik"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Ceník
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
              Cena podle délky smlouvy
            </h2>
          </div>
          <p className="hidden text-sm text-muted-foreground md:block">
            Stejná služba · niží sazba s delším závazkem
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {terms.map((t) => {
            const isSelected = selected === t.months;
            return (
              <div
                key={t.months}
                className={
                  t.badge === "Nejoblíbenější"
                    ? "relative flex flex-col rounded-3xl border border-primary/40 bg-primary/10 p-8 shadow-2xl shadow-primary/20"
                    : "glass relative flex flex-col rounded-3xl border border-white/15 p-8"
                }
              >
                {t.badge && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {t.badge}
                  </span>
                )}
                <p className="font-display text-lg font-semibold">
                  {t.months} měsíců
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
                <p className="mt-5 font-display text-4xl font-bold">
                  {t.price}{" "}
                  <span className="text-base font-medium text-muted-foreground">
                    Kč/měs.
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.total} Kč za celé období
                </p>
                <p
                  className={
                    t.savings
                      ? "mt-4 inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary"
                      : "mt-4 text-sm text-muted-foreground"
                  }
                >
                  {t.savings
                    ? `Ušetříte ${t.savings} Kč oproti roční smlouvě`
                    : "Základní sazba"}
                </p>
                <a
                  href="#kontakt"
                  onClick={() => setSelected(t.months)}
                  className={
                    isSelected
                      ? "mt-8 block rounded-full bg-white py-3 text-center font-display text-sm font-semibold text-background transition hover:bg-white/90"
                      : t.badge === "Nejoblíbenější"
                        ? "mt-8 block rounded-full bg-primary py-3 text-center font-display text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                        : "mt-8 block rounded-full border border-white/20 py-3 text-center font-display text-sm font-semibold transition hover:bg-white/10"
                  }
                >
                  {isSelected ? "Vybráno · poptat" : `Poptat ${t.months} měsíců`}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Co přesně je v ceně, najdete v sekci{" "}
          <a href="#sluzby" className="font-semibold text-primary transition hover:brightness-110">
            Služby
          </a>
          .
        </p>
      </section>

      {/* contact */}
      <section
        id="kontakt"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Kontakt
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
              Požádejte o nezávaznou nabídku
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Vyplňte krátký formulář nebo nám rovnou napište — do jednoho
              pracovního dne se vám ozveme s nabídkou na míru.
            </p>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-white">
                  Sídlo na Václaváku:
                </span>{" "}
                Václavské náměstí 782/22, 110 00 Praha 1
              </p>
              <p>
                <a
                  href="mailto:Info@123sidla.cz"
                  className="transition hover:text-white"
                >
                  Info@123sidla.cz
                </a>
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Adresa slouží výhradně jako sídlo společnosti. Veškerou komunikaci vyřizujeme e-mailem.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Provozovatel
              </p>
              <p className="mt-3 font-display font-semibold text-white">
                Lyvus Properties s.r.o.
              </p>
              <p className="mt-1 text-muted-foreground">
                Sídlo: Kurta Konráda 2517/1, 190 00 Praha 9
              </p>
              <p className="mt-1 text-muted-foreground">
                IČ: 19172699 · DIČ: CZ19172699
              </p>
            </div>
            {chosen && (
              <p className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-sm">
                <span className="font-display font-semibold text-primary">
                  {chosen.months} měsíců · {chosen.price} Kč/měs.
                </span>
                <br />
                Celkem {chosen.total} Kč vč. 21% DPH za celou dobu smlouvy.
              </p>
            )}
          </div>
          <div className="glass rounded-3xl border border-white/15 p-8">
            {sent ? (
              <div className="flex min-h-56 flex-col items-center justify-center text-center">
                <p className="font-display text-2xl font-bold text-primary">
                  Děkujeme za poptávku!
                </p>
                <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                  Ozveme se vám do jednoho pracovního dne s nabídkou na míru.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-1.5 block text-muted-foreground">
                      Jméno a příjmení
                    </span>
                    <input
                      required
                      type="text"
                      name="jmeno"
                      placeholder="Jan Novák"
                      className="w-full rounded-xl border border-input bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-primary"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1.5 block text-muted-foreground">
                      Společnost
                    </span>
                    <input
                      type="text"
                      name="spolecnost"
                      placeholder="Novák s.r.o."
                      className="w-full rounded-xl border border-input bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-primary"
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-muted-foreground">
                    E-mail
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="jan@spolecnost.cz"
                    className="w-full rounded-xl border border-input bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-primary"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-muted-foreground">
                    Délka smlouvy
                  </span>
                  <select
                    name="delka_smlouvy"
                    value={String(selected)}
                    onChange={(e) =>
                      setSelected(
                        e.target.value === "nevím"
                          ? "nevím"
                          : Number(e.target.value),
                      )
                    }
                    className="w-full rounded-xl border border-input bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-primary"
                  >
                    <option className="bg-background" value="12">
                      12 měsíců — 349 Kč/měs.
                    </option>
                    <option className="bg-background" value="24">
                      24 měsíců — 299 Kč/měs.
                    </option>
                    <option className="bg-background" value="36">
                      36 měsíců — 249 Kč/měs.
                    </option>
                    <option className="bg-background" value="nevím">
                      Ještě nevím
                    </option>
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-muted-foreground">
                    Zpráva
                  </span>
                  <textarea
                    rows={3}
                    name="zprava"
                    placeholder="Popište, co potřebujete…"
                    className="w-full resize-none rounded-xl border border-input bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-primary"
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full bg-primary py-3 font-display text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Odesílám…" : "Odeslat poptávku"}
                </button>
                {errorMsg && (
                  <p className="text-center text-xs text-destructive">
                    {errorMsg}
                  </p>
                )}
                <p className="text-center text-xs text-muted-foreground">
                  Odesláním souhlasíte se zpracováním údajů. Žádný spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="text-center md:text-left">
            <p>© 2026 123Sídla · Václavské náměstí 782/22, 110 00 Praha 1</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Ochrana údajů
            </a>
            <a href="#" className="transition hover:text-white">
              Obchodní podmínky
            </a>
            <a
              href="mailto:Info@123sidla.cz"
              className="transition hover:text-white"
            >
              Info@123sidla.cz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
