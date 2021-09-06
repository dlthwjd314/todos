import { call, put } from "@redux-saga/core/effects";
import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FILURE`;

  return function* (action) {
    console.log("action", action);
    yield put(startLoading(type));
    //yield put({ type });
    try {
      const response = yield call(request, action.payload); //call(Promise를 반환하는 함수 호출) -> request
      // call(request, action.payload)=api.getAll(action.payload)
      console.log("createRequestSaga, response", response);
      yield put({
        //put-> dispatch
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
      throw e;
    }
    yield put(finishLoading(type));
  };
}
