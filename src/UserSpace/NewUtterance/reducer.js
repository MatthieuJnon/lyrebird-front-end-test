import {
  NEW_UTTERANCE_START,
  ERROR_CREATING_UTTERANCE,
  DONE_CREATING_UTTERANCE
} from "./actions";

const initialNewUtteranceState = {
  working: false,
  errror: ""
};

function newUtterance(state = initialNewUtteranceState, action) {
  switch (action.type) {
    case NEW_UTTERANCE_START:
      return Object.assign({}, state, {
        working: true
      });
    case ERROR_CREATING_UTTERANCE:
      return Object.assign({}, state, {
        working: false,
        errror: action.error
      })
    case DONE_CREATING_UTTERANCE:
      return Object.assign({}, state, {
        working: false
      })
    default:
      return state;
  }
}

export default newUtterance;