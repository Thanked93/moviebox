import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Icon, Inner, Input } from "./styles/styles";

const Searchbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Inner toggle={toggle}>
      <Icon toggle={toggle}>
        <BiSearchAlt2
          style={{ cursor: "pointer" }}
          onClick={() => setToggle(!toggle)}
          size="100%"
        />
      </Icon>
      {toggle && <Input toggle={toggle} type="text" />}
    </Inner>
  );
};

export default Searchbar;
