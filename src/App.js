import React, { Component } from "react";
import "./App.css";

import "./style/main.scss";

import Container from "react-bulma-components/lib/components/container";
import Level from "react-bulma-components/lib/components/level";
import Box from "react-bulma-components/lib/components/box";
import LoadingBar from "./components/ProgressBar"
import style from "./style/styles";

class App extends Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Container breakpoint="desktop" style={style.paddingTop}>
            <Box>
              <Level renderAs="nav">
                <Level.Item>Lyrebird Custom Voice</Level.Item>
              </Level>
            </Box>
            <LoadingBar/>
          </Container>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
