import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

// Odesílá poptávku z kontaktního formuláře e-mailem přes SMTP schránky
// info@123sidla.cz (ne přes cizí službu typu FormSubmit). Přihlašovací
// údaje se берou z proměnných prostředí nastavených na hostingu — viz
// NAVOD.md, sekce "Proměnné prostředí pro e-mail formuláře".

const contactSchema = z.object({
  jmeno: z.string().trim().min(1, "Vyplňte prosím jméno."),
  spolecnost: z.string().trim().optional(),
  email: z.string().trim().email("Zadejte platný e-mail."),
  delkaSmlouvy: z.string().trim(),
  zprava: z.string().trim().optional(),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_EMAIL || "info@123sidla.cz";
    const from = process.env.SMTP_FROM || user;

    if (!host || !user || !pass) {
      console.error(
        "Chybí SMTP_HOST / SMTP_USER / SMTP_PASS v proměnných prostředí — formulář nemůže odeslat e-mail.",
      );
      throw new Error(
        "E-mail se nepodařilo odeslat, zkuste to prosím později nebo napište přímo na Info@123sidla.cz.",
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = SSL/TLS od začátku; 587 = STARTTLS
      auth: { user, pass },
    });

    const radky = [
      `Jméno a příjmení: ${data.jmeno}`,
      `Společnost: ${data.spolecnost || "—"}`,
      `E-mail: ${data.email}`,
      `Délka smlouvy: ${data.delkaSmlouvy}`,
      "",
      "Zpráva:",
      data.zprava || "—",
    ].join("\n");

    try {
      await transporter.sendMail({
        from: `"123Sídla — web" <${from}>`,
        to,
        replyTo: data.email,
        subject: `Nová poptávka z webu 123Sídla — ${data.jmeno}`,
        text: radky,
      });
    } catch (err) {
      console.error("Odeslání e-mailu selhalo:", err);
      throw new Error(
        "E-mail se nepodařilo odeslat, zkuste to prosím později nebo napište přímo na Info@123sidla.cz.",
      );
    }

    return { ok: true } as const;
  });
