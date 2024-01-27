import { currentProject } from './project.js'
export { closeTaskModal, switchingTaskList, changeProjectName, displayDate }

// global variables

const projectTasksUL = document.querySelector('.project-tasks');
const addTaskBtn = document.querySelector('.add-task');
const modalTask = document.querySelector('.modal-task');
const closeModalTaskBtn = document.querySelector('.close-btn-task');
const confirmModalTaskBtn = document.querySelector('.confirm-btn-task');
const taskInput = document.querySelector('#task-input');
const projectDetails = document.querySelector('.project-details');

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
    clearProjectTitleCard();
    clearTaskList();

    changeProjectName();
    displayDate();
    currentProject.tasks.forEach(tasks => {
        const newTaskLi = document.createElement('li');
        newTaskLi.textContent = tasks
        projectTasksUL.appendChild(newTaskLi);
    });

}

function changeProjectName() {
    const projectName = document.createElement('h1');
    projectName.classList.add('project-name')
    projectName.textContent = currentProject.name;
    projectDetails.appendChild(projectName);
}

function displayDate() {
    console.log(currentProject.getDueDate())
    const projectDueDate = document.createElement('h3')
    projectDueDate.classList.add('project-dd')

    if (currentProject.getDueDate() === ""){
        projectDueDate.textContent = "Due date not set";
        projectDetails.appendChild(projectDueDate);
    } else {
        projectDueDate.textContent = "" + currentProject.getDueDate();
        projectDetails.appendChild(projectDueDate);
    }
}

function clearProjectTitleCard(){
    projectDetails.textContent = "";
    console.log('cleared')
}

