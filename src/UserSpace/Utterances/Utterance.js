import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlay } from "@fortawesome/free-solid-svg-icons";

const textStyle = {
  maxHeight: "100px",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

const buttonStyle = {
  width: "45px",
  margin: "0 2px"
}

class Utterance extends React.PureComponent {

  constructor(props) {
    super(props);
    this._playSound = this.playSound.bind(this);
  }

  playSound(){
    let sound = new Audio(this.props.link);
    sound.play();
  }

  render() {
    return (
      <tr>
        <td>
          <div style={textStyle}>{this.props.text}</div>
        </td>
        <td>{this.props.date.substring(0, 10)}</td>
        <td>
          <a href={this.props.link} download className="button is-info" style={buttonStyle}>
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <button className="button is-info" style={buttonStyle} onClick={this._playSound}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </td>
      </tr>
    );
  }
}

export default Utterance;
