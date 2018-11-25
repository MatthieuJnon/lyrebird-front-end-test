export const Login = (status = "", token = 0, error = "") => {
  return {
    type: "LOGIN_PROCESS",
    status: status,
    accessToken: token,
    error: error
  }
}

export const LOGIN_PROCESS = 'LOGIN_PROCESS';