priorities = ['emergency','high','medium','low'];

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
    task.append(getDropdown(task));
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

function getDropdown(task) {
  const menu = document.createElement('form');
  const selection = document.createElement('select');
  priorities.map((priority) => {
    const opt = document.createElement('option');
    opt.setAttribute('value', priority);
    opt.innerText = priority;
    selection.append(opt);
  });
  menu.append(selection);
  return menu;
}
