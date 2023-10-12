import HeaderCard from "../../components/headercard";
import Navbar from "../../components/navbar";
import React from "react";

export interface NavbarProps {
  handleClick: () => void;
}

export interface HeaderProps {
  handleHeaderClick: (caseNumber: number) => void;
  toggle?: boolean
}

const Header: React.FC<HeaderProps> = ({ handleHeaderClick }) => {
  return (
    <>
      <Navbar handleHeaderClick={handleHeaderClick} />
      <HeaderCard  handleHeaderClick={handleHeaderClick} />
    </>
  );
};

export default Header;
