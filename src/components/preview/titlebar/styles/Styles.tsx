import styled from "styled-components";

export const Inner = styled.div`
  padding-left: 3vmin;
  position: absolute;
  top: 20vmin;
  width: 30%;
`;

export const Title = styled.h2`
  font-size: 3vmin;
  color: white;
  font-weight: 900;
`;

export const Fade = styled.div`
  position: absolute;
  width: 60%;
  height: 10vmin;
  top: 34vmin;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.5),
    transparent
  );
`;
