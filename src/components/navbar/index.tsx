import styled from "styled-components";
import { Galaxi, Hamburger } from "../../assets/index";
import { primary_color, secondary_color } from "../../assets/colors";
import MobileNavbar from "../mobileNavbar";
import { HeaderProps } from "../../screens/header";
import React, { useState } from "react";

const Navbar: React.FC<HeaderProps> = ({ handleHeaderClick }) => {
  const [toggle, setToggle] = useState(false);
  const preventDefault = (e: any) => {
    e.preventDefault();
  };
  return (
    <NavDiv>
      <NavWrapper onClickCapture={preventDefault}>
        <Div40>
          <Logo src={Galaxi} />
        </Div40>
        <HamburgerLogo onClick={() => setToggle((t) => !t)} src={Hamburger} />
        <Div60>
          <ListItems>
            <Items
              onClick={() => {
                handleHeaderClick(1);
              }}
            >
              How it works?
            </Items>
            <Items
              onClick={() => {
                handleHeaderClick(2);
              }}
            >
              Why Galaxi?
            </Items>
            <Items
              onClick={() => {
                handleHeaderClick(6);
              }}
            >
              Explainer Video
            </Items>
            <Items
              onClick={() => {
                handleHeaderClick(3);
              }}
            >
              Features
            </Items>
            <Items
              onClick={() => {
                handleHeaderClick(7);
              }}
            >
              FAQs
            </Items>
            <Items
              onClick={() => {
                handleHeaderClick(4);
              }}
            >
              Contact Us
            </Items>
            <Button
              onClick={() => {
                handleHeaderClick(5);
              }}
            >
              Get App
            </Button>
          </ListItems>
        </Div60>
      </NavWrapper>
      <MobileNavbar
        toggle={toggle}
        handleHeaderClick={handleHeaderClick}
        setToggle={setToggle}
      />
    </NavDiv>
  );
};

export default Navbar;

const NavDiv = styled.div`
  width: 100%;
  box-shadow: 0px 3px 10px 0px #00000040;
  background: ${secondary_color};
  position: fixed;
  z-index: 100;
`;
const Div60 = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    display: none;
  }
`;
const Div40 = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  // justify-content: center;
`;

const NavWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Logo = styled.img`
  width: 150px;
`;

const HamburgerLogo = styled.img`
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`;

const ListItems = styled.ul`
  display: flex;
  align-items: center;
  // margin-right: %;
  justify-content: space-evenly;
  width: 100%;
`;
const Items = styled.li`
  // width: 100%;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${primary_color};
  cursor: pointer;
  list-style: none;
  margin: 0px 5px;
`;
const Button = styled.li`
  list-style: none;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  color: ${primary_color};
  border: 1px solid #1b144e;
  border-radius: 30px;
  padding: 10px 15px;
  margin: 0px 5px;
  cursor: pointer;

  &:hover {
    color: ${secondary_color};
    background-color: ${primary_color};
  }
`;
