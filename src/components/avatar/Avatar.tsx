import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { Inner, Image, Menu, Option, Icon } from "./styles/styles";

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
        <Menu onMouseLeave={() => setToggle(false)}>
          <Option>Account</Option>
        </Menu>
      )}
    </Inner>
  );
};

export default Avatar;
