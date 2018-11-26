import { connect } from "react-redux";
import React from "react";

import LoadingBar from "components/LoadingBar";
import { fetchUtterances, updateSearchField } from "./actions";
import Utterance from "./Utterance";

class Uterrances extends React.Component {
  constructor(props) {
    super(props);
    this._startFetch = this.startFetch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  startFetch() {
    this.props.fetchUtterances(this.props.token);
  }

  componentDidMount() {
    this._startFetch();
  }

  updateSearch(event) {
    this.props.updateSearchField(event.target.value);
  }

  render() {
    return (
      <>
        <input
          className="input"
          type="text"
          placeholder="search your utterances"
          value={this.props.search}
          onChange={this.updateSearch}
        />
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
              if (element.text.includes(this.props.search)) {
                return (
                  <Utterance
                    text={element.text}
                    date={element.created_at}
                    link={element.url}
                    key={element.created_at}
                  />
                );
              } else {
                return(null);
              }
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
  fetching: state.userSpace.utterances.fetching,
  search: state.userSpace.utterances.search
});

const mapDispatchToProps = { fetchUtterances, updateSearchField };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Uterrances);
