import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";
import intro from "../assets/home-intro.jpeg";
import { Link } from "react-router-dom";
import { locale } from "../locale/locale";
interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Container>
      <UpperContent>
        <Image src={intro} alt="home-intro" />
        <Intro>
          <Header>{locale("homeIntroHeader")}</Header>
          {locale("homeIntro")}
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
