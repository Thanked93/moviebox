import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { ChangeSearchTerm } from "../../store/account/actions";
import { Icon, Inner, Input } from "./styles/Styles";

const Searchbar = () => {
  const location = useLocation();
  const router = useHistory();
  const [toggle, setToggle] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [changeTerm, setChangeTerm] = useState<boolean>(false);
  const [push, setPush] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (push) {
      router.push("/browse");
    }
    setPush(false);
  }, [push, router]);

  // dispatch 2 seconds after the user stopped typing
  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("dispatch", searchTerm);
      dispatch(ChangeSearchTerm(searchTerm));
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm, dispatch]);

  return (
    <Inner toggle={toggle}>
      <Icon toggle={toggle}>
        <BiSearchAlt2
          style={{ cursor: "pointer" }}
          onClick={() => setToggle(!toggle)}
          size="100%"
        />
      </Icon>
      {toggle && (
        <Input
          value={searchTerm}
          onChange={(e) => {
            if (!location.pathname.includes("browse")) {
              setPush(true);
            }
            setSearchTerm(e.target.value);
          }}
          toggle={toggle}
          type="text"
        />
      )}
    </Inner>
  );
};

export default Searchbar;
