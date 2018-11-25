import React from "react";

import Utterances from "./Utterances";
import NewUtterance from "./NewUtterance";

import style from "style"

class UserSpace extends React.Component {
  render() {
    return (
      <div>
          <NewUtterance />
          <h2 className="title" style={style.paddingTop}>Your utterances</h2>
          <Utterances />
      </div>
    );
  }
}

export default UserSpace;
