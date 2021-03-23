import styled from "styled-components";

export const Inner = styled.div<{ toggle: boolean }>`
  align-items: center;
  background: ${({ toggle }) => (toggle ? "black" : "transparent")};
  border: ${({ toggle }) =>
    toggle ? "1px solid rgba(255,255,255,0.5)" : "none"};
  display: flex;
  height: 40px;
  margin-right: 10px;
  transition: width 1s;
  width: ${({ toggle }) => (toggle ? "60%" : "10%")};
`;

export const Input = styled.input<{ toggle: boolean }>`
  background-color: #000;
  border: none;
  color: white;
  display: flex;
  font-size: 20px;
  height: 30px;
  outline: none;
  width: 100%;
`;

export const Icon = styled.div<{ toggle: boolean }>`
  background-color: ${({ toggle }) => (toggle ? "black" : "none")};
  height: 30px;
  width: 50px;
`;
