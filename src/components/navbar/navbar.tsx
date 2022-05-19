import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { locale } from "../../locale/locale";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import { ReactComponent as WhatsappLogo } from "../../assets/Whatsapp-logo-icon-transparent.svg";
import { ReactComponent as MenuIcon } from "../../menuIcon.svg";

import { deviceMax } from "../../constant/constant";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container>
      <WhatsappContainer href="https://wa.me/972587600202" target="_blank">
        <WhatsappLogo />
      </WhatsappContainer>

      <NavbarItemContainer>
        <NavbarItem to="/contact">{locale("navBarItemContactMe")}</NavbarItem>
        <NavbarItem to="/workshops">{locale("navBarItemWorkshop")}</NavbarItem>
        <NavbarItem to="/personal-consult">
          {locale("navBarItemSingleConsult")}
        </NavbarItem>
        <NavbarItem to="/about-me">{locale("navBarItemAboutMe")}</NavbarItem>
        <NavbarItem to="/home">{locale("navBarItemHome")}</NavbarItem>
      </NavbarItemContainer>

      <Logo src={logo1} alt="logo" />
      <Hamburger onClick={() => setShowMenu((prev) => !prev)} />
      {showMenu && (
        <ResponsiveMenu onClick={() => setShowMenu(false)}>
          <NavbarItem to="/contact">{locale("navBarItemContactMe")}</NavbarItem>
          <NavbarItem to="/workshops">
            {locale("navBarItemWorkshop")}
          </NavbarItem>
          <NavbarItem to="/personal-consult">
            {locale("navBarItemSingleConsult")}
          </NavbarItem>
          <NavbarItem to="/about-me">{locale("navBarItemAboutMe")}</NavbarItem>
          <NavbarItem to="/home">{locale("navBarItemHome")}</NavbarItem>
        </ResponsiveMenu>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: inherit;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 325px;
  background-color: #cbb0bc;
`;

const NavbarItemContainer = styled.div`
  height: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media screen and ${deviceMax.mobileL} {
    display: none;
    flex-direction: column;
    gap: 20px;
  }
`;

const Hamburger = styled(MenuIcon)`
  display: none;
  margin: 20px;
  cursor: pointer;
  position: relative;
  @media ${deviceMax.mobileL} {
    display: initial;
  }
`;
const NavbarItem = styled(NavLink)`
  min-width: 100px;
  text-decoration: none;
  margin: 0 15px;
  background-color: #e4e1dd;
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
  width: 200px;
  height: 92px;
`;

const WhatsappContainer = styled.a`
  width: 55px;
  height: 55px;
  margin-left: 20px;
`;

const ResponsiveMenu = styled.div`
  width: 220px;
  margin: 5px;
  padding: 15px 5px;
  position: absolute;
  top: 75px;
  right: 0;
  display: flex;
  flex-direction: column-reverse;

  gap: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  border-radius: 20px;
`;

export default Navbar;
