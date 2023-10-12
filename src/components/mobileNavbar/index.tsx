import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { primary_color } from "../../assets/colors";

interface ContainerProps {
  toogle: boolean;
}

interface ContainerWrapperProps {
  toogle?: boolean;
}
interface MenuProps {
  handleHeaderClick: (caseNumber: number) => void;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MenuProps> = ({
  handleHeaderClick,
  toggle,
  setToggle,
}) => {
  const handleClick = (e: any) => {
    handleHeaderClick(e);
    setTimeout(() => {
      setToggle(false);
    }, 100);
  };
  return (
    <>
      <Container toogle={toggle}>
        <ContainerWrapper>
          <ListItems>
            <Items
              onClick={() => {
                handleClick(1);
              }}
            >
              How it works?
            </Items>
            <Items
              onClick={() => {
                handleClick(2);
              }}
            >
              Why Galaxi?
            </Items>
            <Items
              onClick={() => {
                handleClick(6);
              }}
            >
              Explainer Video
            </Items>
            <Items
              onClick={() => {
                handleClick(3);
              }}
            >
              Features
            </Items>
            <Items
              onClick={() => {
                handleClick(7);
              }}
            >
              FAQs
            </Items>
            <Items
              onClick={() => {
                handleClick(4);
              }}
            >
              Contact Us
            </Items>
            <Items
              onClick={() => {
                handleClick(5);
              }}
            >
              Get App
            </Items>
          </ListItems>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default MobileMenu;

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.toogle ? "30vh" : "0vh")};
  display: none;
  background: white;
  position: sticky;
  transition: display 0.3s;
  z-index: ${(props) => (props.toogle ? "5" : "0")};
  @media (max-width: 750px) {
    display: ${(props) => (props.toogle ? "unset" : "none")};
  }
`;
const ContainerWrapper = styled.div<ContainerWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
  padding: 0;
`;
const Items = styled.li`
  width: 75%;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${primary_color};
  cursor: pointer;
  list-style: none;
  margin: 5px 5px;
  padding: 5px 5px;
  border-bottom: 1px solid #1d1752;
`;
