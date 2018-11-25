import { combineReducers } from "redux";
import connection from "./Connection/reducer"
import userSpace from "./UserSpace/reducer"

export default combineReducers({
  connection,
  userSpace
});
