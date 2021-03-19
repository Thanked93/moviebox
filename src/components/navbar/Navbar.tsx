import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "react-router-dom";
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
  NavItems,
  RightWrapper,
} from "./styles/Style";

const Navbar: React.FC = () => {
  const [bgVisible, setBgVisible] = useState<boolean>(false);
  const [colorize, setColorize] = useState<number>(0);
  const location = useLocation();
  function setScroll() {
    window.scrollY < 130 ? setBgVisible(true) : setBgVisible(false);
  }

  useEffect(() => {
    if (location.pathname.includes("movies")) {
      setColorize(1);
    } else if (location.pathname.includes("series")) {
      setColorize(2);
    } else if (location.pathname.includes("settings" || "profile" || "help")) {
      setColorize(3);
    } else {
      setColorize(0);
    }
  }, [setColorize, location.pathname]);

  useEffect(() => {
    setScroll();
    window.addEventListener("scroll", setScroll);
    return () => window.removeEventListener("scroll", setScroll);
  }, [bgVisible]);

  return (
    <Inner transparent={bgVisible}>
      <LeftWrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LinkLogo>MovieBox</LinkLogo>
        </Link>
        <NavItems>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkItem current={colorize === 0}>
              <FormattedMessage id="navbar.home" />
            </LinkItem>
          </Link>
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <LinkItem current={colorize === 1}>
              <FormattedMessage id="navbar.movies" />
            </LinkItem>
          </Link>
          <Link to="/series" style={{ textDecoration: "none" }}>
            <LinkItem current={colorize === 2}>
              <FormattedMessage id="navbar.series" />
            </LinkItem>
          </Link>
        </NavItems>
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
