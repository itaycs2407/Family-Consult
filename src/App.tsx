import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Navbar from "./components/navbar/navbar";
import Contact from "./pages/contact";
import Workshop from "./pages/workshop";
import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Consult from "./pages/consult";
import { PageContent } from "./types/types";

const App: React.FC = () => {
  const [content, setContent] = useState<PageContent>("contact");

  return (
    <Container>
      <Navbar setContent={setContent} />
      <ContentContainer>
        {content === "contact" && <Contact />}
        {content === "workshop" && <Workshop />}
        {content === "home" && <Home />}
        {content === "about" && <AboutMe />}
        {content === "singleConsult" && <Consult />}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #d9d9d8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.div`
  margin-top: 10%;
  background-color: #d9d9d8;
`;

export default App;
