document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector(".todo-list");

  if (todoList) {
    todoList.addEventListener("click", (evt) => {
      evt.stopPropagation();
      let target = evt.target.closest(".todo-item");
      let checkbox = target.querySelector("[type='checkbox']");
      if (checkbox.checked) {
        return target.classList.add("todo-item--checked");
      } else {
        return target.classList.remove("todo-item--checked");
      }
    });
  }
  // console.log("hello");
});
