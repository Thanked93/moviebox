import styled from "styled-components";

export const Inner = styled.div<{ url: string }>`
  position: relative;
  width: 100%;
  height: 60vh;
  background-image: url("${({ url }) => url}");
  backgground-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;

export const Title = styled.div`
  font-size: 5vmin;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Overview = styled.div`
  font-weight: 600;
  font-size: 1.7vmin;
`;

export const Buttons = styled.div`
  margin-top: 1vmin;
`;

export const FadeLeft = styled.div`
  position: absolute;
  z-index: 2;
  height: 60vh;
  width: 50%;
  background: linear-gradient(
    270deg,
    transparent,
    rgba(37, 37, 37, 0.9),
    #111
  ); ;
`;

export const Contents = styled.div`
  position: absolute;
  z-index: 3;
  padding: 4vmin;
  width: 35%;
  whitespace: pre;
  bottom: 15vh;
`;

export const Fade = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 20vh;
  background: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.9), #111);
`;
