import React from "react";
import styled from "styled-components";
import ContainerTemplate from "./ContainerTemplate";
const Container = styled(ContainerTemplate)`
  width: 100%;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colorDark},
    ${({ theme }) => theme.colorDark} 60px,
    ${({ theme }) => theme.colorLight} 60px
  );
  grid-auto-rows: 130px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;
`;
const VideosContainer = props => {
  return <Container>{props.children}</Container>;
};
export default VideosContainer;
