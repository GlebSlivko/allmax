import * as types from './actionTypes';

export function createTodoSuccess(newTodo) {
  return {type: types.CREATE_TODO_SUCCESS, newTodo};
}

export function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODO_SUCCESS, todo};
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


/*import * as types from './actionTypes';
import todoApi from '../api/TodoApi';

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos};
}

export function createTodoSuccess(todo) {
  return {type: types.CREATE_TODOS_SUCCESS, todo};
}

export function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODOS_SUCCESS, todo};
}

export function loadTodos() {
  return function(dispatch) {
    return TodoApi.getAllTodo().then(todos => {
      dispatch(loadTodosSuccess(todos));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveUpdateTodo(todo) {
  return function (dispatch, getState) {
    return TodoApi.saveTodo(todo).then(todo => {
      todo.id ? dispatch(updateTodoSuccess(todo)) :
        dispatch(createTodoSuccess(todo));
    }).catch(error => {
      throw(error);
    });
  };
}*/