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

export const MenuWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 65px;
  height: auto;
  width: 20vmin;
  background: transparent;
`;

export const Menu = styled.div`
  position: absolute;
  width: 20vmin;
  display: flex;
  flex-direction: column;
  height: 20vmin;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid white;
`;

export const MenuMe = styled.div`
  height: 5vmin;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Me = styled.img`
  height: 3vmin;
  width: 3vmin;
  margin-right: 10px;
`;

export const MeDesc = styled.div`
  color: white;
  font-size: 1.7vmin;
`;

export const MenuItem = styled.div`
  text-decoration: 0;
  width: 100%;
  font-size: 1.9vmin;
  color: white;
  display: flex;
  padding: 5px;
  margin-left: 5px;
`;
