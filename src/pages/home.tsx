import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";
import intro from "../assets/home-intro.jpeg";
import { Link } from "react-router-dom";
interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Container>
      <UpperContent>
        <Image src={intro} alt="home-intro" />
        <Intro>
          <Header>קצת עלי</Header>
          כאמא לשולשה ילדים אני מרגישה שהעידן בו אנו חיים מזמן לנו אתגרים
          שהורינו לא חבו: רצון במימוש עצמי לצד הורות מספקת, עומס מידע, רשתות
          חברתיות ועוד' . אנו מוצפים במידע על איך להיות הורים ומה כדאי לעשות
          ואיך לנהוג ומתוך כל המידע והשיטות לעיתים קשה לנו לראות מה נכון לנו
          ולמשפחתנו ואיך לאזן בין ההורות לשאר תחומי החיים. אני מאמינה שאפשר גם
          להיות הורים טובים וגם למשש את עצמנו כאישיות נפרדת, שאין הורות אחת שהיא
          נכונה ושכל הורה צריך למצוא את הדרך המתאימה עבורו ועבור משפחתו. יחד
          נתמודד עם האתגרים, נמצא פתרונות ונעבור תהליך​ שיעזור לכם למצוא את
          ההורים שטבעי לכם להיות.
        </Intro>
      </UpperContent>
      <CardContainer>
        <Card to="/personal-consult">singleConsult</Card>
        <Card to="/workshop">workshop</Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${Fadein} 1s ease-in-out;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  margin-left: 30px;
`;

const Intro = styled.p`
  width: 50%;
  text-align: right;
  display: inline;
  margin-right: 30px;
`;

const CardContainer = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpperContent = styled(CardContainer)`
  margin-bottom: 50px;
  justify-content: space-between;
  width: 70%;
`;

const Header = styled.h1`
  font-style: italic;
`;

const Card = styled(Link)`
  width: 600px;
  height: 200px;
  background-color: red;
`;

export default Home;
