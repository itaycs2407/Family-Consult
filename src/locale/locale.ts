import { Language, Translation } from "../types/types";

const translate: Translation = {
  en: {
    contact: "Contact Us",
  },
  he: {
    contact: "צור קשר",
    navBarItemHome: "בית",
    navBarItemAboutMe: "אודותי",
    navBarItemSingleConsult: "ייעוץ פרטני",
    navBarItemWorkshop: "סדנאות",
    navBarItemContactMe: "צור קשר",
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
