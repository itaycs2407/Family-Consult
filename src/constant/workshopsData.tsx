import { WorkshopInfo } from "../types/types";
import defaultImage from "../assets/workshop/defualt.png";
import parents from "../assets/workshop/workshop-parents.jpeg";
import becomingParents from "../assets/workshop/workshop-becomingParetnts.jpeg";
import mothers from "../assets/workshop/workshop-mother.jpeg";

import parentsPrepare1 from "../assets/workshop/parentsPrepare/parentsPrepare1.png";
import parentsPrepare2 from "../assets/workshop/parentsPrepare/parentsPrepare2.png";
import parentsPrepare3 from "../assets/workshop/parentsPrepare/parentsPrepare3.png";
import promoImageParentsPrepare from "../assets/workshop/parentsPrepare/white-image.png";

import parents1 from "../assets/workshop/parents/parents1.png";
import parents2 from "../assets/workshop/parents/parents2.png";
import parents3 from "../assets/workshop/parents/parents3.png";
import promoImageParents from "../assets/workshop/parents/promoImage.jpg";

import natureMother1 from "../assets/workshop/natureMother/natureMother1.png";
import natureMother3 from "../assets/workshop/natureMother/natureMother3.jpg";

import Mother1 from "../assets/workshop/mothers/mothers1.png";
import Mother3 from "../assets/workshop/mothers/mothers3.png";
import card1 from "../assets/workshop/mothers/card1.png";
import card2 from "../assets/workshop/mothers/card2.png";
import promoImageMother from "../assets/workshop/mothers/mothers2.png";

import { ReactComponent as FutureToCome } from "../assets/workshop/parentsPrepare/futureToCome.svg";
import { ReactComponent as MartialComm } from "../assets/workshop/parentsPrepare/martialComm.svg";
import { ReactComponent as Right } from "../assets/workshop/parentsPrepare/right.svg";
import { ReactComponent as StressRest } from "../assets/workshop/parentsPrepare/stressRest.svg";

