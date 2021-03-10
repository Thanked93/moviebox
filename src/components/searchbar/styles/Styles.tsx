import styled from "styled-components";

export const Inner = styled.div<{ toggle: boolean }>`
  margin-right: 10px;
  height: 40px;
  transition: width 1s;
  width: ${({ toggle }) => (toggle ? "60%" : "10%")};
  display: flex;
  align-items: center;
  background: ${({ toggle }) => (toggle ? "black" : "transparent")};
  border: ${({ toggle }) =>
    toggle ? "1px solid rgba(255,255,255,0.5)" : "none"};
`;

export const Input = styled.input<{ toggle: boolean }>`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: #000;
  outline: none;
  color: white;
  border: none;
  font-size: 20px;
`;

export const Icon = styled.div<{ toggle: boolean }>`
  height: 30px;
  width: 50px;
  background-color: ${({ toggle }) => (toggle ? "black" : "none")};
`;
