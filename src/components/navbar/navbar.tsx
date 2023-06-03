import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { locale } from "../../locale/locale";
import { NavLink } from "react-router-dom";
import { ReactComponent as WhatsappLogo } from "../../assets/Whatsapp-logo-icon-transparent.svg";
import { ReactComponent as MenuIcon } from "../../menuIcon.svg";

import { deviceMax } from "../../constant/constant";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <StyledStrip>
        <WhatsappContainer href="https://wa.me/972546715252" target="_blank">
          <WhatsappLogo />
        </WhatsappContainer>
        054-6715252
        <Hamburger onClick={() => setShowMenu((prev) => !prev)} />
      </StyledStrip>

      <MenuContainer>
        <Container>
          <NavbarItemContainer>
            <NavbarItem to="/contact">
              {locale("navBarItemContactMe")}
            </NavbarItem>
            <NavbarItem to="/workshops">
              {locale("navBarItemWorkshop")}
            </NavbarItem>
            <NavbarItem to="/personal-consult">
              {locale("navBarItemSingleConsult")}
            </NavbarItem>
            <NavbarItem to="/about-me">
              {locale("navBarItemAboutMe")}
            </NavbarItem>
            <NavbarItem to="/home">{locale("navBarItemHome")}</NavbarItem>
          </NavbarItemContainer>

          {showMenu && (
            <ResponsiveMenu onClick={() => setShowMenu(false)}>
              <NavbarItem to="/contact">
                {locale("navBarItemContactMe")}
              </NavbarItem>
              <NavbarItem to="/workshops">
                {locale("navBarItemWorkshop")}
              </NavbarItem>
              <NavbarItem to="/personal-consult">
                {locale("navBarItemSingleConsult")}
              </NavbarItem>
              <NavbarItem to="/about-me">
                {locale("navBarItemAboutMe")}
              </NavbarItem>
              <NavbarItem to="/home">{locale("navBarItemHome")}</NavbarItem>
            </ResponsiveMenu>
          )}
        </Container>
      </MenuContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  min-width: 325px;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const StyledStrip = styled.div`
  background-color: #dbdcd5;
  color: #990a43;

  display: flex;
  align-items: center;
  padding: 3px 3px 3px;
  font-size: 18px;
  font-weight: 650;

  @media screen and ${deviceMax.mobileL} {
    width: 100%;
    justify-content: space-between;
  }
`;

const NavbarItemContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media screen and ${deviceMax.mobileL} {
    display: none;
    flex-direction: column;
    gap: 20px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Hamburger = styled(MenuIcon)`
  display: none;
  cursor: pointer;
  position: relative;
  @media ${deviceMax.mobileL} {
    display: block;
    margin-right: 20px;
  }
`;

const NavbarItem = styled(NavLink)`
  min-width: 100px;
  text-decoration: none;
  margin: 5px 15px;
  background-color: #eab5c1;
  border-radius: 14px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 3px 9px rgba(147, 8, 162, 0.2);
  transition: 0.2s ease-in;

  &:hover {
    transform: translateY(15%);
    box-shadow: 0 3px 9px rgba(147, 8, 162, 0.2);
  }
`;

const WhatsappContainer = styled.a`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and ${deviceMax.mobileL} {
    margin-right: 0;
  }
`;

const ResponsiveMenu = styled.div`
  width: 120px;
  margin: 5px 30px;
  padding: 15px 5px;
  position: absolute;
  top: 75px;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  z-index: 2000;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  border-radius: 20px;
`;

export default Navbar;
