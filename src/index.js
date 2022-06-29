document.addEventListener("DOMContentLoaded", () => {
  const subForm = document.getElementById("create-task-form");
  subForm.addEventListener('submit', (event) => {
    event.preventDefault();
  }, false);

  subForm.addEventListener('submit', () => {
    const text = document.getElementById("new-task-description");
    const task = document.createElement('li');
    task.textContent = text.value;
    task.append(getDeleteButton(task));
    document.getElementById("tasks").append(task);
  });

});

function getDeleteButton(task) {
  let button = document.createElement('button');
  button.addEventListener('click', () => {
    task.remove();
  })
  button.textContent = "DELETE";
  return button;
}
