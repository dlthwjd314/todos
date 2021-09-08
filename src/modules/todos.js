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

//update, delete의 경우 필드가 많으면 findIndex문을 따로 변수에 넣고 splice해야함 (기본형, immer 써서)
//따로 빼놓을 수 없는 경우, 아래와 같이 update, delete 작성
//근데 findIndex문을 splice에 넣었을 때, 오래걸리는건 이해하겠는데 왜 리렌더링 시 순서가 바뀔까?

// const reducer = handleActions(
//   {
//     [GET_TODO_SUCCESS]: (state, action) => ({
//       ...state,
//       todos: action.payload,
//     }),
//     [ADD_TODO_SUCCESS]: (state, action) => ({
//       ...state,
//       todos: state.todos.concat(action.payload),
//     }),
//     [UPDATE_TODO_SUCCESS]: (state, action) => ({
//       ...state,
//       // todos: state.todos.splice(
//       //   state.todos.findIndex(todo => todo.id === action.payload.id),
//       //   1,
//       //   action.payload
//       // ),
//       todos: state.todos.map(todo =>
//         todo.id === action.payload.id
//           ? {
//               ...todo,
//               checked: action.payload.checked,
//               description: action.payload.description,
//             }
//           : todo
//       ),
//     }),
//     [REMOVE_TODO_SUCCESS]: (state, action) => ({
//       ...state,
//       // todos: state.todos.splice(
//       //   state.todos.findIndex(todo => todo.id === action.payload.id),
//       //   1
//       // ),
//       todos: state.todos.filter(todo => todo.id !== action.payload.id),
//     }),
//   },
//   initialState
// );

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
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO_SUCCESS:
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      // console.log("state.todos", state.todos);
      console.log("action.payload", action.payload);
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                checked: action.payload.checked,
                description: action.payload.description,
              }
            : todo
        ),
      };
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
