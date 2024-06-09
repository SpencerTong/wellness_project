
const mainCheckListContainer = document.querySelector(".main_checklist_container");
const checklistArrowIcon = document.querySelector(".arrow-icon");
const toDoList = document.querySelector(".to_do_list");
const titleContainer = document.querySelector(".title_container");

let toDoNewX = 0, toDoNewY = 0, toDoStartX = 0, toDoStartY = 0;

checklistArrowIcon.addEventListener('mousedown', mouseDown);
    
function mouseDown(e){
    toDoStartX = e.clientX; //set the start positions
    toDoStartY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}   

function mouseMove(e) {
    toDoNewX = toDoStartX - e.clientX; //calc distance mouse has moved
    toDoNewY = toDoStartY - e.clientY;

    toDoStartX = e.clientX; //set new position to the current mouse pos for next calc iteration
    toDoStartY = e.clientY;




    let newTop = mainCheckListContainer.offsetTop - toDoNewY;
    let windowHeight = window.innerHeight;
    let containerHeight = mainCheckListContainer.clientHeight;

    // Check if the new top position is within the view height
    if (newTop >= 0 && newTop + containerHeight <= windowHeight) {
        mainCheckListContainer.style.top = newTop + 'px';
    } else {
        // If dragging would move the container below the viewport, set its top to maximum allowable value
        if (newTop < 0) {
            mainCheckListContainer.style.top = '0px';
        } else {
            mainCheckListContainer.style.top = (windowHeight - containerHeight) + 'px';
        }
    }


   
    let newLeft = mainCheckListContainer.offsetLeft - toDoNewX;
    let windowWidth = window.innerWidth;
    let containerWidth = mainCheckListContainer.clientWidth;

    if (newLeft>=0 && newLeft + containerWidth <= windowWidth){
        mainCheckListContainer.style.left = newLeft + 'px';
    } else {
        mainCheckListContainer.style.left = Math.min(Math.max(newLeft,0), windowWidth - containerWidth) + 'px';
    }

}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove);
}

document.querySelector(".add_to_do_button").addEventListener('click', () => {
    const newToDo = document.createElement('li');
    newToDo.contentEditable = 'true';
    newToDo.textContent = 'new goal';
    newToDo.setAttribute('spellcheck', 'false'); 
    toDoList.appendChild(newToDo);
});