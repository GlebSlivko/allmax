import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function TodoReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.CREATE_TODO_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.newTodo, {id: + new Date, done: false})
      ];

    case types.UPDATE_TODO_SUCCESS:
      return [
        ...state.filter(todo => todo.id !== action.todo.id),
        Object.assign({}, action.todo)
      ];

    case types.DELETE_TODO_SUCCESS:
      return state.filter(todo => todo.id !== action.todo.id);

    default:
      return state;
  }
}