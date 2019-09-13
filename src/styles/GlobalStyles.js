import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    font-family: Roboto;
  }
`;

export default GlobalStyle;