import { ReactComponent as ChildrenAsParents } from "../assets/workshop/parents/childrenAsPartners.svg";
import { ReactComponent as Communication } from "../assets/workshop/parents/communication.svg";
import { ReactComponent as Faith } from "../assets/workshop/parents/faith.svg";
import { ReactComponent as GardenMature } from "../assets/workshop/parents/gardenMature.svg";
import { ReactComponent as NiceClimate } from "../assets/workshop/parents/niceClimate.svg";
import { ReactComponent as PowerParents } from "../assets/workshop/parents/powerParent.svg";
import { ReactComponent as Rehab } from "../assets/workshop/parents/rehab.svg";
import { ReactComponent as Sex } from "../assets/workshop/parents/sex.svg";

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
    promoImage: promoImageParents,
    newContentPromo: [
      {
        content: "להיות הורים זה התפקיד הכי חשוב ומשמעותי שקיבלנו,",
        bold: false,
      },
      { content: "אבל חייבים להודות שלא הכל ורוד ונצנצים...", bold: false },
      { content: "חוויית ההורות אמנם מספקת לנו המון רגעים יפים", bold: true },
      {
        content: "אך גם מציפה הרבה דילמות ואתגרים שלא הכרנו קודם.",
        bold: true,
      },
      { content: "כדי להתמודד עם הקשיים הללו,", bold: false },
      { content: "יצרתי סדרת סדנאות והרצאות להורים", bold: false },
      { content: "המעניקה כלים יישומיים וחשובים", bold: false },
      { content: "להתנהלות נכונה ולשיפור האווירה בבית.", bold: false },
      { content: "הסדנאות מתאימות לארגונים ולקבוצות פרטיות,", bold: true },
      { content: "ומותאמות לצורכי הקבוצה.", bold: true },
      { content: "ניתן להזמין סדנה של כמה מפגשים או הרצאה בודדת.", bold: true },
    ],
    tools: {
      header: {
        content: "הסדנאות וההרצאות מועברות בנושאים הבאים:",
        color: "pink",
      },
      toolsData: [
        {
          icon: <PowerParents height="50px" width="50px" />,
          title: { content: "העצמת הסמכות ההורית", bold: true },
          content: {
            content:
              "הבנת הכוח שלנו כהורים ויצירת סמכות הורית בבית תוך חיזוק מערכת היחסים עם הילד",
          },
        },
        {
          icon: <NiceClimate height="50px" width="50px" />,
          title: { content: "גבולות ואווירה נעימה בבית", bold: true },
          content: {
            content:
              "כיצד להציב גבולות בלי לגרור תגובות נגד, ולשפר את האווירה הכללית בבית",
          },
        },
        {
          icon: <Faith height="50px" width="50px" />,
          title: { content: "אמון בילד", bold: true },
          content: {
            content:
              "כיצד להאמין בילד ולסמוך עליו וכך לחזק אצלו את תחושת המסוגלות והביטחון העצמי.",
          },
        },
        {
          icon: <ChildrenAsParents height="50px" width="50px" />,
          title: { content: "ילדים כשותפים במשפחה", bold: true },
          content: {
            content:
              "כיצד להעניק לילדים מקום של כבוד ולשתף אותם בהתנהלות המשפחתית וכך להגדיל את הביטחון העצמי ויכולת המסוגלות שלהם",
          },
        },
        {
          icon: <Communication height="50px" width="50px" />,
          title: { content: "יצירת תקשורת משמעותית", bold: true },
          content: {
            content:
              "כיצד לנהל עם הילד תקשורת משמעותית, מכילה ופתוחה שתלווה אתכם שנים קדימה",
          },
        },
        {
          icon: <Sex height="50px" width="50px" />,
          title: { content: "מיניות בגיל הרך", bold: true },
          content: {
            content: "נעסוק בשאלת המיניות בגיל הרך ונלמד איך להתמודד עם הנושא",
          },
        },
        {
          icon: <Rehab height="50px" width="50px" />,
          title: { content: "גמילה מחיתולים", bold: true },
          content: {
            content:
              "השלב ממנו כל הורה מפחד! נלמד איך לעבור את התקופה בצורה הטובה והמהירה ביותר",
          },
        },
        {
          icon: <GardenMature height="50px" width="50px" />,
          title: { content: "הסתגלות לגן", bold: true },
          content: {
            content:
              "נקבל כלים מעשיים וחשובים כדי להקל את המעבר של הילד לגן ולאפשר לו להסתגל בצורה טובה",
          },
        },
      ],
    },
  },
  parentsPrepare: {
    images: [parentsPrepare1, parentsPrepare2, parentsPrepare3],
    promoImage: promoImageParentsPrepare,
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
          icon: <Right height="50px" width="50px" />,
          title: {
            content: "התמודדות נכונה עם התקופה הראשונה של התינוק",
            bold: true,
          },
          content: {
            content:
              "התקופה הראשונה של התינוק בבית היא מאתגרת ומרגשת כאחד! בסדנה נקבל כלים פרקטיים להתמודדות מיטבית בתקופה הזו.",
          },
        },
        {
          icon: <StressRest height="50px" width="50px" />,
          title: { content: "הפחתת המתח", bold: true },
          content: {
            content:
              "בסדנה נשוחח על הציפיות, הפחדים והחששות לקראת הלידה ולאחריה ונפחית את המתח.",
          },
        },
        {
          icon: <FutureToCome height="50px" width="50px" />,
          title: { content: "הכנה לעתיד לבוא", bold: true },
          content: {
            content:
              "נכיר את השינויים שעתידים להגיע לאחר הלידה ונתכונן אליהם: שינויים במערכת הזוגית, שינויים בתפקידים בבית, שינויים בהתנהלות היומיומית ואפילו בזמני השינה.",
          },
        },
        {
          icon: <MartialComm height="50px" width="50px" />,
          title: { content: "בניית תקשורת זוגית טובה", bold: true },
          content: {
            content:
              "נבין כיצד לבנות תקשורת זוגית טובה כבסיס חזק ויציב למשפחה המתרחבת.",
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
    images: [natureMother1, natureMother3],
    header: getHeader("natureMothers"),
    newContentPromo: [
      { content: "ילדת? מזל טוב!", bold: false },
      { content: "נמאס לך להסתובב בקניונים?", bold: false },
      { content: "", bold: false },
      {
        content:
          "מחפשת מקום שלך יהיה נעים וכיף להגיע עליו, שבו אפשר להתייעץ לחלוק",
        bold: false,
      },
      { content: "חוויות ולקבל ידע מקצועי?", bold: false },
      { content: "הצטרפי למעגלי אמהות בטבע,", bold: true, color: "deeppink" },
      {
        content: "לזמן איכות מעשיר שלך ושל תינוקך",
        bold: true,
        color: "deeppink",
      },
      {
        content: "באווירה נעימה, במקום בו אפשר להתייעץ,",
        bold: true,
        color: "deeppink",
      },
      {
        content: "לחלוק חוויות ולקבל ידע מקצועי.",
        bold: true,
        color: "deeppink",
      },
      { content: "" },
      { content: "אבל למה טבע?", bold: true },
      { content: "" },
      { content: "אחרי לידה, לא קל לנו." },
      { content: "הגוף כואב, הלילות השתנו," },
      { content: "אין זמן לעצמנו והכל מרגיש בבלאגן." },
      {
        content: "השהות בטבע יכולה לתרום לתחושת הרווחה האישית שלך",
        bold: true,
      },
      { content: "וגם להרגיע את התינוק ולהעניק לך זמן לנשום.", bold: true },
      { content: "מעבר לזה, החשיפה לעולם הטבע כבר בגיל הרך", bold: true },
      { content: "תורמת לפיתוח כושר ההתבוננות והחקר,", bold: true },
      { content: "מפתחת עצמאות, סקרנות ויוזמה.", bold: true },
    ],
    cards: {
      header: { content: "אז מה המפגש כולל?", color: "pink" },
      cardsData: [
        {
          title: {
            content: "את במרכז!",
          },
          content: {
            content:
              "החלק הראשון במפגש יוקדש לך אמא יקרה,\n" +
              "לאתגרים העומדים בפנייך,\n" +
              "השינוי וההפיכה לאם,\n" +
              "חוויית הלידה, זוגיות לאחר לידה,\n" +
              "איך ליצור איזון ולמצוא גם זמן לעצמך וגם לתינוק,",
          },
          image: "string",
        },
        {
          title: {
            content: "חוויות משותפות",
          },
          content: {
            content:
              "החלק השני של המפגש יוקדש לפעילות חוויתית עם התינוק\n" +
              "בה תצברי רגעים יפים וזכרונות קסומים\n" +
              "וגם תקבלי כלי מעשיים העוסקים בהתפתחות תינוקך.",
          },
          image: "string",
        },
      ],
    },

    sumUp: [
      {
        content: "רוצה להעניק לעצמך בוקר מפנק ורגוע בחיק הטבע אחת לשבוע?",
        color: "pink",
      },
      {
        content:
          "רוצה להיות חלק ממעגל אמהות שחווה את אותן חוויות ואתגרים כמוך?",
        color: "pink",
      },
    ],
  },
  mothers: {
    images: [Mother1, Mother3],
    header: getHeader("mothers"),
    promoImage: promoImageMother,
    newContentPromo: [
      {
        content: "ילדת? מזל טוב!",
        bold: false,
      },
      {
        content: "הגעת הביתה עם התינוק החדש",
        bold: false,
      },
      {
        content: 'וישר קיבלת "מתנה" -',
        bold: false,
      },
      {
        content: "חופשת לידה!",
        bold: true,
      },
      {
        content: "",
      },
      {
        content: "אז חופשה, זה לא.",
        bold: true,
      },
      {
        content: "את מוצאת את עצמך קמה בלילה כמה פעמים",
        bold: false,
      },
      {
        content: "להחליף חיתול, להאכיל או סתם לבדוק שהתינוק נושם...",
        bold: false,
      },
      {
        content: "ובמהלך היום את מבלה כל הזמן עם הקטנצ'יק",
        bold: false,
      },
      {
        content: "וכבר כמעט שוכחת איך לדבר עם אנשים מבוגרים!",
        bold: false,
      },
      {
        content: "",
      },
      {
        content: "מגיע לך זמן איכותי לעצמך ",
        bold: true,
      },
      {
        content: "עם אמהות שנמצאות באותה תקופה עמוסה",
        bold: true,
      },
      {
        content: "ומחפשות רגע מפלט,",
        bold: true,
      },
      {
        content: "מקום נעים שכיף להגיע אליו,",
        bold: true,
      },
      {
        content: "מקום מכיל שמאפשר להתייעץ, לחלוק חוויות ולקבל ידע מקצועי!",
        bold: true,
      },
    ],
    cards: {
      header: { content: "אז מה המפגש כולל?", color: "pink" },
      cardsData: [
        {
          title: {
            content: "את במרכז!",
          },
          content: {
            content:
              "החלק הראשון במפגש יוקדש לך אמא יקרה, \n" +
              "לאתגרים העומדים בפנייך,\n" +
              "השינוי וההפיכה לאם,\n" +
              "חוויית הלידה, זוגיות לאחר לידה,\n" +
              "איך ליצור איזון ולמצוא גם זמן לעצמך וגם לתינוק,\n" +
              "ועוד...",
          },
          image: card1,
        },
        {
          title: {
            content: "חוויות משותפות",
          },
          content: {
            content:
              "החלק השני של המפגש יוקדש לפעילות חוויתית עם התינוק \n" +
              "בה תצברי רגעים יפים וזכרונות קסומים\n" +
              "וגם תקבלי כלי מעשיים העוסקים בהתפתחות תינוקך.\n",
          },
          image: card2,
        },
      ],
    },
  },
};
