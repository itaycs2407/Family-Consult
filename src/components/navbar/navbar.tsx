import React, { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled/macro";
import { ReactComponent as WhatsappLogo } from "../../assets/whatsup.svg";
import { locale } from "../../locale/locale";

interface Props {
  setContent: Dispatch<SetStateAction<any>>;
}

const Navbar: React.FC<Props> = ({ setContent }) => (
  <Container>
    <ImageContainer>{/*<WhatsappLogo />*/}</ImageContainer>
    <NavbarItemContainer>
      <NavbarItem onClick={() => setContent("contact")}>
        {locale("navBarItemContactMe")}
      </NavbarItem>
      <NavbarItem onClick={() => setContent("workshop")}>
        {locale("navBarItemWorkshop")}
      </NavbarItem>
      <NavbarItem onClick={() => setContent("singleConsult")}>
        {locale("navBarItemSingleConsult")}
      </NavbarItem>
      <NavbarItem onClick={() => setContent("about")}>
        {locale("navBarItemAboutMe")}
      </NavbarItem>
      <NavbarItem onClick={() => setContent("home")}>
        {locale("navBarItemHome")}
      </NavbarItem>
    </NavbarItemContainer>
    <span>Logo</span>
  </Container>
);

const Container = styled.div`
  position: inherit;
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
