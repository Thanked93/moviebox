import styled from "styled-components";

export const Inner = styled.div<{ length: number }>`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(6, 20vmin);
  grid-template-rows: repeat(${({ length }) => Math.floor(length / 5)});
  grid-gap: 5px;
  height: auto;
  width: auto;
  padding-bottom: 100px;
`;

export const PrevWrap = styled.div`
  display: flex;
  margin: 2px;
  margin-right: 4px;
  margin-bottom: 4px;
  justify-content: center;
  align-items: center;
  height: 30vmin;
  width: 20vmin;
`;
