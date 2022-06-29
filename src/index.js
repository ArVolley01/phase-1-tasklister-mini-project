priorities = ['emergency','high','medium','low'];

document.addEventListener("DOMContentLoaded", () => {
  const subForm = document.getElementById("create-task-form");

  priorities.map((priority) => {
    const marker = document.createElement('div');
    marker.id = priority;
    document.getElementById('tasks').append(marker);
  });

  subForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation()
    const text = document.getElementById("new-task-description");
    const outerTask = document.createElement('li');
    const task = document.createElement('p');
    task.textContent = text.value;
    task.addEventListener('click', clickToEdit(task));
    task.addEventListener('mouseleave', () => {task.contentEditable = false});
    outerTask.append(task, getDropdown(outerTask),getDeleteButton(outerTask));
    document.getElementById(priorities[0]).append(outerTask);
    document.getElementById("new-task-description").value = "";
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

function clickToEdit(task) {
  return function() {
    console.log('here');
    task.contentEditable = true;
    //setTimeout(() => {task.contentEditable = false}, 5000);
  };
}