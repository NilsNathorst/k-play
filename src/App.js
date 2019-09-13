import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Content from "./views/Content";
import Video from "./views/Video";
import SingleVideo from "./components/SingleVideo";
import Theme from "./styles/Theme";
import Header from "./components/Header";


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/content" component={Content}></Route>
              <Route exact path="/video" component={Video}></Route>
              <Route path="/video/:id" component={SingleVideo}></Route>
            </Switch>
          </Router>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
