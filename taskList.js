const addNewTaskButton = document.getElementById('add-new-task');
const taskContainer = document.getElementById('tasks-container');

addNewTaskButton.addEventListener('click', function() {
    // Create a new text box (input element)
    const newTask = document.createElement('input');
    newTask.type = 'text'; // Set the type to text
    newTask.placeholder = 'Enter your task here...'; // Set placeholder text

    // Append the new text box to the task container above the button
    taskContainer.insertBefore(newTask, addNewTaskButton);

});
