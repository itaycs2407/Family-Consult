import { Language } from "../types/types";

const translate: any = {
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
    moreInfoPlaceholder: "תיאור קצר של הפנייה...",
    contactReason: "סיבת פנייה",
    contactReasons: {
      consult: "ייעוץ פרטני",
      workshops: "סדנאות",
      other: "אחר",
    },
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
    personalConsultHeader: "הדרכת הורים פרטנית",
    personalConsultSentences: [
      "לכולנו יש ציפיות מההורות שלנו ומהילדים, אבל לא פעם אנחנו מרגישים שהדברים אינם מתנהלים כפי שרצינו.",
      "בתקופות מסוימות אנו מוצאים את עצמנו חסרי אונים מול האתגרים, שהילדים מציבים לנו ואנחנו מרגישים שאף על פי ",
      "שאנחנו עושים את הטוב ביותר שאנו יודעים, הדברים לא מתנהלים כפי שרצינו. ",
      "אנו מוצפים במידע על איך להיות הורים ומה כדאי לעשות ואיך לנהוג ומתוך כל המידע והשיטות לעיתים קשה לנו ",
      "לראות מה נכון לנו ולמשפחתנו ואיך להתמודד עם האתגרים. ",
      "יחד, נזהה את הקשיים הקיימים, נייצר פתרונות מעשיים המתאימים לכם וניצור שלווה ושמחה בבית. ",
      "אני מאמינה בהדרכה פרטית המותאמת לערכי המשפחה בתהליך ממוקד הנותן מענה לצרכיהם ולרגשותיהם של כלל ",
      "חברי המשפחה. ",
      "הייעוץ ניתן במגווון תחומים:",
    ],
    personalConsultBullets: [
      "שיפור האווירה והתקשורת במשפחה - איך להכניס לבית שיתוף חיוביות ושמחה",
      "סמכות הורית - איך לחזק את המערכת היחסים בין ההורים לילדים וליצור סביבה משפחתית מכבדת, מאפשרת וגם מחנכת וסמכותית.",
      "שיפור היחסים בתוך המשפחה - חיכוכים מתח וקשיים בינאישיים המשפיעים על המשפחה כולה.",
      " כניסה למסגרות חדשות.",
      "גמילה.",
      "הרחבת המשפחה.",
      " מריבות בן אחים.",
      "התמודדות עם התנהגויות שליליות של הילדים.",
      "תמיכה ויעוץ להורים חדשים",
      "שיפור האווירה והתקשורת במשפחה - איך להכניס לבית שיתוף חיוביות ושמחה.",
      "הכנה להורות – הכנה לקראת המעבר מזוגיות להורות .",
    ],
    personalConsultSumUp: "אל תשארו עם האתגרים לבד",
    personalConsultFinalBullets: [],
    workshopSinglePageRedirectToContact: "להרשמה ופרטים נוספים",
    consultRedirectToContact: "להפנייה",
    workshopsHeader: "הסדנאות שלי",
    emailSendConfirmation: "ההודעה נשלחה בהצלחה",
  },
};

export const locale = (key: string, lang: Language = "he") => {
  return translate[lang][key];
};
