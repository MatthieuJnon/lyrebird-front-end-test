import React, { Component } from "react";
import { connect } from "react-redux";

import Container from "react-bulma-components/lib/components/container";
import Level from "react-bulma-components/lib/components/level";
import Box from "react-bulma-components/lib/components/box";
import style from "style";

import Connection from "./Connection";
import LoadingBar from "./components/LoadingBar";

class App extends Component {
  render() {
    return (
      <Container breakpoint="desktop" style={style.paddingTop}>
        <Box>
          <Level renderAs="nav">
            <Level.Item>Lyrebird Custom Voice</Level.Item>
          </Level>
        </Box>
        {!this.props.logged && <Connection />}
        {this.props.loginPending && <LoadingBar />}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.connection.logged,
    loginPending: state.connection.loginPending
  };
};

export default connect(mapStateToProps)(App);
