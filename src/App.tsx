import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import styled from "@emotion/styled/macro";
import Contact from "./pages/contact";
import Workshop from "./pages/workshop";
import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Consult from "./pages/consult";

const App: React.FC = () => {
  const [content, setContent] = useState<any>("home");

  return (
    <div className="App">
      <Navbar setContent={setContent} />
      <ContentContainer>
        {content === "contact" && <Contact />}
        {content === "workshop" && <Workshop />}
        {content === "home" && <Home />}
        {content === "about" && <AboutMe />}
        {content === "singleConsult" && <Consult />}
      </ContentContainer>
    </div>
  );
};

const ContentContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default App;
