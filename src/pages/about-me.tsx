import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein, FadeInContainer } from "../constant/style";
import HilaPersonal from "../assets/hilaHome.jpg";
import second from "../assets/homepage/middle.png";
import { keyframes } from "@emotion/react";
import { deviceMax } from "../constant/constant";

const AboutMe: React.FC = () => {
  const subTitle = <span> ומומחית לגיל הרך MA יועצת משפחתית </span>;
  const responsiveSubTitle = (
    <span>
      MA יועצת משפחתית <br />
      ומומחית לגיל הרך
    </span>
  );
  return (
    <FadeInContainer>
      <UpperContent>
        <Content>
          <H1>הילה כהן</H1>
          <H2>{subTitle}</H2>
          <ResponsiveSubTitle>{responsiveSubTitle}</ResponsiveSubTitle>
        </Content>

        <AbsoluteStyledImage src={HilaPersonal} alt={second} />

        <Description>
          <Sentence>
            נעים להכיר שמי הילה כהן, יועצת משפחתית מוסמכת המתמחה בגיל הרך.
          </Sentence>
          <Sentence>
            נשואה ואמא לשלושה ילדים. בהשכלתי בעלת תואר שני מתאם המכללה האקדמית
            תל אביב יפו בלימודי משפחה בהתמחות בייעוץ למשפחות ותואר ראשון בחינוך
            לגיל הרך.
          </Sentence>
          <Sentence>
            יועצת בגישה מערכתית, השמה במוקד ההתערבות את המערכת המשפחתית - הקשרים
            ומערכות היחסים בין חברי המשפחה. הייעוץ מדויק וממוקד מטרה ולכן גם קצר
            מועד.
          </Sentence>
          <Sentence>
            מלווה ומייעצת להורים לקראת המעבר להורות ובהורות, מעבירה סדנאות
            והרצאות פרטיות ומנחת מעגלי אימהות בחופשת לידה.
          </Sentence>
          <Sentence>
            בעלת ניסיון רב בעבודה עם ילדים, הורים וצוותים חינוכיים.
          </Sentence>
          <Sentence>
            אני מזמינה אתכם לצאת יחד לדרך משמעותית ומקדמת להורות המיטבית
            והייחודית שלכם.
          </Sentence>

          <Sentence>שלכם, הילה כהן</Sentence>
        </Description>
      </UpperContent>
    </FadeInContainer>
  );
};

const AbsoluteStyledImage = styled.img`
  position: absolute;
  top: 15%;
  left: 10%;
  border-radius: 20px;
  width: 30%;
  animation: ${Fadein} 0.75s;
`;

const Content = styled.div`
  text-align: right;
`;

const Sentence = styled.div`
  margin-top: 10px;
`;

const CardContainer = styled.div`
  gap: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const UpperContent = styled(CardContainer)`
  position: relative;
  z-index: 0;
  margin-bottom: 50px;
  justify-content: right;
  align-items: flex-start;
  padding: 15% 0 0;
  background-color: #fde2e4ff;
  @media screen and ${deviceMax.mobileL} {
    height: 50px;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  width: 40%;
  position: absolute;
  top: 100%;
  right: 10%;
  font-size: 22px;
  direction: rtl;
  @media screen and ${deviceMax.mobileL} {
    font-size: 12px;
  }
`;

export const MoveFromRight = keyframes`
from {
  right: -10%;
}
  to {
    right :10%;  
  }
`;

export const ResponsiveMoveFromRight = keyframes`
from {
  right: -10%;
}
  to {
    right : 2%;  
  }
`;

const ResponsiveSubTitle = styled.h2`
  display: none;
  position: absolute;
  top: 70%;
  right: 10%;
  animation: ${MoveFromRight} 1s ease-out;

  @media screen and ${deviceMax.mobileL} {
    animation: ${ResponsiveMoveFromRight} 1s ease-out;
    display: initial;
    position: absolute;
    font-size: 10px;
    top: 60%;
    right: 2%;
  }
`;
const H1 = styled.h1`
  position: absolute;
  top: 30%;
  right: 10%;
  animation: ${MoveFromRight} 1s ease-out;

  @media screen and ${deviceMax.mobileL} {
    animation: ${ResponsiveMoveFromRight} 1s ease-out;
    font-size: 14px;
    top: 30%;
    right: 2%;
  }
`;

const H2 = styled.h2`
  position: absolute;
  top: 50%;
  right: 10%;
  animation: ${MoveFromRight} 1s ease-out;
  @media screen and ${deviceMax.mobileL} {
    display: none;
  }
`;

export default AboutMe;
