import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  margin-right: 10px;
  height: 30px;
  width: 50px;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  margin-left: 5px;
  height: 15px;
  height: 100%;
  color: white;
`;

export const Menu = styled.select`
  positon: absolute;
  right: 400px;
  top: 200px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  height: 600px;
  width: 400px;
`;

export const Option = styled.option`
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
