export const startLogin = (status = 0, token = 0, error = "") => {
  return {
    type: "LOGIN_PROCESS_STARTED",
    status: status,
    accessToken: token,
    error: error
  }
}

export const LOGIN_PROCESS_STARTED = 'LOGIN_PROCESS_STARTED';