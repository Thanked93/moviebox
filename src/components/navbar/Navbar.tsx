import React, { useEffect, useState } from "react";
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
        <LinkLogo>MovieBox</LinkLogo>
        <LinkItem>Startseite</LinkItem>
        <LinkItem>Filme</LinkItem>
        <LinkItem>Serien</LinkItem>
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
