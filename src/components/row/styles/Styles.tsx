import styled from "styled-components";

export const Inner = styled.div`
 
  display: flex;
  flex-direction:column;
  width: 100%;
  overflow-x: hidden;
  height 450px;
  margin-bottom:10px;
  transform:translateY(-10vh);
`;

export const InnerMovies = styled.div<{ length: number }>`
width: 100%;
max-height 100%;
display: grid;
grid-template-columns:repeat(${({ length }) => length + 1},13vw);
grid-template-rows:1fr;
overflow-x: hidden;

`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  height: 50px;
  margin-bottom: 0;
`;
