import {
  ADD_UTTERANCE,
  FETCHING_UTTERANCES,
  DONE_FETCHING_UTTERANCES,
  ERROR_FETCHING_UTTERANCES
} from "./actions";

const initialUtterancesState = {
  utterances: [],
  fetching: false,
  error: ""
};

function utterances(state = initialUtterancesState, action) {
  switch (action.type) {
    case ADD_UTTERANCE:
      if (!action.error) {
        return Object.assign({}, state, {
          utterances: [...state.utterances, action.utterance]
        });
      } else {
        return Object.assign({}, state, {
          error: action.error,
          fetching: false
        });
      }

    case FETCHING_UTTERANCES:
      return Object.assign({}, state, {
        utterances: [],
        fetching: true
      });

    case DONE_FETCHING_UTTERANCES:
      return Object.assign({}, state, {
        fetching: false,
        error: ""
      });

    case ERROR_FETCHING_UTTERANCES:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error
      })

    default:
      return state;
  }
}

export default utterances;
