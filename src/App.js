import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import styled from "styled-components";
const StyledHeader = styled.h2`
  color: ${({ theme }) => theme.colorDark};
  ${props =>
    props.primary
      ? `color: ${props.theme.colorPrimary};`
      : `color: ${props.theme.colorSecondary}`};
`;

const TestHeader = props => {
  return <StyledHeader {...props}>{props.children}</StyledHeader>;
};

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <>
          <TestHeader>Hello World</TestHeader>
          <TestHeader primary>Hello World</TestHeader>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
