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
import intro from "../assets/homepage/home-intro.png";
import Consult from "../assets/homepage/consult.svg";
import Workshop from "../assets/homepage/workshop.svg";
import mark from "../assets/homepage/mark.svg";
import { deviceMax } from "../constant/constant";
import CardWithImage from "../components/shred/CardWithImage";

import Tool from "../components/shred/Tool";
import { HomepageAboutMe, WhyWorkWithMe } from "../constant/aboutMe";
import { Title } from "./workshop";
import { AbsoluteStyledImage } from "./about-me";
import { useHistory } from "react-router-dom";
import ContactUs from "../components/shred/ContactUs";
import { useIsMobile } from "../hooks/useIsMobile";

const Home: React.FC = () => {
  const subTitle = <span> הילה כהן, יועצת משפחתית MA מומחית לגיל הרך</span>;
  const responsiveSubTitle = (
    <span>
      MA יועצת משפחתית <br />
      מומחית לגיל הרך
    </span>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useIsMobile();
  const history = useHistory();
  return (
    <>
      <FadeInContainer>
        <UpperContent>
          <Content>
            <H1>
              איך להתקדם להורות המיטבית והייחודית שלכם
              <StyledBr />
              ולהעניק לילדים שלכם את הטוב ביותר
            </H1>
            <H2>
              <br />
              {subTitle}
            </H2>
            <ResponsiveSubTitle>{responsiveSubTitle}</ResponsiveSubTitle>
          </Content>
          <StyledAbsoluteStyledImage src={Heart} alt={second} />
        </UpperContent>
      </FadeInContainer>
      <CardContainer>
        <CardWithImage
          image={Consult}
          redirectText={"להמשך קריאה "}
          title={"ייעוץ - הדרכת הורים"}
          redirectTo={"/personal-consult"}
          content={
            isMobile
              ? " חוויית ההורות אמנם מספקת לנו המון רגעים יפים \n" +
                "אך גם מציפה הרבה דילמות ואתגרים ..."
              : " חוויית ההורות אמנם מספקת לנו המון רגעים יפים \n" +
                "אך גם מציפה הרבה דילמות ואתגרים שלא הכרנו קודם" +
                "צריכים ליווי והדרכה בהורות שלכם?\n" +
                "יש לכם שאלה ספציפית?\n" +
                "במפגשי ייעוץ פרקטיים, ממוקדים ומותאמים לערכי המשפחה שלכם\n" +
                "נוכל להגיע לפתרונות בזמן קצר.\n"
          }
        />

        <CardWithImage
          redirectText={
            isMobile ? "לפרטים נוספים" : "לפרטים נוספים, ייעוץ והתאמה"
          }
          image={Workshop}
          title={"סדנאות"}
          redirectTo={"/workshops"}
          content={
            isMobile
              ? "סדרת סדנאות והרצאות לשלבים שונים בחיי ההורות שלנו\n" +
                "כדי להעניק להורים ולכאלה שעתידים להיות הורים\n"
              : "סדרת סדנאות והרצאות לשלבים שונים בחיי ההורות שלנו\n" +
                "כדי להעניק להורים ולכאלה שעתידים להיות הורים\n" +
                "כלים מעשיים וחשובים להתנהלות נכונה בבית, שיפור התקשורת, יצירת אווירה רגועה \n" +
                "והכי חשוב על מנת להעניק לילדים שלנו את הטוב ביותר!\n" +
                "\n"
          }
        />
      </CardContainer>

      <WhoAmI>
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
        <StyledResponsiveAbsoluteStyledImage
          src={intro}
          alt={second}
          height="80%"
        />
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
              content={isMobile ? { content: "" } : item.content}
              height={330}
            />
          ))}
        </WhyWithMeContainer>
      </WhyWithMeWrapper>
      <Recommendation>
        <StyledHeader>המלצות</StyledHeader>
      </Recommendation>
      <ContactUs />
    </>
  );
};

const Recommendation = styled.div`
  background: bisque;
`;

const StyledBr = styled.br`
  @media screen and ${deviceMax.mobileL} {
    display: none;
  }
`;

const Button = styled(StyledButton)`
  position: absolute;
  bottom: 25px;
  left: 35%;
  @media screen and ${deviceMax.mobileL} {
  }
`;

const StyledAbsoluteStyledImage = styled(AbsoluteStyledImage)`
  width: 25%;
  height: 90%;
`;

const H1 = styled.h1`
  position: absolute;
  top: 35%;
  right: 10%;
  font-size: 36px;
  @media screen and ${deviceMax.mobileL} {
    font-size: 14px;
    top: 30%;
    right: 2%;
    width: 60%;
  }
`;

const StyledResponsiveAbsoluteStyledImage = styled(AbsoluteStyledImage)`
  @media screen and ${deviceMax.mobileL} {
    display: none;
  }
`;

const H2 = styled.h2`
  position: absolute;
  direction: rtl;
  color: red;
  font-style: italic;
  top: 60%;
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
  padding: 50px;
`;

const WhyWithMeContainer = styled.div`
  background: aliceblue;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 100px;
  justify-content: center;
  @media screen and ${deviceMax.mobileL} {
    gap: 10px;
    padding: 0;
    flex-wrap: wrap;
  }
`;

const WhoAmI = styled.div`
  background: beige;
  padding: 60px 120px 120px;
  //width: 84%;
  position: relative;
  @media screen and ${deviceMax.mobileL} {
    display: flex;
    padding: 0;
    width: 100%;
    flex-direction: column;
    align-items: end;
  }
`;

const CardContainer = styled.div`
  display: flex;
  height: 350px;
  padding: 50px;
  gap: 50px;
  justify-content: center;
  background: pink;

  @media screen and ${deviceMax.mobileL} {
    margin-top: 100px;
    margin-left: 5px;
    margin-right: 5px;
    gap: 10px;
    padding: 50px 20px;
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
    top: 110%;
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
