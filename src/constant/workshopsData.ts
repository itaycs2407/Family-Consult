import { WorkshopInfo } from "../types/types";
import defaultImage from "../assets/workshop/defualt.jpg";
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
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: becomingParents,
  },
  {
    key: "parentsPrepare",
    title: "הכנה להורות",
    description:
      "כבר הכנתם רשימה איזה מוצרים לרכוש לתינוק.ת החדש.ה" +
      "התיעצתם עם השכן והחברה איזה עגלה לקנות ואיזה כיסא, אבל האם עצרתם לחשוב איך תרגישו אחרי הלידה? מה ישתנה בחייכם?" +
      "איך יראו חיי הזוגיות שלכם כהורים? איך תראה המשפחה החדשה?" +
      "אני מזמינה אותכם לסדנא הכנה להורות שבה תקבלו מידע על התקופה הצפויה  וכלים להתמודד עם האתגרים הטמונים בה. נשוחח על " +
      "הציפיות הפחדים והחששות ונפחית את המתח. נבין כיצד בונים תקשורת זוגית  טובה כבסיס למשפחה המתרחבת.",
    image: parents,
  },
  {
    key: "natureMothers",
    title: "מעגלי אמהות לאחר לידה בטבע",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: mothers,
  },
  {
    key: "mothers",
    title: "מפגשי אמהות לאחר לידה",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
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
  },
  parentsPrepare: {
    images: [parentsPrepare1, parentsPrepare2, parentsPrepare3],
    header: getHeader("parentsPrepare"),
    content:
      "כבר הכנתם רשימה איזה מוצרים לרכוש לתינוק.ת החדש.ה\n" +
      "התיעצתם עם השכן והחברה איזה עגלה לקנות ואיזה כיסא, אבל האם עצרתם לחשוב איך תרגישו אחרי הלידה? מה ישתנה בחייכם?\n" +
      "איך יראו חיי הזוגיות שלכם כהורים? איך תראה המשפחה החדשה?\n" +
      "\n" +
      "אני מזמינה אותכם לסדנאת הכנה להורות שבה תקבלו מידע על התקופה הצפויה  וכלים להתמודד עם האתגרים הטמונים בה. \n" +
      'הסדנא נוצרה בעקבות שיחות רבות עם אמהות ואבות שהרגישו ש"אף אחד לא הכין אותם לזה" ועל כן חלקם חוו מצוקה רגשית לאחר לידת הילד/ה. \n' +
      "אני מאמינה שמתן ידע וכלים לפני הלידה יסייעו ויקלו עליכם בהסתגלות למציאות החדשה.  \n" +
      "\n" +
      "בסדנא  נשוחח על הציפיות, הפחדים והחששות ונפחית את המתח.  \n" +
      "נכיר את השינויים שיחלו אחרי הלידה.\n" +
      " נבין כיצד בונים תקשורת זוגית  טובה כבסיס למשפחה המתרחבת.\n" +
      "נלמד כלים פרקטים להתמודדות עם התקופה הראשונה המאתגרת והמרגשת.",
  },
  natureMothers: {
    images: [natureMother1, natureMother2, natureMother3],
    header: getHeader("natureMothers"),
  },
  mothers: {
    images: [Mother1, Mother2, Mother3],
    header: getHeader("mothers"),
  },
};
