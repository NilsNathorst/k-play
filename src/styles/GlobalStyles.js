import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');
  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    font-family: Roboto;
  }
  body {
    background-color: ${theme.colorDark};
    padding: 1.3rem 1rem 2.6rem 1rem;
  }
  #root{
    overflow-x: hidden;
  }
  h1 {
    color: ${theme.colorLight};
    font-size: 52px;
    letter-spacing: -1.2px;
    font-weight: 900;
  }
`;

export default GlobalStyle;
