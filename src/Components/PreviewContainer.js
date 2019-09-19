import React from "react";
import styled from "styled-components";
import ContainerTemplate from "./ContainerTemplate";
const Container = styled(ContainerTemplate)`
  width: 100%;
  grid-template-columns: 48% 48%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
`;
const PreviewContainer = props => {
  return <Container>{props.children}</Container>;
};
export default PreviewContainer;
