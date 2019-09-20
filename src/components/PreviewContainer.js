import React from "react";
import styled from "styled-components";
import ContainerTemplate from "./ContainerTemplate";

const PreviewContainer = props => {
  return <Container>{props.children}</Container>;
};
export default PreviewContainer;
