import Request from "utils/request";

export const addUtterance = utterance => {
  return {
    type: "ADD_UTTERANCE",
    utterance: utterance
  };
};

export const startFetchUtterances = () => {
  return {
    type: "FETCHING_UTTERANCES"
  };
};

export const doneFetchingUtterances = () => {
  return {
    type: "DONE_FETCHING_UTTERANCES"
  };
};

export const errorFetchUtterances = error => {
  return {
    type: "ERROR_FETCHING_UTTERANCES",
    error: error
  };
};

export const updateSearchField = search => {
  return {
    type: "UPDATE_SEARCH",
    search: search
  }
}

export const ERROR_FETCHING_UTTERANCES = "ERROR_FETCHING_UTTERANCES";
export const DONE_FETCHING_UTTERANCES = "DONE_FETCHING_UTTERANCES";
export const FETCHING_UTTERANCES = "FETCHING_UTTERANCES";
export const ADD_UTTERANCE = "ADD_UTTERANCE";
export const UPDATE_SEARCH = "UPDATE_SEARCH"

export const fetchUtterances = token => {
  return dispatch => {
    dispatch(startFetchUtterances());

    return Request.get("generated", null, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(
      response => {
        response.results.forEach(utterance => {
          dispatch(addUtterance(utterance));
        });
        dispatch(doneFetchingUtterances());
      },
      error => dispatch(errorFetchUtterances(error))
    );
  };
};
