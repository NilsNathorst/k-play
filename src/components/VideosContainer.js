import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colorDark},
    ${({ theme }) => theme.colorDark} 95px,
    ${({ theme }) => theme.colorLight} 95px
  );
  grid-auto-rows: 130px;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 0 1rem 2.5rem 1rem;
  grid-gap: 2rem;
`;
const VideosContainer = props => {
  return <Container>{props.children}</Container>;
};
export default VideosContainer;
