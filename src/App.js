import React, { Component } from "react";
import { connect } from "react-redux";

import style from "style";

import Connection from "./Connection";
import LoadingBar from "./components/LoadingBar";
import UserSpace from "./UserSpace";

class App extends Component {
  render() {
    return (
      <div className="container is-desktop" style={style.paddingContainer}>
        <div className="box">
          <div className="level">
            <div className="level-item is-size-3">Lyrebird Custom Voice</div>
          </div>
        </div>
        {!this.props.logged && <Connection />}
        {this.props.loginPending && <LoadingBar />}
        {this.props.logged && <UserSpace />}
      </div>
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
