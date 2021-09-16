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

export const getTodo = createAction(GET_TODO);
export const addTodo = createAction(ADD_TODO, todo => todo);
export const updateTodo = createAction(UPDATE_TODO, todo => todo);
export const removeTodo = createAction(REMOVE_TODO, id => id);

export const getTodoSaga = createRequestSaga(GET_TODO, api.getAll);
export const addTodoSaga = createRequestSaga(ADD_TODO, api.create);
export const updateTodoSaga = createRequestSaga(UPDATE_TODO, api.update);
export const removeTodoSaga = createRequestSaga(REMOVE_TODO, api.remove);

export function* todoSaga() {
  yield takeLatest(GET_TODO, getTodoSaga);
  yield takeLatest(ADD_TODO, addTodoSaga);
  yield takeLatest(UPDATE_TODO, updateTodoSaga);
  yield takeLatest(REMOVE_TODO, removeTodoSaga);
}

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        //todos: state.todos.concat(action.payload),
        //todos: [...state.todos, action.payload],
        todos: state.todos.shift(action.payload),
      };
    case UPDATE_TODO_SUCCESS:
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      const newTodos = [...state.todos];
      newTodos.splice(index, 1, action.payload);
      return {
        ...state,
        // todos: state.todos.map(todo =>
        //   todo.id === action.payload.id
        //     ? {
        //         ...todo,
        //         checked: action.payload.checked,
        //         description: action.payload.description,
        //       }
        //     : todo
        // ),

        //todos: state.todos.splice(index, 1, action.payload), //기존 배열 건드려서 안됨.
        todos: newTodos,
      };
    case REMOVE_TODO_SUCCESS:
      const indexRemove = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      const newTodosRm = [...state.todos];
      newTodos.splice(indexRemove, 1);
      return {
        ...state,
        //todos: state.todos.filter(todo => todo.id !== action.payload.id),
        //todos: state.todos.splice(indexRemove, 1), //기존 배열 건드려서 안됨
        todos: newTodosRm,
      };
    default:
      return state;
  }
};

export default reducer;
