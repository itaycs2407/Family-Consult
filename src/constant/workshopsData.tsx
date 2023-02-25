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
    title: "הרצאות וסדנאות להורים",
    description:
      "הרצאות וסדנאות מגוונות בנושאים שונים מעולם ההורות, לקבוצות פרטיות ולארגונים, בהתאמה לצורכי הקבוצה",
    image: becomingParents,
  },
  {
    key: "parentsPrepare",
    title: "הכנה להורות",
    description:
      "סדנה חשובה להורים לעתיד הכוללת הכנה, מידע וכלים מעשיים להתמודדות עם התקופה הצפויה והאתגרים הטמונים בה",
    image: parents,
  },
  {
    key: "natureMothers",
    title: "מעגלי אמהות לאחר לידה בטבע",
    description:
      "מעגלי אמהות אחת לשבוע בחיק הטבע ליצירת זמן איכותי לאם ולתינוק וקבלת כלים חשובים להתנהלות נכונה ולהתפתחות התינוק",
    image: mothers,
  },
  {
    key: "mothers",
    title: "מפגשי אמהות לאחר לידה",
    description:
      "מפגשים חווייתייים ומעצימים אחת לשבוע, לאם ולתינוק באווירה נעימה ועם המון ערך וכלים מעשיים",
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
    withBullet: true,
    withSumUpItems: true,
    sumUpItems: ["מותאם לצרכי הקבוצה", "בזום או אצלכם", "פרקטי וחוויתי"],
    contentPromo: [
      "חווית הההורות מזמנת לנו רגעים מספקים אך גם דילומות ואתגרים. בואו להתמודד איתם יחד!",
      "מגוון סדנאות חויתיות המעניקות כלים פרקטים להורות מיטיבית.",
      "הסדנאות מותאמות לצורכי הקבוצה וניתן להזמין סדנה של כמה מפגשים או הרצאה בודדת.",
      "מתאים לארגונים ולקבוצות פרטיות.",
    ],
    content: [
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
    withBullet: false,
    withSumUpItems: false,
    newContentPromo: [
      { content: "מזל טוב! אתם עומדים להיות הורים!", bold: false },
      { content: "בטח כבר הכנתם רשימת קניות לתינוק החדש,", bold: false },
      { content: "התייעצתם עם כל החברים איזו עגלה כדאי לקנות", bold: false },
      { content: "ואולי אפילו הספקתם לצבוע את החדר...", bold: false },
      { content: "", bold: false },
      { content: "ועכשיו אתם מוכנים?", bold: false },
      { content: "אז זהו, שלא...", bold: false },
      { content: "תקופת ההריון מלווה בהרבה התרגשות,", bold: true },
      { content: "הכנות, התארגנות ולחץ,", bold: true },
      { content: "אבל הרבה פעמים אנחנו לא", bold: true },
      {
        content: 'עוצרים רגע וחושבים "איך החיים שלנו עומדים להשתנות"?!',
        bold: true,
      },
      {
        content: "לאחר שליוויתי אמהות ואבות שחוו מצוקה רגשית לאחר הלידה",
        bold: false,
      },
      { content: 'והרגישו ש"אף אחד לא הכין אותם לזה",', bold: false },
      { content: "יצרתי סדנת הכנה להורות כדי להעניק להורים לעתיד", bold: true },
      { content: "מידע, הכנה וכלים שיעזרו לכם להתמודד עם האתגרים", bold: true },
      {
        content: "הצפויים לאחר הלידה ויקלו עליכם בהסתגלות למציאות החדשה.",
        bold: true,
      },
    ],
    tools: {
      header: { content: "הכלים שתקבלו בסדנה", color: "pink" },
      toolsData: [
        {
          icon: "",
          title: { content: "הפחתת המתח", bold: true },
          content: {
            content:
              "בסדנה נשוחח על הציפיות, הפחדים והחששות לקראת הלידה ולאחריה ונפחית את המתח.",
          },
        },
        {
          icon: "",
          title: { content: "הכנה לעתיד לבוא", bold: true },
          content: {
            content:
              "נכיר את השינויים שעתידים להגיע לאחר הלידה ונתכונן אליהם: שינויים במערכת הזוגית, שינויים בתפקידים בבית, שינויים בהתנהלות היומיומית ואפילו בזמני השינה.",
          },
        },
        {
          icon: "",
          title: { content: "בניית תקשורת זוגית טובה", bold: true },
          content: {
            content:
              "נבין כיצד לבנות תקשורת זוגית טובה כבסיס חזק ויציב למשפחה המתרחבת.",
          },
        },
        {
          icon: "",
          title: {
            content: "התמודדות נכונה עם התקופה הראשונה של התינוק",
            bold: true,
          },
          content: {
            content:
              "התקופה הראשונה של התינוק בבית היא מאתגרת ומרגשת כאחד! בסדנה נקבל כלים פרקטיים להתמודדות מיטבית בתקופה הזו.",
          },
        },
      ],
    },
    sumUp: [
      {
        content: "רוצים להצטרף לסדנת הכנה להורות מעשירה ומעצימה?",
        color: "pink",
      },
      {
        content: "רוצים להתכונן בצורה הטובה ביותר לקראת התקופה הצפויה לכם",
        color: "pink",
      },
      { content: "ולקבל כלים להתמודדות עם האתגרים הטמונים בה?", color: "pink" },
      {
        content: "הסדנאות מתקיימות בזום או בקליניקה ומותאמות לערכי המשפחה שלכם",
        color: "pink",
      },
    ],
  },
  natureMothers: {
    images: [natureMother1, natureMother2, natureMother3],
    header: getHeader("natureMothers"),
    withBullet: false,
    withSumUpItems: false,
    contentPromo: [],
    sumUpItems: [],
    content: [
      "נמצאת לאחר לידה ? נמאס לך להסתובב בקניונים? מחפשת מקום שלך יהיה נעים וכיף להגיע אליו ושבו אפשר להתייעץ לחלוק חוויות ולקבל ידע מקצועי ?",
      "הצטרפי למעגלי אמהות בטבע - זמן איכות שלך ושל תינוקך בחיק הטבע.",
      "השהות בטבע יכולה לתרום לתחושת הרווחה האישית שלך בנוסף , תינוקות רבים רגועים יותר בחוץ. החשיפה לעולם הטבע  כבר בגיל הרך  תורמת לפיתוח כושר ההתבוננות והחקר, מפתחת  עצמאות, סקרנות ויוזמה.",
      "אנו ניפגש בבקרים, אחת לשבוע אמהות ותינוקות. החלק ראשון יוקדש לך אמא יקרה, לאתגרים העומדים לפניך, השינוי וההפיכה לאם, חווית הלידה, זוגיות לאחר לידה איך יוצרים איזון ומוצאים גם זמן לעצמי וגם לתינוק? ועוד. החלק השני יוקדש לפעילות חוויתית עם התינוק.ת שבה תקבלי כלים מעשיים העוסקים בהתפתחות תינוקך.",
      "בפרויקט זה אני משלבת בין הכשרתי כיועצת משפחות והן בהכשרתי כמורת דרך מוסמכת בחלק מסידרת המפגשים נערוך גם טיול עגלות.",
    ],
  },
  mothers: {
    images: [Mother1, Mother2, Mother3],
    header: getHeader("mothers"),
    withBullet: false,
    withSumUpItems: false,
    contentPromo: [],
    sumUpItems: [],
    content: [
      "נמצאת לאחר לידה ומחפשת מקום בו, יהיה לך נעים וכיף להגיע אליו ?",
      "מקום בו אפשר להתייעץ לחלוק חוויות ולקבל ידע מקצועי?",
      "הצטרפי לבוקר של כיף מעשיר ומפנק.",
      "אנו ניפגש בבקרים, אחת לשבוע אמהות ותינקות. החלק ראשון יוקדש לך אמא יקרה, לאתגרים העומדים לפניך, השינוי וההפיכה לאם, חווית הלידה, זוגיות לאחר לידה איך יוצרים איזון ומוצאים גם זמן לעצמי וגם לתינוק? ועוד.",
      "החלק השני יוקדש לפעילות חוויתית עם התינוק.ת שבה תקבלי כלים מעשיים העוסקים בהתפתחות תינוקך.",
    ],
  },
};
