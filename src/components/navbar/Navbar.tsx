import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import Searchbar from "../searchbar/Searchbar";
import gh from "./assets/ghmarkW.png";
import {
  Anchor,
  Inner,
  LeftWrapper,
  LinkItem,
  LinkLogo,
  MiddleWrapper,
  RightWrapper,
} from "./styles/style";

const Navbar: React.FC = () => {
  const [bgVisible, setBgVisible] = useState<boolean>(false);

  function setScroll() {
    window.scrollY < 130 ? setBgVisible(true) : setBgVisible(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => window.removeEventListener("scroll", setScroll);
  }, [bgVisible]);

  return (
    <Inner transparent={bgVisible}>
      <LeftWrapper>
        <Link to="/">
          <LinkLogo>MovieBox</LinkLogo>
        </Link>
        <Link to="/">
          <LinkItem>Startseite</LinkItem>
        </Link>
        <Link to="/movies">
          <LinkItem>Filme</LinkItem>
        </Link>
        <Link to="/series">
          <LinkItem>Serien</LinkItem>
        </Link>
      </LeftWrapper>
      <MiddleWrapper>
        <Anchor href="#">
          <img src={gh} alt="" />
        </Anchor>
      </MiddleWrapper>
      <RightWrapper>
        <Searchbar />
        <Avatar />
      </RightWrapper>
    </Inner>
  );
};

export default Navbar;
