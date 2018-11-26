import { connect } from "react-redux";
import React from "react";

import LoadingBar from "components/LoadingBar"
import { fetchUtterances } from "./actions";
import Utterance from "./Utterance";

class Uterrances extends React.Component {
  constructor(props) {
    super(props);
    this._startFetch = this.startFetch.bind(this);
  }

  startFetch() {
    this.props.fetchUtterances(this.props.token);
  }

  componentDidMount() {
    this._startFetch();
  }

  render() {
    return (
      <>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Text</th>
              <th>Created at</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.utterances.map(element => {
              return (
                <Utterance
                  text={element.text}
                  date={element.created_at}
                  link={element.url}
                  key={element.created_at}
                />
              );
            })}
          </tbody>
        </table>
        {this.props.fetching && <LoadingBar />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: state.userSpace.utterances.error,
  utterances: state.userSpace.utterances.utterances,
  token: state.connection.accessKey,
  fetching: state.userSpace.utterances.fetching
});

const mapDispatchToProps = { fetchUtterances };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Uterrances);
