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
<<<<<<< HEAD

    // Animation variables
    let position = 650; // Initial position
    let direction = 1; // 1 for right, -1 for left
    const moveDistance = 700; // Distance to move before reversing direction
    let reverseCount = 0; // Count how many times the image has reversed direction

    // Animation function
    function animate() {
        charimg.src = 'assets/tammy.png';
        position += 5 * direction; // Move based on direction
        charimg.style.left = position + 'px'; // Update position

        // Reverse direction and flip the image if it reaches the defined positions
        if (position >= 900 || position <= 400) {
            direction *= -1; // Reverse direction
            charimg.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)'; // Flip the image
            reverseCount++; // Increment the count

            // Check if the count has reached 5
            if (reverseCount >= 5) {
                stopAnimation(); // Stop the animation
                return; // Exit the function
            }
        }

        requestAnimationFrame(animate); // Continue the animation
    }

    // Function to stop the animation and return to initial position
    function stopAnimation() {
        position = 650; // Reset position to initial
        charimg.style.left = position + 'px'; // Update left position
        charimg.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)'; // Ensure the image is facing the current direction
        charimg.src = 'assets/taskfailedtammy.png'; // Change the image

        // Wait for 5 seconds, then restart the animation
        setTimeout(() => {
            reverseCount = 0; // Reset the reverse count
            animate(); // Restart the animation
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    animate(); // Start the animation
};
=======
}
>>>>>>> refs/remotes/origin/main

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