import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import SelectedContent from "./views/SelectedContent";
import Video from "./views/Video";
import Playlist from "./views/Playlist";
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
              <Route
                path="/selectedcontent/:category"
                component={SelectedContent}
              ></Route>
              <Route exact path="/playlist" component={Playlist}></Route>
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
