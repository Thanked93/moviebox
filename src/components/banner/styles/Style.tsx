import styled from "styled-components";

export const Inner = styled.div<{ url: string }>`
  background-image: url("${({ url }) => url}");
  background-position: center;
  backgground-repeat: no-repeat;
  background-size: 100% 100%;
  height: 60vh;
  position: relative;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 5vmin;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Overview = styled.div`
  font-size: 1.7vmin;
  font-weight: 600;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 1vmin;
`;

export const FadeLeft = styled.div`
  background: linear-gradient(270deg, transparent, rgba(37, 37, 37, 0.9), #111);
  height: 60vh;
  position: absolute;
  width: 50%;
  z-index: 2;
`;

export const Contents = styled.div`
  bottom: 15vh;
  position: absolute;
  padding: 4vmin;
  width: 35%;
  whitespace: pre;
  z-index: 3;
`;

export const Fade = styled.div`
  background: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.9), #111);
  bottom: 0;
  height: 20vh;
  position: absolute;
  width: 100%;
  z-index: 2;
`;
