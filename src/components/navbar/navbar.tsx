import React, { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled/macro";

interface Props {
  setContent: Dispatch<SetStateAction<any>>;
}

const Navbar: React.FC<Props> = ({ setContent }) => (
  <Container>
    <span>WhatsUp</span>
    <NavbarItemContainer>
      <NavbarItem onClick={() => setContent("Item 1")}> item 1</NavbarItem>
      <NavbarItem onClick={() => setContent("Item 2")}> item 2</NavbarItem>
      <NavbarItem onClick={() => setContent("Item 3")}> item 3</NavbarItem>
      <NavbarItem onClick={() => setContent("Item 4")}> item 4</NavbarItem>
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

export default Navbar;
