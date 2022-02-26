type Language = "en" | "he";

const translate: { [id: string]: { [id: string]: string | Array<string> } } = {
  en: {
    contact: "Contact Us",
  },
  he: {
    contact: "צור קשר",
    fullName: "שם מלא",
    email: "דואר אלקטרוני",
    phoneNumber: "טלפון",
    send: "שלח",
    moreInfoKey: "אחר",
    moreInfoPlaceholder: "תיאור קצר של הפנייה...",
    contactReason: "סיבת פנייה",
    contactReasons: ["ייעוץ פרטני", "סדנאות", "אחר"],
  },
};

export const locale = (key: string, lang: Language = "he") => {
  return translate[lang][key];
};
