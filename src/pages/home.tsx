import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein, FadeInContainer } from "../constant/style";
import Heart from "../assets/home-intro.jpeg";
import back1 from "../assets/background1.png";
import second from "../assets/homepage/middle.png";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  //ts-ignore no-useless-concat
  const subTitle = " ומומחית לגיל הרך" + " MA " + "יועצת משפחתית ";
  return (
    <FadeInContainer>
      <UpperContent>
        <Content>
          <H1>הילה כהן</H1>
          <H2>{subTitle}</H2>
        </Content>
        <AbsoluteStyledImage src={Heart} alt={second} />
      </UpperContent>

      <CardContainer>
        <Card to="/personal-consult" url={back1}>
          <div>
            <h1>ייעוץ</h1>
            <p>
              אני מאמינה בהדרכה אישית והמותאמת למשפחה שלכם. ביחד ניצור שינוי,
              נשפר את האווירה בבית וניתן מענה מותאם ומדויק לאתגרים שאיתם אתם
              מתמודדים
            </p>
            <p>פרקטי </p>
            <p>קצר מועד </p>
            <p>בזום או בקליניקה</p>
            <ReadMore>לקריאה נוספת...</ReadMore>
          </div>
        </Card>

        <Card to="/workshops" url={back1}>
          <div>
            <h1>סדנאות</h1>
            <p>
              סדנאות לזוגות בהריון , לאמהות לאחר לידה, להורים חזון הורי, סמכות
              הורית, גמילה, יחסים בין אחים ועוד
            </p>
            <ReadMore>לקריאה נוספת...</ReadMore>
          </div>
        </Card>
      </CardContainer>
    </FadeInContainer>
  );
};

const ReadMore = styled.div`
  direction: rtl;
  color: red;
`;

const H1 = styled.h1`
  position: absolute;
  top: 50%;
  right: 10%;
`;
const H2 = styled.h2`
  position: absolute;
  top: 70%;
  right: 10%;
`;

export const StyledImageContainer = styled.div`
  background-color: #fde2e4ff;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AbsoluteStyledImage = styled.img`
  width: 500px;
  height: 350px;
  position: absolute;
  top: 15%;
  left: 10%;
  border-radius: 20px;
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.5);

  animation: ${Fadein} 0.75s;
`;

const Content = styled.div`
  text-align: right;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 200px;
`;

const UpperContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 50px;

  justify-content: right;
  align-items: flex-start;
  padding-top: 15%;
  background-color: #fde2e4ff;
`;

const Card = styled(Link)<{ url: string }>`
  width: 500px;
  height: 300px;
  padding: 50px;
  text-align: center;
  text-decoration: none;
  margin-bottom: 150px;
  border-radius: 20px;
  background-image: ${({ url }) => `url(${url})`};
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: all 1s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Home;
