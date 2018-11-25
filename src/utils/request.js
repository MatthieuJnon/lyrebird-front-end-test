import axios from "axios";
import env from "./env";

const req = (method = "get", url, data, options = {}) => {
  url = `${env.lyrebirdApi}${url}`;
  const opts = { method, url, ...options };

  if (data) {
    if (method === "get") {
      opts.params = data;
    } else {
      opts.data = data;
    }
  }

  const makeRequest = axios(opts);

  return makeRequest
    .then(({ data }) => data)
    .catch(({ response: { data } }) => {
      throw data || "Unknown error";
    });
};

const Request = {
  post: (url, data, opts) => req("post", url, data, opts),
  get: (url, data, opts) => req("get", url, data, opts),
  put: (url, data, opts) => req("put", url, data, opts),
  delete: (url, data, opts) => req("delete", url, data, opts),
  patch: (url, data, opts) => req("patch", url, data, opts)
};

export default Request;
