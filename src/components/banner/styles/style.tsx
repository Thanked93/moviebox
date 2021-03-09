import styled from "styled-components";

export const Inner = styled.div<{ url: string }>`
  width: 100%;
  height: 60vh;
  background-image: url("${({ url }) => url}");
  backgground-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Title = styled.div`
  font-size: 3rem;
  margin-top: 25vh;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Overview = styled.div`
  font-size: 1rem;
`;

export const Buttons = styled.div``;

export const Contents = styled.div`
  whitespace: pre;
  padding: 50px;
  width: 50%;
`;

export const Fade = styled.div`
  width: 100%;
  height: 20vh;
  background: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.9), #111);
`;
