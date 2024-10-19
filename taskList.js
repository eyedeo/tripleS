const addNewTaskButton = document.getElementById('add-new-task');
const taskContainer = document.getElementById('tasks-container');


// Creating guy when website loads
window.onload = function() {
    //character image element
    const charimg = document.createElement('img');
    
    charimg.src = 'assets/tammy.png'; // image path

    //sizing and position
    charimg.style.position = 'fixed';
    charimg.style.left = '45%';
    charimg.style.top = '35%';
    charimg.style.height = '50%';

    //adds the image to the page 
    document.body.appendChild(charimg);
};

addNewTaskButton.addEventListener('click', function() {
    // Create a new text box (input element)
    const newTask = document.createElement('input');
    newTask.type = 'text'; // Set the type to text
    newTask.placeholder = 'Enter your task here...'; // Set placeholder text

    // Append the new text box to the task container above the button
    taskContainer.insertBefore(newTask, addNewTaskButton);

});