import { connect } from "react-redux";
import React from "react";

import { postUtterance } from "./actions";

class NewUtterance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    this.createUtterance = this.createUtterance.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createUtterance() {
    this.props.postUtterance(this.props.token, this.state.text);
    this.setState({ text: ""});
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <>
        <div className="field">
          <label className="label title">Your new utterance</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Hello World"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link" onClick={this.createUtterance}>
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: state.userSpace.newUtterance.error,
  token: state.connection.accessKey,
  working: state.userSpace.newUtterance.working
});

const mapDispatchToProps = { postUtterance };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUtterance);
