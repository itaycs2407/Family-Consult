import React from "react";
import styled from "@emotion/styled/macro";
import { FadeInContainer } from "../constant/style";
import Header from "../assets/header.jpg";

interface Props {}

const AboutMe: React.FC<Props> = () => (
  <FadeInContainer>
    <ImageContainer>
      <img src={Header} alt="cover" />
    </ImageContainer>
    <h1>סדנת הורים לצעירים</h1>

    <P>
      נעים להכיר שמי הילה כהן, יועצת משפחתית מוסמכת המתמחה בגיל הרך. נשואה ואמא
      לשלושה ילדים בהשכלתי בעלת תואר שני מתאם המכללה האקדמית תל אביב יפו בלימודי
      משפחה בהתמחות בייעוץ למשפחות. ותואר ראשון בחינוך לגיל הרך. יועצת בגישה
      מערכתית, השמה במוקד ההתערבות את המערכת המשפחתית - הקשרים ומערכות היחסים
      בין חברי המשפחה. הייעוץ מדויק וממוקד מטרה ולכן גם קצר מועד . מלווה ומייעצת
      להורים לקראת המעבר להורות ובהורות, מעבירה סדנאות והרצאות פרטיות ומנחת
      מעגלי אימהות בחופשת לידה. בעלת ניסיון רב בעבודה עם ילדים, הורים וצוותים
      חינוכיים . אני מזמינה אתכם לצאת יחד לדרך משמעותית ומקדמת להורות המיטבית
      והייחודית שלכם. שלכם, הילה כהן
    </P>
  </FadeInContainer>
);

const P = styled.p`
  width: 90%;
  font-size: 22px;
  direction: rtl;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 0 30px;
`;

export default AboutMe;
