const widgetsContainer = document.querySelector(".widgets_container");
const mainCheckListContainer = document.querySelector(
  ".main_checklist_container"
);
const checklistArrowIcon = document.querySelector(".arrow-icon");
const toDoList = document.querySelector(".to_do_list");
const titleContainer = document.querySelector(".title_container");

let toDoNewX = 0,
  toDoNewY = 0,
  toDoStartX = 0,
  toDoStartY = 0;

checklistArrowIcon.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  toDoStartX = e.clientX; //set the start positions
  toDoStartY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  toDoNewX = toDoStartX - e.clientX; //calc distance mouse has moved
  toDoNewY = toDoStartY - e.clientY;

  toDoStartX = e.clientX; //set new position to the current mouse pos for next calc iteration
  toDoStartY = e.clientY;

  let newTop = mainCheckListContainer.offsetTop - toDoNewY;
  let windowHeight = window.innerHeight;

  let containerHeight = mainCheckListContainer.clientHeight;

  if (
    newTop >= titleContainer.clientHeight &&
    newTop + containerHeight <= windowHeight
  ) {
    mainCheckListContainer.style.top = newTop + "px";
  } else {
    // If dragging would move the container below the viewport, set its top to maximum allowable value
    if (newTop < 0) {
      mainCheckListContainer.style.top = "0px";
    } else {
      mainCheckListContainer.style.top = maxHeight - containerHeight + "px";
    }
  }

  let newLeft = mainCheckListContainer.offsetLeft - toDoNewX;
  let windowWidth = window.innerWidth;
  let containerWidth = mainCheckListContainer.clientWidth;

  if (newLeft >= 0 && newLeft + containerWidth <= windowWidth) {
    mainCheckListContainer.style.left = newLeft + "px";
  } else {
    mainCheckListContainer.style.left =
      Math.min(Math.max(newLeft, 0), windowWidth - containerWidth) + "px";
  }
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
}

document.querySelector(".add_to_do_button").addEventListener("click", () => {
  const newToDo = document.createElement("li");
  const checkBox = document.createElement("input");
  const editBtn = document.createElement("button");
  const textSpan = document.createElement("span");

  textSpan.className = "item_text";
  textSpan.textContent = "new goal";
  textSpan.contentEditable = "false";

  checkBox.type = "checkbox";
  checkBox.className = "checkbox";

  editBtn.className = "edit_goal_btn";
  editBtn.textContent = "edit";

  newToDo.setAttribute("spellcheck", "false");
  newToDo.appendChild(editBtn);
  newToDo.appendChild(textSpan);
  newToDo.appendChild(checkBox);

  toDoList.appendChild(newToDo);

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      newToDo.classList.add("checked");
    } else {
      newToDo.classList.remove("checked");
    }
  });

  let removeBtn;

  editBtn.addEventListener("click", () => {
    textSpan.contentEditable = "true";
    textSpan.focus();

    if (!removeBtn) {
      removeBtn = document.createElement("button");
      removeBtn.className = "remove_goal_btn";
      removeBtn.textContent = "remove";
      newToDo.insertBefore(removeBtn, textSpan);

      removeBtn.addEventListener("click", () => {
        toDoList.removeChild(newToDo);
      });
    }
  });

  textSpan.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      textSpan.contentEditable = "false";
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    textSpan.contentEditable === "true" &&
    !textSpan.contains(e.target) &&
    e.target !== editBtn
  ) {
    textSpan.contentEditable = "false";
  }
});
