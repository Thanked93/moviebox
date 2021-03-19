import React, { useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import {
  Icon,
  Image,
  Inner,
  Line,
  Me,
  MeDesc,
  Menu,
  MenuItem,
  MenuMe,
  MenuWrapper,
} from "./styles/Styles";

const Avatar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Inner>
      <Image
        onMouseEnter={() => setToggle(true)}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        onClick={() => setToggle((toggle) => !toggle)}
      />
      <Icon>
        {toggle ? (
          <BsChevronCompactUp size="100%" />
        ) : (
          <BsChevronCompactDown size="100%" />
        )}
      </Icon>
      {toggle && (
        <MenuWrapper onMouseLeave={() => setToggle(false)}>
          <Menu>
            <Link style={{ textDecoration: "none" }} to="/profile">
              <MenuMe>
                <Me
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt=""
                />
                <MeDesc>Guest</MeDesc>
              </MenuMe>
            </Link>
            <Line />
            <Link to="/help" style={{ textDecoration: "none" }}>
              <MenuItem>
                <FormattedMessage id="avatar.helpcentre" />
              </MenuItem>
            </Link>
            <Link to="/settings" style={{ textDecoration: "none" }}>
              <MenuItem>
                <FormattedMessage id="avatar.settings" />
              </MenuItem>
            </Link>
          </Menu>
        </MenuWrapper>
      )}
    </Inner>
  );
};

export default Avatar;
