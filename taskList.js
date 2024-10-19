// Function to create and append the character image
function createCharacterImage() {
    const charimg = document.createElement('img');
    
    charimg.src = 'assets/tammy.png'; // Image path

    // Set styling properties
    charimg.style.position = 'fixed';
    charimg.style.left = '45%';
    charimg.style.top = '35%';
    charimg.style.height = '50%';

    // Append the image to the body
    document.body.appendChild(charimg);
}

// Function to create a new task input box
function createNewTaskInput() {
    const newTask = document.createElement('input');
    
    newTask.type = 'text'; // Set the type to text
    newTask.placeholder = 'Enter your task here...'; // Set placeholder text
    
    return newTask;
}

// Function to add the new task input box to the DOM
function addNewTask() {
    const taskContainer = document.getElementById('tasks-container');
    const addNewTaskButton = document.getElementById('add-new-task');
    
    const newTask = createNewTaskInput();
    
    // Insert the new task input before the "Add New Task" button
    taskContainer.insertBefore(newTask, addNewTaskButton);
}

// Function to initialize event listeners
function initializeEventListeners() {
    const addNewTaskButton = document.getElementById('add-new-task');
    
    // Add event listener for adding new tasks
    addNewTaskButton.addEventListener('click', addNewTask);
}

// Function to initialize the page
function initializePage() {
    createCharacterImage(); // Create the character image
    initializeEventListeners(); // Initialize event listeners
}

// Run the initializePage function when the page loads
window.onload = initializePage;