import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const textStyle = {
  maxHeight: "100px",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

const buttonStyle = {
  width: "45px",
  margin: "1px 2px"
};

const textColumnStyle = {
  maxWidth: "500px"
}

class Utterance extends React.PureComponent {
  constructor(props) {
    super(props);
    this._playSound = this.playSound.bind(this);
    this._pauseSound = this.pauseSound.bind(this);
    this.state = {
      playing: false,
      paused: false
    };
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
  }

  playSound() {
    if (this.state.paused === false) {
      let sound = new Audio(this.props.link);
      this.sound = sound;
      sound.play();
      sound.addEventListener('ended', () => {
        this.setState({
          playing: false,
          paused: false
        })
      }, false);
    } else {
      this.audioCtx.resume();
      this.sound.play();
    }
    this.setState({
      playing: true,
      paused: false
    });
  }

  pauseSound() {
    this.sound.pause();
    this.setState({
      playing: false,
      paused: true
    });
  }

  render() {
    return (
      <tr>
        <td style={textColumnStyle}>
          <div style={textStyle}>{this.props.text}</div>
        </td>
        <td>{this.props.date.substring(0, 10)}</td>
        <td>
          <a
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="button is-link"
            style={buttonStyle}
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
          {!this.state.playing ? (
            <button
              className="button is-link"
              style={buttonStyle}
              onClick={this._playSound}
            >
              <FontAwesomeIcon icon={faPlay} />
            </button>
          ) : (
            <button
              className="is-link button"
              style={buttonStyle}
              onClick={this._pauseSound}
            >
              <FontAwesomeIcon icon={faPause} />
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default Utterance;
