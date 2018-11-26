import { combineReducers } from "redux";
import utterances from "./Utterances/reducer";
import newUtterance from "./NewUtterance/reducer";

export default combineReducers({
  utterances,
  newUtterance
});
