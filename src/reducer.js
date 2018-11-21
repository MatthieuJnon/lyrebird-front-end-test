import { LOGIN_PROCESS_STARTED } from "./actions";
import { combineReducers } from "redux";

const initialLoginState = {
  status: "LOGGED_OUT",
  accessKey: 0,
  error: ""
};

function user(state = initialLoginState, action) {
  switch (action.type) {
    case LOGIN_PROCESS_STARTED:
      switch (action.status) {
        case "SUCCESS":
          state.accessKey = action.accessToken;
          state.status = "LOGGED_IN";
          break;
        case "ERROR":
          state.error = action.error;
          break;
        default:
          return state;
      }
      break;
    default:
      return state;
  }
}

export default combineReducers({
  user
});
