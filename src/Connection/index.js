import React from "react";
import { Login } from "./actions";
import { connect } from "react-redux";
import env from "utils/env"

import Heading from "react-bulma-components/lib/components/heading";
import Modal from "react-bulma-components/lib/components/modal";


class Connection extends React.Component {
  constructor(props) {
    super(props);

    this._logIn = this.logIn.bind(this);
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this;
      let url;

      try {
        url = popup.location.href;
      } catch (error) {
        url = "";
      }

      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        this.props.Login("RESET");
      } else if (url.includes("access")) {
        clearInterval(check);

        popup.close();

        console.log(url);

        let token = url.substring(
          url.indexOf("#access_token=") + 14,
          url.indexOf("&token_type")
        );

        console.log(token);
        this.props.Login("SUCCESS", token);
      }
    }, 100);
  }

  logIn() {
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const url = "https://myvoice.lyrebird.ai/authorize";
    console.log(env)
    const clientId = env.clientId;
    const redirect = env.redirectUrl;
    const state = Math.floor(Math.random() * Math.floor(10000000));

    const generatedUrl = `${url}?response_type=token&client_id=${clientId}&redirect_uri=${redirect}&scope=voice&state=${state}`;

    this.popup = window.open(
      generatedUrl,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
    scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
    height=${height}, top=${top}, left=${left}`
    );

    this.checkPopup();
  }

  render() {
    return (
      <Modal show={true} onClose>
        <Modal.Card>
          <Modal.Card.Body className="top-radius">
            <Heading>Lyrebird custom voice</Heading>
          </Modal.Card.Body>
          <Modal.Card.Foot>
            <p href="" className="link" onClick={this._logIn}>
              Log in to see your voices
            </p>
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.connection.error
  };
};

const mapDispatchToProps = { Login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connection);
