import React from "react";
import { Login } from "./actions";
import { connect } from "react-redux";
import env from "utils/env";

class Connection extends React.Component {
  constructor(props) {
    super(props);

    this._logIn = this.logIn.bind(this);
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this;

      if (
        (!popup || popup.closed || popup.closed === undefined) &&
        !this.props.logged
      ) {
        clearInterval(check);
        this.props.Login("RESET");
      }
    }, 100);

    window.addEventListener("message", event => {
      if (event.data.origin === "lyrebird") {
        this.popup.close();

        let url = event.data.url;

        let token = url.substring(
          url.indexOf("#access_token=") + 14,
          url.indexOf("&token_type")
        );

        this.props.Login("SUCCESS", token);
      } else {
        return;
      }
    });
  }

  logIn() {
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const url = "https://myvoice.lyrebird.ai/authorize";
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
      <div className="modal is-active">
        <div className="modal-background" role="presentation" />
        <div className="modal-card">
            <div className="modal-card-head">
              <div className="modal-card-title is-size-3">Lyrebird custom voice</div>
            </div>
            <div className="modal-card-foot">
              <p href="" className="link" onClick={this._logIn}>
                Log in to see your utterances
              </p>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.connection.error,
    logged: state.connection.logged
  };
};

const mapDispatchToProps = { Login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connection);
