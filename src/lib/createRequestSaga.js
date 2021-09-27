import { call, put } from "@redux-saga/core/effects";
import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    //function*: 제너레이터 정의
    //actino이 param으로 넘어오면 iterator 생성
    yield put(startLoading(type)); //첫번째 yield만날 때 까지 제너레이터는 실행됨.
    //yield put({ type });
    try {
      const response = yield call(request, action.payload); //call(Promise를 반환하는 함수 호출) -> request
      //call(request, action.payload)=api.getAll(action.payload)
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
    //yield put(finishLoading(type));
  };
}
