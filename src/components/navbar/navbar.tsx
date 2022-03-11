import React from "react";
import styled from "@emotion/styled/macro";
import { locale } from "../../locale/locale";
import {NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
interface Props {
}

const Navbar: React.FC<Props> = () => (
  <Container>
    <NavbarItemContainer>
      <NavbarItem to='/contact'>
        {locale("navBarItemContactMe")}
      </NavbarItem>
      <NavbarItem  to='/workshop' >
        {locale("navBarItemWorkshop")}
      </NavbarItem>
      <NavbarItem  to='/personal-consult' >
        {locale("navBarItemSingleConsult")}
      </NavbarItem>
      <NavbarItem  to='/about-me' >
        {locale("navBarItemAboutMe")}
      </NavbarItem>
      <NavbarItem  to='/home' >
        {locale("navBarItemHome")}
      </NavbarItem>
    </NavbarItemContainer>
      <Logo src={logo} alt="logo"/>
  </Container>
);

const Container = styled.div`
  position: inherit;
  width: 100vw;
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

const NavbarItem = styled(NavLink)`
  min-width: 100px;
  text-decoration: none;
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

const Logo = styled.img`
width : 250px;
height : 92px
  

`;


export default Navbar;
