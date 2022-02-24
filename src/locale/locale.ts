type Language = "en" | "he";

const translate: { [id: string]: { [id: string]: string } } = {
  en: {
    contact: "Contact Us",
  },
  he: {
    contact: "צור קשר",
    fullName: "שם מלא",
    email: "דואר אלקטרוני",
    phoneNumber: "טלפון",
    send: "שלח",
  },
};

export const locale = (key: string, lang: Language = "he") => {
  return translate[lang][key];
};
