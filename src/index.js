document.addEventListener("DOMContentLoaded", () => {
  const subForm = document.getElementById("create-task-form");
  subForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('here');
  }, false);

  subForm.addEventListener('submit', () => {
    const text = document.getElementById("new-task-description");
    const task = document.createElement('li');
    task.textContent = text.value;
    document.getElementById("tasks").append(task);
  });


});
