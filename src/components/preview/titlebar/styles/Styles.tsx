import styled from "styled-components";

export const Inner = styled.div`
  position: absolute;
  padding-left: 3vmin;
  z-index: 1;
  top: 18vmin;
  width: 30%;
`;

export const Title = styled.h2`
  font-size: 3vmin;
  color: white;
  margin-bottom: 1vmin;
  font-weight: 900;
`;

export const Fade = styled.div`
  position: absolute;
  width: 100%;
  height: 10vmin;
  top: 35vmin;
  background: linear-gradient(180deg, #000, #333);
`;
