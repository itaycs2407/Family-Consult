import { WorkshopInfo } from "../types/types";
import defaultImage from "../assets/workshop/defualt.jpg";
import parents from "../assets/workshop/workshop-parents.jpeg";
import becomingParents from "../assets/workshop/workshop-becomingParetnts.jpeg";
import mothers from "../assets/workshop/workshop-mother.jpeg";

export const LANGUAGE = "he";

export const colors = {
  1: "#d9d9d8",
  2: "#f8d6de",
  3: "#f7cad6",
  4: "#d2d1d1",
  5: "#e4e1dd",
};

export const workshopData: Array<WorkshopInfo> = [
  {
    title: "סדנאות הורים",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: becomingParents,
  },
  {
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
    title: "מעגלי אמהות לאחר לידה",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: mothers,
  },
  {
    title: "משפחה בטבע",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: defaultImage,
  },
];
