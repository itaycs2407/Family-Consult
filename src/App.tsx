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

const App: React.FC = () => (
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

const Container = styled.div`
  height: 100vh;
  width: 98vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

export default App;
