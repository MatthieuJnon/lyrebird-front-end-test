import { fetchUtterances } from "src/UserSpace/Utterances/actions";
import Request from "utils/request";

export const StartPostingUtterance = text => {
  return {
    type: "NEW_UTTERANCE_START",
    text: text
  };
};

export const doneCreatingUtterance = () => {
  return {
    type: "DONE_CREATING_UTTERANCE"
  };
};

export const errorCreatingUtterance = error => {
  return {
    type: "ERROR_CREATING_UTTERANCE",
    error: error
  };
};

export const ERROR_CREATING_UTTERANCE = "ERROR_CREATING_UTTERANCE";
export const DONE_CREATING_UTTERANCE = "DONE_CREATING_UTTERANCE";
export const NEW_UTTERANCE_START = "NEW_UTTERANCE_START";

export const postUtterance = (token, text) => {
  return dispatch => {
    dispatch(StartPostingUtterance());

    return Request.post(
      "generate",
      { text: text },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    ).then(
      () => {
        dispatch(doneCreatingUtterance());
        dispatch(fetchUtterances(token));
      },
      error => dispatch(errorCreatingUtterance(error))
    );
  };
};
