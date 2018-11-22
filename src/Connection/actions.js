export const Login = (status = "", token = 0, error = "") => {
  return {
    type: "LOGIN_PROCESS_STARTED",
    status: status,
    accessToken: token,
    error: error
  }
}

export const LOGIN_PROCESS_STARTED = 'LOGIN_PROCESS_STARTED';