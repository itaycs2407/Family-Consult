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
import { deviceMax } from "./constant/constant";

const App: React.FC = () => (
  <Container>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/contact/:reason?" component={Contact} />
        <Route exact path="/workshops" component={Workshops} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/personal-consult" component={Consult} />
        <Route exact path="/workshops/:workshopKey" component={Workshop} />
        <Redirect from="/" to={"/home"} />
      </Switch>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1;
`;

export default App;
