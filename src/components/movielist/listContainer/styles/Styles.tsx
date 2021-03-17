import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 90;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20vmin);
  grid-gap: 5px;
  height: 100%;
  max-width: 90%;
  padding-bottom: 100px;
`;
