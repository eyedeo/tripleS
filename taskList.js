let happiness = 0;
let level = 1;
let money = 0;
let accessory; // Variable to hold the accessory image
let currentAccessory; // Store the current accessory path
const screen = document.querySelector('.screen');


// Array of accessory paths
const accessories = [
    'assets/illumiaccessory.png',
    'assets/catssesory.png',
    'assets/jojossesory.png',
    'assets/2sumaccessory.png'
];

// Function to create and append the character image
function createCharacterImage() {
    const charimg = document.createElement('img');
     if(level==0){ 
        charimg.src = 'assets/taskfailedtammy.png'; // Change the image
    }
    if(level==1){
        charimg.src = 'assets/tammy.png'; //happiness lvl 0 
    }
    if(level>=3){
        charimg.src = 'assets/tammyhappy.png'; //happiness lvl 3
    }
    // Set styling properties
    charimg.style.position = 'fixed';
    charimg.style.left = '45%';
    charimg.style.top = '35%';
    charimg.style.height = '50%';

    // Append the image to the body
    document.body.appendChild(charimg);

    // Add click event listener for purchasing an accessory
    charimg.addEventListener('click', () => {
        if (confirm("Buy random accessory for 40 TaskBucks?")) {
            if (money >= 40) {
                money -= 40;
                updateMoneyDisplay();
                purchaseAccessory(charimg);
            } else {
                alert("You're too broke to afford this.");
            }
        }
    });

    // Animation variables
    let position = 650; // Initial position
    let direction = 1; // 1 for right, -1 for left
    let reverseCount = 0; // Count how many times the image has reversed direction

    // Animation function
    function animate() {
    if(level==1){ 
        charimg.src = 'assets/taskfailedtammy.png'; // Change the image
    }
    if(level==2){
        charimg.src = 'assets/tammy.png'; //happiness lvl 0 
    }
    if(level==3){
        charimg.src = 'assets/tammyneutral.png'; //happiness lvl 2
    }
    if(level>=4){
        charimg.src = 'assets/tammyhappy.png';
    }
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

        // Wait for 5 seconds, then restart the animation
        setTimeout(() => {
            reverseCount = 0; // Reset the reverse count
            animate(); // Restart the animation
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    animate(); // Start the animation
}

// Function to create and manage accessories
function purchaseAccessory(charimg) {
    if (accessory) {
        accessory.remove(); // Remove current accessory if it exists
        // Add the current accessory path back to the array
        accessories.push(currentAccessory);
    }

    // Select a random accessory from the array
    const randomIndex = Math.floor(Math.random() * accessories.length);
    currentAccessory = accessories.splice(randomIndex, 1)[0]; // Remove it from the array

    accessory = document.createElement('img');
    accessory.src = currentAccessory; // Use the random accessory path
    accessory.style.position = 'fixed';
    accessory.style.left = '45%'; // Match the charimg's position
    accessory.style.top = '35%'; // Match the charimg's position
    accessory.style.height = '10%'; // Adjust size as needed

    document.body.appendChild(accessory);
    updateAccessoryPosition(charimg);
}

// Function to update the accessory position
function updateAccessoryPosition(charimg) {
    requestAnimationFrame(function followCharacter() {
        accessory.style.left = charimg.style.left;
        accessory.style.top = charimg.style.top;
        requestAnimationFrame(followCharacter);
    });
}

// Function to update money display
function updateMoneyDisplay() {
    const moneyCount = document.querySelector('.money-count');
    moneyCount.textContent = `Money: ${money}`; // Using template literals
}

// The rest of the code remains unchanged

// Function to initialize the page
function initializePage() {
    createCharacterImage(); // Create the character image
    initializeEventListeners(); // Initialize event listeners
}

// Run the initializePage function when the page loads
window.onload = initializePage;



// Function to create a new task input box
function createNewTaskInput() {
    let existingContainer = document.querySelector('.task-input-container');
    
    if (existingContainer) {
        // If it exists, return it without creating a new one
        return existingContainer;
    }

    // Create a new task container
    const taskInputContainer = document.createElement('div');
    const taskName = document.createElement('input'); 
    const taskTime = document.createElement('input'); 
    
    taskInputContainer.classList.add("task-input-container");
    taskName.classList.add("task-name");
    taskTime.classList.add("task-time");

    taskName.type = 'text';
    taskName.placeholder = "Task name";
    taskTime.type = 'text';
    taskTime.placeholder = "Time limit (mins)";

    // Add event listener for Enter key on taskName
    taskName.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            taskEntered(taskName.value, taskTime.value);
        }
    });

    // Add event listener for Enter key on taskTime
    taskTime.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            taskEntered(taskName.value, taskTime.value);
        }
    });

    taskInputContainer.appendChild(taskName);
    taskInputContainer.appendChild(taskTime); 

    return taskInputContainer;
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

function taskEntered(taskName, taskTime) {
    const taskInputContainer = document.querySelector('.task-input-container');
    const taskContainer = document.querySelector('.tasks-container');
    const button = document.querySelector('.add-new-task');
    const newTaskContainer = document.createElement('div');

    newTaskContainer.classList.add("new-task-container");

    // Sets the name of the new task
    const newTaskName = document.createElement("div");
    newTaskName.textContent = taskName; // Use textContent for <p> elements
    newTaskName.classList.add("new-task-name");
    newTaskContainer.appendChild(newTaskName);

    // Create countdown timer elements
    const timerElement = document.createElement("div");
    timerElement.classList.add("new-task-timer");
    newTaskContainer.appendChild(timerElement);

    // Create the check button
    const checkButton = document.createElement("button");
    checkButton.classList.add("new-check-button");
    checkButton.textContent = "✔"; // Add text or icon to the button
    newTaskContainer.appendChild(checkButton);

    // Convert taskTime to seconds if necessary (assuming taskTime is in minutes)
    let countdownTime = taskTime * 60; // Convert minutes to seconds

    // Function to update the timer display
    const updateTimer = () => {
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (countdownTime > 0) {
            countdownTime--;
        } else {
            clearInterval(timerInterval);
            newTaskContainer.remove(); 
        }
    };

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);
    
    // Add click event listener to the check button
    checkButton.addEventListener('click', () => {
        clearInterval(timerInterval); // Stop the timer
        incrementProgressBar();
        incrementMoney();
        upgradeLevel();
        newTaskContainer.remove(); // Remove the task container
    });

    taskInputContainer.remove(); // Removes the input container
    taskContainer.insertBefore(newTaskContainer, button);
}

function incrementProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    
    happiness += 1;
    progressBar.value = progressBar.value + 1;

    if(progressBar.value == progressBar.max)
    {
        progressBar.value = 0;
        happiness = 0;
        level += 1;
        console.log(level)
        console.log(happiness)
    }
}

function incrementMoney() {
    const moneyCount = document.querySelector('.money-count');
    
    money += 20;

    moneyCount.textContent = `Taskbucks: ${money}`; // Using template literals
}

function upgradeLevel() {
    const happinessLvl = document.querySelector(".progress-bar-label");

    happinessLvl.textContent = `Happiness LVL: ${level}`;
}