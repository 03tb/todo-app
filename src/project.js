
// global variables

const modal = document.querySelector(".modal-project");
const addProjectBtn = document.querySelector('.add-project');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.querySelector('.confirm-btn');
const modalInput = document.querySelector('#project-name-input')

let projectsArray = [];
let modalChosenProjectName;
let addProjectBool = false;

// end global variables

class Project {
    constructor(name) {
        this.name = name;
        projectsArray.push(this)
        console.log(projectsArray)
    }
}

addProjectBtn.addEventListener('click', () => {
    modal.showModal();
    modal.setAttribute('style', 'display: flex; flex-direction: column; justify-content: space-evenly; width: 400px; height: 100px;')
})

function addProject () {
    if (addProjectBool === true && modalChosenProjectName != "") {
        const projectListContainer = document.querySelector('.project-list');
        const projectListItem = document.createElement('li');
        
        projectListItem.addEventListener('click', () => {
            console.log('project list item clicked')
        })
        
        new Project(modalChosenProjectName);
        projectListItem.textContent = modalChosenProjectName;
        projectListContainer.appendChild(projectListItem);


    }   else {
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

function closeModal() {
    modal.close();
    modalInput.value = "";
    modal.setAttribute('style', 'display: none;')
}

