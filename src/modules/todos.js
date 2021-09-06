import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "@redux-saga/core/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

const GET_TODO = "GET_TODO";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";

const ADD_TODO = "ADD_TODO";
const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";

const UPDATE_TODO = "UPDATE_TODO";
const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";

const REMOVE_TODO = "REMOVE_TODO";
const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS";

export const getTodo = createRequestSaga(GET_TODO, api.getAll);
export const addTodo = createRequestSaga(ADD_TODO, api.create);
export const updateTodo = createRequestSaga(UPDATE_TODO, api.update);
export const removeTodo = createRequestSaga(REMOVE_TODO, api.remove);

export function* todoSaga() {
  yield takeLatest(GET_TODO, getTodo);
}

const initialState = {
  todos: [],
};

const reducer = handleActions(
  {
    [GET_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: action.payload,
    }),
    [ADD_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [UPDATE_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: state.todos.splice(
        state.todos.findIndex(todo => todo.id === action.payload.id),
        1,
        action.payload
      ),
    }),
    [REMOVE_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: state.todos.splice(
        state.todos.findIndex(todo => todo.id === action.payload.id),
        1
      ),
    }),
  },
  initialState
);

export default reducer;
