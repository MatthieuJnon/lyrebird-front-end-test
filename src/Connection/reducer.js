import { LOGIN_PROCESS } from "./actions";

const initialLoginState = {
  logged: false,
  loginPending: false,
  accessKey: 0,
  error: ""
};

function user(state = initialLoginState, action) {
  switch (action.type) {
    case LOGIN_PROCESS:
      switch (action.status) {
        case "SUCCESS":
          return Object.assign({}, state, {
            accessKey: action.accessToken,
            logged: true,
            loginPending: false,
            error: ""
          });
        case "ERROR":
          return Object.assign({}, state, {
            error: action.error,
            loginPending: false
          });
        case "RESET":
          return Object.assign({}, state, {
            loginPending: false
          });
        default:
          return Object.assign({}, state, {
            loginPending: true
          });
      }
    default:
      return state;
  }
}

export default user;
