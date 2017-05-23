import * as types from './actionTypes';

export function createTodoSuccess(newTodo) {
  return {type: types.CREATE_TODO_SUCCESS, newTodo};
}

export function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODO_SUCCESS, todo};
}

export function deleteTodoSuccess(todo) {
  return {type: types.DELETE_TODO_SUCCESS, todo};
}

export function markTodoSuccess(todo) {
  return {type: types.MARK_TODO_SUCCESS, todo};
}

export function unmarkTodoSuccess(todo) {
  return {type: types.UNMARK_TODO_SUCCESS, todo};
}

export function saveTodo(newTodo) {
	return function (dispatch) {
		return dispatch(createTodoSuccess(newTodo));
	};
}

export function updateTodo(todo) {
	return function (dispatch) {
		return dispatch(updateTodoSuccess(todo));
	};
}

export function deleteTodo(todo) {
  return function (dispatch) {
    return dispatch(deleteTodoSuccess(todo));
  };
}

export function markTodo(todo) {
  return function (dispatch) {
    return dispatch(markTodoSuccess(todo));
  };
}

export function unmarkTodo(todo) {
  return function (dispatch) {
    return dispatch(unmarkTodoSuccess(todo));
  };
}