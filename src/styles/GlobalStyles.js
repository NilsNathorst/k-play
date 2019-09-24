import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');

  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    font-family: Roboto;
  }
  a, a:visited{
    text-decoration: none;
    color: ${theme.colorLight};
  }
    
  body {
    background-color: ${theme.colorDark};
    color: ${theme.colorLight};
  }
  #root{
    overflow-x: hidden;
  }
p, .card-title {
  opacity: 0.7
}
  ${"" /* MOBILE TYPOGRAPHY */}
  h1,h2,h3,h4, .preamble {
    letter-spacing: -0.0294118em;
  }

  h5 {
    letter-spacing: -0.01em;
  }
  h1 { font: ${theme.fontMobileH1} }
  h2 { font: ${theme.fontMobileH2} }
  h3 { font: ${theme.fontMobileH3} }
  h4 { font: ${theme.fontMobileH4} }
  h5 { font: ${theme.fontMobileH5} }
  p { font: ${theme.fontMobileP} }
  ${"" /* alternate P tags "preamble" and "card-title" */}
.preamble {font: ${theme.fontMobilePreamble}!important;}
.card-title { font: ${theme.fontMobileCardTitle}!important;}
.secondary-cta {
  font: ${theme.fontMobileSecondaryCTA}!important;
  opacity: 1;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.primary-cta {
  font: ${theme.fontMobilePrimaryCTA}!important;
  opacity: 1;
  text-transform: capitalize;
}
.secondary-cta:after, 
.primary-cta:after {
    content: ""; 
    display: block; 
    margin: 0 auto; 
    width: 90%; 
    padding-top: 2px; 
    border-bottom: 2px solid ${theme.colorPrimary}; 
}
  @media screen and (min-width: 900px) {
    h1,h2,h3,h4, article {
    letter-spacing: -0.0294118em;
  }
  h1 { font: ${theme.fontDesktopH1} }
  h2 { font: ${theme.fontDesktopH2} }
  h3 { font: ${theme.fontDesktopH3} }
  h4 { font: ${theme.fontDesktopH4} }
  h5 { font: ${theme.fontDesktopH5} }
  p { font: ${theme.fontDesktopP} }
  ${"" /* alternate P tags "preamble" and "card-title" */}
.preamble {font: ${theme.fontDesktopPreamble}!important; }
.card-title { font: ${theme.fontDesktopCardTitle}!important;}
}
`;

export default GlobalStyle;
