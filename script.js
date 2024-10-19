const screenimg = document.querySelector(".screen-image") // img in the screen

const title = document.querySelector(".Title-Box") // title box

const tasks = document.querySelectorAll(".task-box") // all the task elementss

let buttons = document.querySelectorAll(".button") // array for buttons which is dynamic and will change
const buttoncontainer = document.querySelector(".buttons-container") // container for mini-game buttons

const screens = ["https://github.com/eyedeo/tripleS/blob/main/assets/tammy.png?raw=true","https://github.com/eyedeo/tripleS/blob/main/assets/tammyhappy.png?raw=true","https://github.com/eyedeo/tripleS/blob/main/assets/tammyneutral.png?raw=true","https://github.com/eyedeo/tripleS/blob/main/assets/tammytaskfail.png?raw=true"];


const titles = ["task 1 ", "task 2 ", "task 3"]
const buttonlayouts = [["jump","bark"],["jump","bark"],["jump","bark"]]; // array of arrays; each array represents text for a different minigame

let currenttask = 0;

function changebuttons(buttoncount){
    buttons = []
    for(let i = 0; i < buttoncount; ++i){
        newbutton = document.createElement("button")
        newbutton.class = "button" // changes class so css styles will apply to it
        newbutton.style.textContent = buttonlayouts[currenttask][i] // add the text to the button which is assoicated with the current task
        newbutton.addEventListener("click",function(event){
        
        })
        buttons.push(newbutton) // updates array holding buttons
        buttoncontainer.appendChild(newbutton) // adds the button to the container
    }

}

// handles when the tasks are clicked
tasks.forEach(function(x){
    x.addEventListener("click",function(event){
        let taskidx = Array.from(tasks).indexOf(event.target); // get the task user clicked
        screenimg.src = screens[taskidx] // change the content in screen
        buttoncontainer.innerHTML = "" // clear the current buttons
        changebuttons(taskidx) // function to change buttons

        title.style.textContent = titles[taskidx]
    })
})
