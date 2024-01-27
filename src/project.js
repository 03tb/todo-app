import { switchingTaskList, changeProjectName, displayDate } from "./tasks";

export { Project, closeModal, projectsArray, currentProject }

// global variables

const modal = document.querySelector(".modal-project");
const addProjectBtn = document.querySelector('.add-project');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.querySelector('.confirm-btn');
const modalInput = document.querySelector('#project-name-input')
const projectDD = document.querySelector('#project-dd')

let projectsArray = [];
let modalChosenProjectName;
let addProjectBool = false;
let currentProject;

// end global variables

class Project {
    constructor(name, tasks = [], dueDate) {
        this.name = name;
        this.tasks = tasks;
        this.dueDate = dueDate;
        projectsArray.push(this)
        console.log(projectsArray)
    }
    getName() {
        return this.name;
    }
    getDueDate(){
        return this.dueDate;
    }
}

(function onBoot() {
    const defaultProject = new Project('Default Project', ['First Task'], '2024-11-26')
    currentProject = defaultProject;
    changeProjectName();
    displayDate();
    const projectListContainer = document.querySelector('.project-list');
    const projectListItem = document.createElement('li');
    projectListItem.addEventListener('click', () => {
        console.log('project list item clicked')
        currentProject = defaultProject;
        console.log(defaultProject)
        switchingTaskList();

    })
    projectListItem.textContent = defaultProject.name;
    projectListContainer.appendChild(projectListItem);

    const projectTasksUL = document.querySelector('.project-tasks');

    defaultProject.tasks.forEach(task => {
        const newTaskLi = document.createElement('li');
        newTaskLi.textContent = task;
        projectTasksUL.appendChild(newTaskLi);
    });
})();


addProjectBtn.addEventListener('click', () => {
    displayModal();
})

function addProject() {
    if (addProjectBool === true && modalChosenProjectName !== "") {
      const projectListContainer = document.querySelector('.project-list');
      const projectListItem = document.createElement('li');
  
      const newProject = new Project(modalChosenProjectName, [], projectDD.value);
  
      projectListItem.addEventListener('click', () => {
        currentProject = newProject;
        switchingTaskList();
      });
  
      projectListItem.textContent = newProject.getName();
      projectListContainer.appendChild(projectListItem);
    } else {
      return;
    }
  }


// modal logic

closeBtn.addEventListener('click', () => {
    closeModal();
})

confirmBtn.addEventListener('click', () => {
    addProjectBool = true;
    modalChosenProjectName = modalInput.value;
    closeModal();
    addProject();
})

function displayModal() {
    modal.showModal();
    modal.setAttribute('style', 'display: flex; flex-direction: column; justify-content: space-evenly; width: 400px; height: 100px;');
}

function closeModal() {
    modal.close();
    modalInput.value = "";
    modal.setAttribute('style', 'display: none;');
}

