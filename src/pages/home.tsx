import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";
import {
  FadeInContainer,
  Header,
  SpaceLine,
  StyledButton,
} from "../constant/style";
import Heart from "../assets/home-intro.jpeg";
import second from "../assets/homepage/middle.png";
import Consult from "../assets/homepage/consult.svg";
import Workshop from "../assets/homepage/workshop.svg";
import mark from "../assets/homepage/mark.svg";
import { deviceMax } from "../constant/constant";
import CardWithImage from "../components/shred/CardWithImage";

import HilaPersonal from "../assets/homepage/WhatsApp Image 2023-02-25 at 17.24.09.jpeg";
import Tool from "../components/shred/Tool";
import { HomepageAboutMe, WhyWorkWithMe } from "../constant/aboutMe";
import { Title } from "./workshop";
import { AbsoluteStyledImage } from "./about-me";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const subTitle = <span> מומחית לגיל הרך MA יועצת משפחתית </span>;
  const responsiveSubTitle = (
    <span>
      MA יועצת משפחתית <br />
      מומחית לגיל הרך
    </span>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  return (
    <>
      <FadeInContainer>
        <UpperContent>
          <Content>
            <H1>הילה כהן</H1>
            <H2>{subTitle}</H2>
            <ResponsiveSubTitle>{responsiveSubTitle}</ResponsiveSubTitle>
          </Content>
          <AbsoluteStyledImage src={Heart} alt={second} />
        </UpperContent>

        <CardContainer>
          <CardWithImage
            image={Consult}
            redirectText={"להמשך קריאה "}
            title={"ייעוץ"}
            redirectTo={"/personal-consult"}
            content={
              " אני מאמינה בהדרכה אישית והמותאמת למשפחה שלכם. ביחד ניצור שינוי,\n" +
              "              נשפר את האווירה בבית וניתן מענה מותאם ומדויק לאתגרים שאיתם אתם\n" +
              "              מתמודדים"
            }
          />

          <CardWithImage
            redirectText={"לפרטים נוספים, ייעוץ והתאמה"}
            image={Workshop}
            title={"סדנאות"}
            redirectTo={"/workshops"}
            content={
              "סדרת סדנאות והרצאות לשלבים שונים בחיי ההורות שלנו\n" +
              "כדי להעניק להורים ולכאלה שעתידים להיות הורים\n" +
              "כלים מעשיים וחשובים להתנהלות נכונה בבית, שיפור התקשורת, יצירת אווירה רגועה \n" +
              "והכי חשוב על מנת להעניק לילדים שלנו את הטוב ביותר!\n" +
              "\n"
            }
          />
        </CardContainer>
      </FadeInContainer>

      <WhoAmI>
        <AbsoluteStyledImage src={HilaPersonal} />
        <>
          {HomepageAboutMe.map(
            (
              line: {
                content: string;
                bold: boolean;
                color?: string;
              },
              index: number
            ) => {
              return (
                <Title key={index} bold={line.bold} color={line.color}>
                  {line.content === "" ? <SpaceLine /> : line.content}
                </Title>
              );
            }
          )}
        </>
        <Button onClick={() => history.push("/about-me")}>להמשך קריאה</Button>
      </WhoAmI>
      <WhyWithMeWrapper>
        <StyledHeader>5 סיבות למה כדאי לעבוד איתי</StyledHeader>
        <WhyWithMeContainer>
          {WhyWorkWithMe.map((item, index) => (
            <Tool
              key={index}
              icon={
                <img src={mark} width={"50px"} height={"50px"} alt="someAlt" />
              }
              title={item.title}
              content={item.content}
              height={270}
            />
          ))}
        </WhyWithMeContainer>
      </WhyWithMeWrapper>
      <Recommendation>
        <StyledHeader>המלצות</StyledHeader>
      </Recommendation>
    </>
  );
};

const ReadMore = styled.div`
  direction: rtl;
  color: red;
`;

const Recommendation = styled.div`
  background: bisque;
`;

const Button = styled(StyledButton)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 120px;
`;

const H1 = styled.h1`
  position: absolute;
  top: 35%;
  right: 10%;
  @media screen and ${deviceMax.mobileL} {
    font-size: 14px;
    top: 30%;
    right: 2%;
  }
`;
const H2 = styled.h2`
  position: absolute;
  top: 50%;
  right: 10%;
  @media screen and ${deviceMax.mobileL} {
    display: none;
  }
`;

export const StyledImageContainer = styled.div`
  background-color: #fde2e4ff;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

// const AbsoluteStyledImage = styled.img`
//   width: 100%;
//   height: 350px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.5);
//   animation: ${Fadein} 0.75s;
//
//   @media screen and ${deviceMax.mobileL} {
//     width: 200px;
//     height: 150px;
//     left: 3%;
//   }
// `;

const Content = styled.div`
  text-align: right;
  z-index: 1000;
`;

const WhyWithMeWrapper = styled.div`
  background: aliceblue;
  display: flex;
  gap: 50px 100px;
  flex-direction: column;
  justify-content: center;
  padding: 200px 50px 50px;
`;

const WhyWithMeContainer = styled.div`
  background: aliceblue;
  display: flex;
  gap: 50px;
  padding: 50px;

  justify-content: center;
`;

const WhoAmI = styled.div`
  background: beige;
  padding: 120px;
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  gap: 50px;
  justify-content: center;
  background: pink;

  @media screen and ${deviceMax.mobileL} {
    margin-top: 100px;
  }
`;

const UpperContent = styled.div`
  position: relative;
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: right;
  align-items: flex-start;
  padding-top: 15%;
  @media screen and ${deviceMax.mobileL} {
    height: 50px;
  }
`;

const ResponsiveSubTitle = styled.h2`
  display: none;

  @media screen and ${deviceMax.mobileL} {
    display: initial;
    position: absolute;
    font-size: 10px;
    top: 60%;
    right: 2%;
  }
`;

const ResponsiveParagraph = styled.p`
  @media ${deviceMax.mobileL} {
    display: none;
  }
`;

const StyledHeader = styled(Header)`
  margin: 0;
`;

export default Home;
