const addNewTaskButton = document.getElementById('add-new-task');
const taskContainer = document.getElementById('tasks-container');


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


addNewTaskButton.addEventListener('click', function() {
    // Create a new text box (input element)
    const newTask = document.createElement('input');
    newTask.type = 'text'; // Set the type to text
    newTask.placeholder = 'Enter your task here...'; // Set placeholder text

    // Append the new text box to the task container above the button
    taskContainer.insertBefore(newTask, addNewTaskButton);

});

