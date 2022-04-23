import React from "react";
import styled from "@emotion/styled/macro";
import Navbar from "./components/navbar/navbar";
import Contact from "./pages/contact";
import Workshops from "./pages/workshops";
import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Consult from "./pages/consult";
import { Redirect, Route, Switch } from "react-router-dom";
import Workshop from "./pages/workshop";

const App: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/contact/:reason?" component={Contact} />
          <Route exact path="/workshops" component={Workshops} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/personal-consult" component={Consult} />
          <Route exact path="/workshops/:workshopKey" component={Workshop} />
          <Redirect from="/" to={"/home"} />
        </Switch>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ghostwhite;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  background-color: ghostwhite;
`;

export default App;
