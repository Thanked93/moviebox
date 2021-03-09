import styled from "styled-components";

export const Inner = styled.div<{ toggle: boolean }>`
  margin-right: 10px;
  height: 40px;
  transition: width 1s;
  width: ${({ toggle }) => (toggle ? "60%" : "10%")};
  display: flex;
  align-items: center;
  border: ${({ toggle }) => (toggle ? "1px solid white" : "none")};
`;

export const Input = styled.input<{ toggle: boolean }>`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: #000;
  border-bottom: 1px solid #222;
  outline: none;
  color: white;
  border: none;
`;

export const Icon = styled.div<{ toggle: boolean }>`
  height: 30px;
  width: 50px;
  background-color: ${({ toggle }) => (toggle ? "black" : "none")};
`;
