import { WorkshopInfo } from "../types/types";
import defaultImage from "../assets/workshop/defualt.png";
import parents from "../assets/workshop/workshop-parents.jpeg";
import becomingParents from "../assets/workshop/workshop-becomingParetnts.jpeg";
import mothers from "../assets/workshop/workshop-mother.jpeg";

import parentsPrepare1 from "../assets/workshop/parentsPrepare/parentsPrepare1.png";
import parentsPrepare2 from "../assets/workshop/parentsPrepare/parentsPrepare2.png";
import parentsPrepare3 from "../assets/workshop/parentsPrepare/parentsPrepare3.png";

import parents1 from "../assets/workshop/parents/parents1.png";
import parents2 from "../assets/workshop/parents/parents2.png";
import parents3 from "../assets/workshop/parents/parents3.png";

import natureMother1 from "../assets/workshop/natureMother/natureMother1.png";
import natureMother2 from "../assets/workshop/natureMother/natureMother2.png";
import natureMother3 from "../assets/workshop/natureMother/natureMother3.jpg";

import Mother1 from "../assets/workshop/mothers/mothers1.png";
import Mother2 from "../assets/workshop/mothers/mothers2.png";
import Mother3 from "../assets/workshop/mothers/mothers3.png";

export const workshopsInfo: Array<WorkshopInfo> = [
  {
    key: "parents",
    title: "סדנאות הורים",
    image: becomingParents,
  },
  {
    key: "parentsPrepare",
    title: "הכנה להורות",
    image: parents,
  },
  {
    key: "natureMothers",
    title: "מעגלי אמהות לאחר לידה בטבע",
    image: mothers,
  },
  {
    key: "mothers",
    title: "מפגשי אמהות לאחר לידה",
    image: defaultImage,
  },
];

const getHeader = (key: string) =>
  workshopsInfo.find((workshop) => workshop.key === key)?.title ||
  "No title to show";

export const workshopsData = {
  parents: {
    images: [parents1, parents2, parents3],
    header: getHeader("parents"),
    content: [
      "ניתן להזמין סדנא של כמה מפגשים או הרצאה בודדת בנושא נבחר.",
      "סדנת הורים חוויתית שמטרתה לקבל כלים מעשיים להורות מיטבית להורים לילדים צעירים(0-9) הסדנא מותאמת לצורכי הקבוצה",
      "העצמת הסמכות ההורית",
      " גבולות ואווירה נעימה בבית",
      "כיצד להאמין בילד ולסמוך עליו",
      "ילדים כשותפים במשפחה",
      "יצירת תקשורת משמעותית",
      "מניות בגיל הרך",
      "גמילה מחיתולים",
      "הסתגלות לגן",
      "מעבר מהגן לכיתה א",
      "חופשות עם ילדים",
    ],
  },
  parentsPrepare: {
    images: [parentsPrepare1, parentsPrepare2, parentsPrepare3],
    header: getHeader("parentsPrepare"),
    content: [
      "כבר הכנתם רשימה אילו מוצרים לרכוש לתינוק.ת החדש.ה?   התיעצתם עם חברים ומשפחה איזו עגלה כדאי לקנות ?",
      "אבל האם עצרתם לחשוב איך תרגישו אחרי הלידה? מה ישתנה בחייכם?",
      "איך יראו חיי הזוגיות שלכם כהורים ?איך תראה המשפחה החדשה?",
      "אני מזמינה אותכם לסדנת הכנה להורות מעשירה ומעצימה ובה תקבלו מידע והכנה לקראת התקופה הצפויה וכלים להתמודד עם האתגרים הטמונים בה.",
      'הסדנה נוצרה בעקבות שיחות רבות שלי עם אימהות ואבות , שחוו מצוקה רגשית לאחר הלידה והרגישו ש"אף אחד לא הכין אותם לזה".',
      "אני מאמינה שמתן ידע וכלים לפני הלידה יסייעו ויקלו עליכם בהסתגלות למציאות החדשה.",
      "בסדנה נשוחח על הציפיות, הפחדים והחששות ונפחית את המתח.",
      "נכיר את השינויים שיחלו אחרי הלידה.",
      " נבין כיצד בונים תקשורת זוגית טובה כבסיס למשפחה המתרחבת.",
      "נלמד כלים פרקטים להתמודדות עם התקופה הראשונה המאתגרת והמרגשת.",
    ],
  },
  natureMothers: {
    images: [natureMother1, natureMother2, natureMother3],
    header: getHeader("natureMothers"),
    content: [
      "נמצאת לאחר לידה ? נמאס לך להסתובב בקניונים? מחפשת מקום שלך יהיה נעים וכיף להגיע עליו שבו אפשר להתייעץ לחלוק חוויות ולקבל ידע מקצועי. הצטרפי למעגלי אמהות בטבע זמן איכות שלך ושל תינוקך בחיק הטבע.",
      "השהות בטבע יכולה לתרום לתחושת הרווחה האישית שלך בנוסף , תינוקות רבים רגועים יותר בחוץ. החשיפה לעולם הטבע  כבר בגיל הרך  תורמת לפיתוח כושר ההתבוננות והחקר, מפתחת  עצמאות, סקרנות ויוזמה.",
      "אנו ניפגש בבקרים, אחת לשבוע אמהות ותינוקות. החלק ראשון יוקדש לך אמא יקרה, לאתגרים העומדים לפניך, השינוי וההפיכה לאם, חווית הלידה, זוגיות לאחר לידה איך יוצרים איזון ומוצאים גם זמן לעצמי וגם לתינוק? ועוד. החלק השני יוקדש לפעילות חוויתית עם התינוק.ת שבה תקבלו כלים מעשיים העוסקים בהתפתחות תינוקך.",
      "בפרויקט זה אני משלבת בין הכשרתי כיועצת משפחות והן בהכשרתי כמורת דרך מוסמכת בחלק מסידרת המפגשים נערוך גם טיול עגלות",
    ],
  },
  mothers: {
    images: [Mother1, Mother2, Mother3],
    header: getHeader("mothers"),
    content: [
      "נמצאת לאחר לידה ומחפשת מקום בו, יהיה לך נעים וכיף להגיע אלי",
      "מקום בו אפשר להתייעץ לחלוק חוויות ולקבל ידע מקצועי?",
      "הצטרפי לבוקר של כיף מעשיר ומפנק.",
      "אנו ניפגש בבקרים, אחת לשבוע אמהות ותינקות. החלק ראשון יוקדש לך אמא יקרה, לאתגרים העומדים לפניך, השינוי וההפיכה לאם, חווית הלידה, זוגיות לאחר לידה איך יוצרים איזון ומוצאים גם זמן לעצמי וגם לתינוק? ועוד.",
      "החלק השני יוקדש לפעילות חוויתית עם התינוק.ת שבה תקבלי כלים מעשיים העוסקים בהתפתחות תינוקך.",
    ],
  },
};
