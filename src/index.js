priorities = ['emergency','high','medium','low'];

document.addEventListener("DOMContentLoaded", () => {
  const subForm = document.getElementById("create-task-form");
  subForm.addEventListener('submit', (event) => {
    event.preventDefault();
  }, false);

  priorities.map((priority) => {
    const marker = document.createElement('div');
    marker.id = priority;
    document.getElementById('tasks').append(marker);
  });

  subForm.addEventListener('submit', () => {
    const text = document.getElementById("new-task-description");
    const task = document.createElement('li');
    task.textContent = text.value;
    task.append(getDropdown(task));
    task.append(getDeleteButton(task));
    document.getElementById(priorities[0]).append(task);
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
  selection.addEventListener('input', (e) => {
    document.getElementById(e.target.value).append(task);
  });
  priorities.map((priority) => {
    const opt = document.createElement('option');
    opt.setAttribute('value', priority);
    opt.innerText = priority;
    selection.append(opt);
  });
  menu.append(selection);
  return menu;
}
