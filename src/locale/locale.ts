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
    workshopPressForMoreDetails: "לחץ לקבלת פרטים",
    homeIntroHeader: "קצת עלי",
    homeIntro:
      " כאמא לשולשה ילדים אני מרגישה שהעידן בו אנו חיים מזמן לנו אתגרים\n" +
      "          שהורינו לא חבו: רצון במימוש עצמי לצד הורות מספקת, עומס מידע, רשתות\n" +
      "          חברתיות ועוד' . אנו מוצפים במידע על איך להיות הורים ומה כדאי לעשות\n" +
      "          ואיך לנהוג ומתוך כל המידע והשיטות לעיתים קשה לנו לראות מה נכון לנו\n" +
      "          ולמשפחתנו ואיך לאזן בין ההורות לשאר תחומי החיים. אני מאמינה שאפשר גם\n" +
      "          להיות הורים טובים וגם למשש את עצמנו כאישיות נפרדת, שאין הורות אחת שהיא\n" +
      "          נכונה ושכל הורה צריך למצוא את הדרך המתאימה עבורו ועבור משפחתו. יחד\n" +
      "          נתמודד עם האתגרים, נמצא פתרונות ונעבור תהליך​ שיעזור לכם למצוא את\n" +
      "          ההורים שטבעי לכם להיות.",
  },
};

export const locale = (key: string, lang: Language = "he") => {
  return translate[lang][key];
};
