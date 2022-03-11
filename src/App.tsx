import React from "react";
import styled from "@emotion/styled/macro";
import Navbar from "./components/navbar/navbar";
import Contact from "./pages/contact";
import Workshop from "./pages/workshop";
import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Consult from "./pages/consult";
import { Redirect, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/workshop" component={Workshop} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/personal-consult" component={Consult} />
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
  margin-top: 10%;
  background-color: ghostwhite;
`;

export default App;
