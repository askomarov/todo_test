const todoList = document.querySelector(".todo-list");

if (todoList) {
  todoList.addEventListener("click", (evt) => {
    let target = evt.target.closest(".todo-item");
    let checkbox = target.querySelector("[type='checkbox']");

    if (target.classList.contains("todo-item--checked")) {
      target.classList.remove("todo-item--checked");
      checkbox.removeAttribute("checked");
    } else {
      target.classList.add("todo-item--checked");
      checkbox.setAttribute("checked", true);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // console.log("hello");
});
