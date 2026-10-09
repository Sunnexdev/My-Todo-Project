let inputElement = document.getElementById('input-El');
let inputBtn = document.getElementById('input-btn');
let countElement = document.getElementById('count-el');

const todoList = ['read my books', 'wash the dishes', 'watch youtube'];

renderTodo();

function renderTodo() {
  let count = 0;
  let todoHTML = '';

  for (i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    count += 1;
    const html = `
            <p class = "java-par">${todo}</p>
            <button class='java-btn-delete' onclick = 'todoList.splice(${i},1);renderTodo()'>delete</button>`;
    todoHTML += html;
    if (todoList.length > 0) {
      document.getElementById('taskavail-el').textContent = '';
    } else {
      document.getElementById('taskavail-el').textContent =
        'No Task Yet. Add Your First Task!';
    }
  }
  if (todoList.length > 0) {
    document.getElementById('taskavail-el').textContent = '';
  } else {
    document.getElementById('taskavail-el').textContent =
      'No Task Yet. Add Your First Task!';
  }

  document.getElementById('todoList-el').innerHTML = todoHTML;
  console.log(todoHTML);
  countElement.innerHTML = count + ' tasks remaining';
}

function addTodo() {
  todoList.push(inputElement.value);

  inputElement.value = '';

  renderTodo();
}
