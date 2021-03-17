import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Language from "./Language/Language";
import { Container, Icon, ItemContainer, Title } from "./styles/Styles";

const Accordion: React.FC = () => {
  const [toggleLang, setToggleLang] = useState<boolean>(false);
  const [toggleName, setToggleName] = useState<boolean>(false);

  const clickToggleLang = (e: any) => {
    e.preventDefault();
    if (toggleName) {
      setToggleName(false);
    }
    setToggleLang(!toggleLang);
  };

  const clickToggleName = (e: any) => {
    e.preventDefault();
    if (toggleLang) {
      setToggleLang(false);
    }
    setToggleName(!toggleName);
  };

  return (
    <Container>
      <ItemContainer onClick={clickToggleName}>
        <Title>Change name</Title>
        <Icon>{toggleName ? <AiOutlineMinus /> : <AiOutlinePlus />}</Icon>
      </ItemContainer>
      {toggleName && <Language />}
      <ItemContainer onClick={clickToggleLang}>
        <Title>Change Lang</Title>
        <Icon>{toggleLang ? <AiOutlineMinus /> : <AiOutlinePlus />}</Icon>
      </ItemContainer>
      {toggleLang && <Language />}
    </Container>
  );
};

export default Accordion;
