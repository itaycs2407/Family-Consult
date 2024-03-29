import { ReactComponent as Faith } from "../assets/workshop/parents/faith.svg";

import { ReactComponent as Rehab } from "../assets/personal-consult/toolsIcons/rehab.svg";
import { ReactComponent as FamilyEnlarge } from "../assets/personal-consult/toolsIcons/familyEnlarge.svg";
import { ReactComponent as FixingConnections } from "../assets/personal-consult/toolsIcons/fixingConnections.svg";
import { ReactComponent as FixingFamily } from "../assets/personal-consult/toolsIcons/fixingFamily.svg";
import { ReactComponent as Negative } from "../assets/personal-consult/toolsIcons/negative.svg";
import { ReactComponent as NewFrame } from "../assets/personal-consult/toolsIcons/newFrame.svg";
import { ReactComponent as NewParents } from "../assets/personal-consult/toolsIcons/newParents.svg";
import { ReactComponent as ParentsAut } from "../assets/personal-consult/toolsIcons/parentsAut.svg";
import { ReactComponent as Brothers } from "../assets/personal-consult/toolsIcons/brothers.svg";
import { ReactComponent as Prepare } from "../assets/personal-consult/toolsIcons/prepare.svg";

export const personalConsultData: {
  intro: { content: string; bold?: boolean; color?: string }[];
  tools?: {
    icon: any;
    title: { content: string; bold: boolean };
    content: {
      content: string;
    };
  }[];
} = {
  intro: [
    {
      content: '"הילד לא אוכל ירקות, מה עושים?!"',
      bold: false,
    },
    {
      content: '"הילדה כבר בת 4 ואנחנו לא מצליחים להיפטר מהחיתול בלילה",',
      bold: false,
    },
    {
      content: '"הילד משתטח באמצע הרחוב אם אנחנו לא מקשיבים לו",',
      bold: false,
    },
    {
      content: '"למה כל מקלחת צריכה להוביל לצרחות וריבים?!",',
      bold: false,
    },
    {
      content: '"איך אפשר ליצור אווירה רגועה יותר בבית?!"',
      bold: false,
    },
    {
      content: "",
    },
    {
      content: "כל אלה הן שאלות לגיטימיות לחלוטין שאני שומעת מהורים רבים...",
      bold: false,
    },
    {
      content: "האמת היא שכשנכנסתם לנעליים הגדולות האלה של להיות הורים,",
      bold: false,
    },
    {
      content: "לא בהכרח חשבתם שזה יהיה כזה מסובך.",
      bold: false,
    },
    {
      content: "היו לכם ציפיות מההורות שלכם, מהילדים שלכם,",
      bold: true,
    },
    {
      content: "רציתם להיות רגועים איתם, לא להתעצבן,",
      bold: true,
    },
    {
      content: "הייתם בטוחים שהילד שלכם יהיה רגוע וקשוב - ",
      bold: true,
    },
    {
      content: "ואז המציאות הוכיחה שלא תמיד דברים מתנהלים כמו שקיוויתם.",
      bold: true,
    },
    {
      content: "החדשות הטובות הן שאתם לא לבד!",
      bold: false,
    },
    {
      content: "",
    },
    {
      content: "הורים רבים מתמודדים עם קשיים ואתגרים בהורות ",
      bold: true,
    },
    {
      content: "במיוחד בשנים הראשונות של הילד.",
      bold: true,
    },
    {
      content: "האמת היא שאנחנו מוצפים במידע ובהכוונה",
      bold: false,
    },
    {
      content: '"איך להיות הורה מדהים!" ו"מה כדאי או מה אסור לעשות", ',
      bold: false,
    },
    {
      content:
        "ולעיתים קשה לנו להבין מה נכון לנו כהורים, מה נכון לילד ולמשפחה שלנו.",
      bold: false,
    },
    {
      content: "אני מאמינה שהדרכה פרטית המותאמת לערכי המשפחה",
      bold: true,
    },
    {
      content:
        "ונעשית בתהליך ממוקד הנותן מענה לצרכים ולרגשות של כלל חברי המשפחה - ",
      bold: true,
    },
    {
      content:
        "זו הדרך הנכונה להשיג את המטרה ולעשות את הטוב ביותר עבור המשפחה שלכם!",
      bold: true,
    },

    {
      content:
        "הייעוץ שלי ניתן במגוון תחומים הנוגעים להתמודדות עם ילדים בגיל הרך,",
      bold: false,
    },
    {
      content: "לקשיים ואתגרים במשפחה ומול הילד, כמו לדוגמא:",
      bold: false,
    },
  ],
  tools: [
    {
      icon: <FixingConnections height="50px" width="50px" />,
      title: {
        content: "שיפור האווירה והתקשורת במשפחה",
        bold: true,
      },
      content: {
        content:
          "בייעוץ שלי, אנחנו מבינים איך להכניס לבית שיתוף, חיוביות ושמחה ולהתגבר יחד על האתגרים.",
      },
    },
    {
      icon: <ParentsAut height="50px" width="50px" />,
      title: {
        content: "סמכות הורית",
        bold: true,
      },
      content: {
        content:
          "מערכת היחסים בין הילדים להורים היא חשובה מאין כמוה! בליווי שלי אנחנו עובדים על חיזוק מערכת היחסים בין ההורים לילדים על מנת ליצור סביבה משפחתית מכבדת, מאפשרת אך גם מחנכת וסמכותית.",
      },
    },
    {
      icon: <FixingFamily height="50px" width="50px" />,
      title: {
        content: "שיפור היחסים בתוך המשפחה",
        bold: true,
      },
      content: {
        content:
          "ריבים, וויכוחים ומתח בין בני המשפחה משפיעים על המשפחה כולה, ולכן כחלק מהייעוץ שלי אנחנו עובדים על שיפור היחסים במשפחה וחיזוק הקשרים הבינאישיים.",
      },
    },

    {
      icon: <NewFrame height="50px" width="50px" />,
      title: {
        content: "כניסה למסגרות חדשות",
        bold: true,
      },
      content: {
        content:
          "ילדים רבים חווים קושי במעבר בין מסגרות, ולעיתים ההורים לא מצליחים להתמודד עם השינוי. אני מלווה משפחות במעבר הזה כדי לייצר לילד סביבה בטוחה וכניסה קלה למסגרת החדשה.",
      },
    },
    {
      icon: <Rehab height="50px" width="50px" />,
      title: {
        content: "גמילה",
        bold: true,
      },
      content: {
        content:
          "תהליך גמילה עשוי להיות שונה מילד לילד, הן בגיל והן בתקופת הגמילה. אני מלווה הורים בתהליך כדי להקל על התהליך, לקצר את תקופת הגמילה ולעשות את זה בצורה הטובה ביותר לילד.",
      },
    },

    {
      icon: <FamilyEnlarge height="50px" width="50px" />,
      title: {
        content: "הרחבת המשפחה",
        bold: true,
      },
      content: {
        content:
          "הצטרפות תינוק חדש למשפחה לא תמיד קלה, לא להורים ולא לאחים. חשוב לעשות הכנה טובה לשינוי הזה גם לפני שהתינוק מגיע ולהבין כיצד להעניק לתינוק החדש את כל היחס שהוא צריך, אך גם לתווך בצורה נכונה את השינוי החדש לילדים הנוספים בבית.",
      },
    },
    {
      icon: <Brothers height="50px" width="50px" />,
      title: {
        content: "חיזוק היחסים בין האחים",
        bold: true,
      },
      content: {
        content:
          "כחלק מהייעוץ שלי, אני עוזרת להורים לנהל בצורה טובה יותר את הקשרים בין האחים, ליצור ביניהם חיבור חיוני ולפתור מריבות.",
      },
    },
    {
      icon: <Negative height="50px" width="50px" />,
      title: {
        content: "התמודדות עם התנהגויות שליליות של הילדים",
        bold: true,
      },
      content: {
        content:
          "אף ילד לא מושלם! אנחנו מנסים להעניק לילד את הטוב ביותר, לחנך אותו נכון, אבל הרבה פעמים הוא מאמץ התנהגויות שליליות שהיינו שמחים להיפטר מהם. בהדרכה שלי, אנחנו מבינים יחד מה השיטה הנכונה? איך להעביר נכון את המסר לילד? איך להתאים את ההתנהגות לערכי המשפחה?",
      },
    },
    {
      icon: <NewParents height="50px" width="50px" />,
      title: {
        content: "תמיכה וייעוץ להורים חדשים",
        bold: true,
      },
      content: {
        content:
          "הורים חדשים חווים הרבה קשיים כשהתינוק הקטן מגיע הביתה... פתאום יש המון סימני שאלה, המון ריבים, וויכוחים ואתגרים שלא הכירו קודם. אני מלווה הורים חדשים בתהליך כדי לייצר שקט ושלווה בבית ולאפשר להם להנות מהמשפחה החדשה שלהם!",
      },
    },
    {
      icon: <Prepare height="50px" width="50px" />,
      title: {
        content: "הכנה להורות",
        bold: true,
      },
      content: {
        content:
          "אנחנו הופכים להורים הרבה לפני שהתינוק מגיע הביתה. חשוב להתכונן לזה כי המעבר שלנו מזוג למשפחה הוא לא תהליך פשוט ועלול לגרום להרבה ריבים בין בני הזוג ואף במשפחה המורחבת. חשוב לקחת רגע ולסדר לעצמכם תוכנית פעולה, לדבר על כל סימני השאלה לפני ולהיות מוכנים לקשיים שעלולים לצוץ.",
      },
    },
  ],
};
