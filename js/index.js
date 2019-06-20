const todoList = document.querySelector("#todoList");
const todoSubmit = document.querySelector("#todoSubmit");
const todoForm = document.querySelector("#todoForm");

// Creating HTML Elements, attributes and classes for new todo
const newTodo = text => {
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  const span = document.createElement("span");
  const todoText = document.createTextNode(text);
  const todoDelete = document.createElement("button");
  const todoDeleteText = document.createTextNode("x");

  checkBox.type = "checkbox";
  span.appendChild(todoText);
  todoDelete.appendChild(todoDeleteText);
  todoDelete.classList.add("btn");
  todoDelete.setAttribute("onClick", "deleteTodo()");

  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(todoDelete);

  return li;
};

// Getting the value of user input
const addTodo = () => {
  const todoInput = document.querySelector("#todoInput");
  const todoText = todoInput.value.trim();

  if (!todoText) { return; }
  todoList.appendChild(newTodo(todoText));
  todoInput.value = "";
};

// Delete/remove specific todo
const deleteTodo = todo => {
  todoList.removeChild(todoList.childNodes[0]);
}

// This will mark todo as done by styling the span
todoList.addEventListener("click", e => {
  const element = e.target;
  if (element.nextSibling && element.nextSibling.nodeName === "SPAN") {
    element.parentNode.classList.toggle("strike-out");
  }
});

// This will trigger once the Add Item button is clicked
todoSubmit.addEventListener("click", addTodo);

// Preventing the form to reload everytime the user submits a todo
todoForm.addEventListener("submit", e => { e.preventDefault(); });


