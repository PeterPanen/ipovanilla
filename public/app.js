const todolist = document.getElementById("todolist");
const todoInput = document.getElementById("input_todo");

todoInput.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    // "ENTER"
    AddTodoItem({
      text: e.target.value,
      complete: false
    });
    e.target.value = "";
  }
});

function AddTodoItem(item) {
  const todoElement = document.createElement("li"); // <li>innerHTML</li>
  const closeElement = document.createElement("button"); // ‎<span>X</span>
  closeElement.innerHTML = "X";
  closeElement.addEventListener("click", function(e) {
    closeElement.removeEventListener("click");
    todoElement.removeEventListener("click");
    todoElement.remove();
  });
  todoElement.innerHTML = `${item.text} ${item.complete ? "✓" : ""}`;
  todoElement.appendChild(closeElement);
  todolist.appendChild(todoElement);
  todoElement.addEventListener("click", function(e) {
    todoElement.innerHTML = `${item.text} ${item.complete ? "" : "✓"}`;
  });
}
