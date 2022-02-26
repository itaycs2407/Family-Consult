import React, { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled/macro";
import { ReactComponent as WhatsappLogo } from "../../assets/whatsup.svg";

interface Props {
  setContent: Dispatch<SetStateAction<any>>;
}

const Navbar: React.FC<Props> = ({ setContent }) => (
  <Container>
    <ImageContainer>{/*<WhatsappLogo />*/}</ImageContainer>
    <NavbarItemContainer>
      <NavbarItem onClick={() => setContent("contact")}>צור קשר</NavbarItem>
      <NavbarItem onClick={() => setContent("workshop")}> סדנאות</NavbarItem>
      <NavbarItem onClick={() => setContent("singleConsult")}>
        ייעוץ פרטני
      </NavbarItem>
      <NavbarItem onClick={() => setContent("about")}> אודותי</NavbarItem>
      <NavbarItem onClick={() => setContent("home")}> בית</NavbarItem>
    </NavbarItemContainer>
    <span>Logo</span>
  </Container>
);

const Container = styled.div`
  position: sticky;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
`;

const NavbarItemContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItem = styled.div`
  width: 150px;
  margin: 0 15px;
  background-color: yellow;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in;

  &:hover {
    transform: translateY(15%);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 1);
  }
`;

const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
`;
export default Navbar;
