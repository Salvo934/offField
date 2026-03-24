/** Recapiti — usati in footer, CTA e modulo contatti */
export const CONTACT = {
  email: "salvo.bonavita9808@gmail.com",
  /** Per wa.me (solo cifre, con prefisso paese) */
  whatsappE164: "393274597773",
  /** Per attributo tel: */
  phoneHref: "+393274597773",
  /** Testo leggibile (internazionale) */
  phoneDisplay: "+39 327 459 7773",
  whatsappDisplay: "+39 327 459 7773",
  /** Numero mostrato in UI (stesso per WA e telefono) */
  localMobileDisplay: "327 459 7773",
} as const;

export function whatsappHref(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappE164}?text=${text}`;
}

export function mailtoHref(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${CONTACT.email}?${params.toString()}`;
}

export function telHref(): string {
  return `tel:${CONTACT.phoneHref}`;
}
