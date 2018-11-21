import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "./actions"

import Container from "react-bulma-components/lib/components/container";
import Level from "react-bulma-components/lib/components/level";
import Box from "react-bulma-components/lib/components/box";
import LoadingBar from "./components/LoadingBar";
import style from "./style/styles";



class App extends Component {
  render() {
    return (
      <Container breakpoint="desktop" style={style.paddingTop}>
        <Box>
          <Level renderAs="nav">
            <Level.Item>Lyrebird Custom Voice</Level.Item>
          </Level>
        </Box>
        <LoadingBar />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    logingStatus: state.user.status
  };
};

const mapDispatchToProps = { startLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
