import { currentProject } from './project.js'
export { closeTaskModal, switchingTaskList, changeProjectName }

// global variables

const projectTasksUL = document.querySelector('.project-tasks');
const addTaskBtn = document.querySelector('.add-task');
const modalTask = document.querySelector('.modal-task');
const closeModalTaskBtn = document.querySelector('.close-btn-task');
const confirmModalTaskBtn = document.querySelector('.confirm-btn-task');
const taskInput = document.querySelector('#task-input');


// end global variables

function addToCurrentProject() {
    currentProject.tasks.push(taskInput.value);
    console.log(currentProject)
}

function addTaskToList(){
    addToCurrentProject();
    const newTaskLi = document.createElement('li');
    newTaskLi.textContent = taskInput.value;
    projectTasksUL.appendChild(newTaskLi);
}

// Modals

addTaskBtn.addEventListener('click', () => {
    openTaskModal();
})

closeModalTaskBtn.addEventListener('click', () => {
    closeTaskModal();
})

confirmModalTaskBtn.addEventListener('click', () => {
    if (taskInput.value != "") {
        addTaskToList();
        closeTaskModal();
    } else {
        closeTaskModal();
    }
})

function openTaskModal() {
    modalTask.showModal();
    modalTask.setAttribute('style', 'display: flex; flex-direction: column; justify-content: space-evenly; width: 400px; height: 100px;')
}

function closeTaskModal() {
    modalTask.close();
    taskInput.value = "";
    modalTask.setAttribute('style', 'display: none;');
}

function clearTaskList() {
    projectTasksUL.textContent = "";
}

function switchingTaskList() {
    clearTaskList();
    currentProject.tasks.forEach(tasks => {
        const newTaskLi = document.createElement('li');
        newTaskLi.textContent = tasks
        projectTasksUL.appendChild(newTaskLi);
    });
    changeProjectName();
}

function changeProjectName() {
    const projectName = document.querySelector('.project-name')
    projectName.textContent = currentProject.name;
}
