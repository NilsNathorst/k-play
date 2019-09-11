import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Video from "./views/Video";
import SingleVideo from "./components/SingleVideo";
import Theme from "./styles/Theme";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/video" exact component={Video}></Route>
              <Route path="/video/:id" component={SingleVideo}></Route>
            </Switch>
            <Search />
          </Router>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
