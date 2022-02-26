import { WorkshopInfo } from "../types/types";
import defaultImage from "../assets/workshop/defualt.jpg";

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
    image: defaultImage,
  },
  {
    title: "הכנה להורות",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: defaultImage,
  },
  {
    title: "מעגלי אמהות לאחר לידה",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: defaultImage,
  },
  {
    title: "משפחה בטבע",
    description: "פה צריך להיות את תיאור הסדנה בערך שלוש שורות של קשקושים",
    image: defaultImage,
  },
];
