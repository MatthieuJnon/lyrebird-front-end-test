import React from "react";


class NewUtterance extends React.Component {
  render() {
    return (
      <>
        <div className="field">
          <label className="label title">Your new utterance</label>
          <div className="control">
            <textarea className="textarea" placeholder="Hello World" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </>
    );
  }
}

export default NewUtterance;
