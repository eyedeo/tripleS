const screenimg = document.querySelector(".screen-image") // img in the screen

const title = document.querySelector(".title-box") // title box

const tasks = document.querySelectorAll(".task-box") // all the task elements

let buttons = document.querySelectorAll(".button") // array for buttons which is dynamic and will change
const buttoncontainer = document.querySelector(".buttons-container") // container for mini-game buttons

const screens = ["assets/tammy.png", ];

const titles = ["task 1 ", "task 2 ", "task 3"] // task titles
const buttonlayouts = [["jump","bark"],["wash","slam"],["roar","lmao"]]; // array of arrays; each array represents text for a different minigame

let currenttask = 0;

function changebuttons(buttoncount){
    buttons = []
    for(let i = 0; i < buttoncount; i++){
        newbutton = document.createElement("button")
        newbutton.className = "button" // changes class so css styles will apply to it
        console.log(currenttask)
        console.log(buttonlayouts[currenttask][i])
        newbutton.textContent = buttonlayouts[currenttask][i] // add the text to the button which is assoicated with the current task
        // newbutton.addEventListener("click",function(event){
        
        // })

        buttons.push(newbutton) // updates array holding buttons
        buttoncontainer.appendChild(newbutton) // adds the button to the container
        //console.log(buttoncontainer)
        //console.log(newbutton)
    }

}

// handles when the tasks are clicked
tasks.forEach(function(x){
    x.addEventListener("click",function(event){
        let workelm = event.target
        if(event.target.className != "task-box"){
            workelm = event.target.parentElement
        }
        let taskidx = Array.from(tasks).indexOf(workelm); // get the task user clicked
        screenimg.src = screens[taskidx] // change the content in screen
        buttoncontainer.innerHTML = "" // clear the current buttons
        console.log(taskidx)
        currenttask = taskidx;
        changebuttons(buttonlayouts[taskidx].length) // function to change buttons

        title.style.textContent = titles[taskidx]

    })
})
