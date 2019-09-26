import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import SelectedContent from "./views/SelectedContent";
import Video from "./views/Video";
import Playlist from "./views/Playlist";
import CategoriesContainer from "./components/CategoriesContainer";
import MediaPlayer from "./components/MediaPlayer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./styles/Theme";

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
              <Route
                exact
                path="/selectedcontent"
                component={SelectedContent}
              ></Route>
              <Route exact path="/playlist" component={Playlist}></Route>
              {/* <Route exact path="/media" component={Video}></Route> */}
              <Route path="/media/:id" component={MediaPlayer}></Route>
            </Switch>
            <CategoriesContainer secondary />
            <Footer />
          </Router>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
