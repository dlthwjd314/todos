import { combineReducers } from "redux";
import reducer, { todoSaga } from "./todos";
import { all } from "@redux-saga/core/effects";
import loading from "./loading";

const rootReducer = combineReducers({
  reducer,
  loading,
});

export function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootReducer;
