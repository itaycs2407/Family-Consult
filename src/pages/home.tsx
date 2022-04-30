import React from "react";
import styled from "@emotion/styled/macro";
import { FadeInContainer } from "../constant/style";
import intro from "../assets/home-intro.jpeg";
import back1 from "../assets/background1.png";
import back2 from "../assets/background2.png";
import { Link } from "react-router-dom";
import { locale } from "../locale/locale";

const Home: React.FC = () => (
  <>
    <FadeInContainer>
      <UpperContent>
        <Image src={intro} alt="home-intro" />

        <Intro>
          <Header>{locale("homeIntroHeader")}</Header>
          {locale("homeIntro")}
        </Intro>
      </UpperContent>
      <CardContainer>
        <Card to="/personal-consult">
          consult
          <Image src={back1} alt="back1" />
        </Card>

        <Card to="/workshops">
          workshops
          <Image src={back2} alt="back2" />
        </Card>
      </CardContainer>
    </FadeInContainer>
  </>
);

const Image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 2px 4px 2px black;
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
`;

export default Home;
