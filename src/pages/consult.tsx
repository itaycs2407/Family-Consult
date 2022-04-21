import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";
import Intro1 from "../assets/personalConsult/intro1.png";
import Intro2 from "../assets/personalConsult/intro2.png";
import Intro3 from "../assets/personalConsult/intro3.png";
import Background from "../assets/personalConsult/background.jpeg";

interface Props {}

const Consult: React.FC<Props> = () => (
  <Container>
    <ImageContainer>
      <Image src={Intro1} alt="cover" />
      <Image src={Intro3} alt="cover" />
      <Image src={Intro2} alt="cover" />
    </ImageContainer>
    <h1>הדרכת הורים פרטנית</h1>
    <Info>
      <p>
        משפחה היא המקום בו אמורים להרגיש בטוח, לחלוק חוויות ולצבור חויות
        משותפות.
      </p>
      <p>
        אני מאמינה בהדרכה פרטית המותאמת לערכי המשפחה בתהליך ממוקד הנותן מענה
        לצרכיהם ולרגשותיהם של כלל חברי המשפחה.
      </p>
      <p>במסגרת תהליך היעוץ אני נותנת מענה במגון תחומים: </p>
      <p>
        <ul>
          <li>
            שיפור האווירה והתקשורת במשפחה- איך להכניס לבית שיתוף חיוביות ושמחה.
          </li>
          <li>
            סמכות הורית-, איך לחזק את המערכת היחסים בין ההורים לילדים וליצור
            סביבה משפחתית מכבדת, מאפשרת וגם מחנכת וסמכותית.
          </li>
          <li>
            שיפור היחסים בתוך המשפחה-חיכוכים מתח וקשיים בינאישיים המשפיעים על
            המשפחה כולה.
          </li>
          <li>
            מתן מענה באתגרים שונים בגידול הילדים כגון: מריבות בן אחים, גמילה,
            כניסה למסגרות חדשות ועוד'.
          </li>
          <li>התמודדות עם התנהגויות שליליות של הילדים.</li>
          <li>תמיכה ויעוץ להורים חדשים</li>

          <li>
            שיפור האווירה והתקשורת במשפחה- איך להכניס לבית שיתוף חיוביות ושמחה.
          </li>
          <li>הכנה להורות –הכנה לקראת המעבר מזוגיות להורות .</li>
        </ul>
        יחד , נזהה את הקשיים הקיימים, נייצר פתרונות מעשיים המתאימים לכם וניצור
        שלווה ושמחה בבית
      </p>
    </Info>
    <SumUpContainer>
      <SumUpItem> קצר מועד</SumUpItem>
      <SumUpItem>בזום או בקלינקה</SumUpItem>
      <SumUpItem>פרקטי ומותאם לערכי המשפחה</SumUpItem>
    </SumUpContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: ${Fadein} 1s ease-in-out;
  height: 400px;
  width: 100%;
  background: "url(" + Background + ")";
  background-repeat: no-repeat, no-repeat;
  background-position: right, left;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const Image = styled.img`
  border-radius: 30px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;

const Info = styled.p`
  width: 80%;
  text-align: right;
`;

const SumUpContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const SumUpItem = styled.div`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
`;
export default Consult;
