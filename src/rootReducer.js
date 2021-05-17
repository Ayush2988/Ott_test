import { combineReducers } from "redux";

import ottReducer from "./store/ottReducer";

const rootReducer = combineReducers({
  ottReducer,
});

export default rootReducer;
