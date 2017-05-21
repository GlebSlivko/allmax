import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const todos = [
  {
    id: "823787432783432",
    title: "Bewew",
    description: "ewfew ewfvfew ewvwevewv wevwevewvew ewffewvwefwe vwevwe",
    tillDate: "===",
    tillTime: "===",
    atDate: "====",
    atTime: "====",
    
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (todo) => {
  return replaceAll(todo.title, ' ', '-');
};

class TodoApi {
  static getAllTodo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }

  static saveTodo(todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (todo.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (todo.id) {
          const existingCourseIndex = todos.findIndex(a => a.id == todo.id);
          todos.splice(existingCourseIndex, 1, todo);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          todo.id = generateId(todo);
          todo.watchHref = `http://www.pluralsight.com/courses/${todo.id}`;
          todos.push(todo);
        }

        resolve(Object.assign({}, todo));
      }, delay);
    });
  }

  static deleteTodo(todoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTodoToDelete = todos.findIndex(todo => {
          todo.todoId == todoId;
        });
        todos.splice(indexOfTodoToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TodoApi;
