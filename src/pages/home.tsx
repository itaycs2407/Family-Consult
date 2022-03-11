import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";
import intro from "../assets/home-intro.jpeg";
import { Link } from "react-router-dom";
interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Container>
      <Image src={intro} alt="home-intro" />
      <ContentContainer>
        <P>
          כאמא לשולשה ילדים אני מרגישה שהעידן בו אנו חיים מזמן לנו אתגרים
          שהורינו לא חבו: רצון במימוש עצמי לצד הורות מספקת, עומס מידע, רשתות
          חברתיות ועוד' . אנו מוצפים במידע על איך להיות הורים ומה כדאי לעשות
          ואיך לנהוג ומתוך כל המידע והשיטות לעיתים קשה לנו לראות מה נכון לנו
          ולמשפחתנו ואיך לאזן בין ההורות לשאר תחומי החיים. אני מאמינה שאפשר גם
          להיות הורים טובים וגם למשש את עצמנו כאישיות נפרדת, שאין הורות אחת שהיא
          נכונה ושכל הורה צריך למצוא את הדרך המתאימה עבורו ועבור משפחתו. יחד
          נתמודד עם האתגרים, נמצא פתרונות ונעבור תהליך​ שיעזור לכם למצוא את
          ההורים שטבעי לכם להיות.
        </P>
      </ContentContainer>
      <CardContainer>
        <Card to="/singleConsult">singleConsult</Card>
        <Card to="/workshop">workshop</Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  animation: ${Fadein} 1s ease-in-out;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;

const P = styled.p`
  width: 30%;
  text-align: right;
`;

const CardContainer = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled(Link)`
  width: 600px;
  height: 200px;
  background-color: red;
`;
export default Home;
