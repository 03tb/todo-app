import './style.css';
import { closeModal } from './project.js';
import { closeTaskModal } from './tasks.js';


// escape key resets modal display property
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeTaskModal();
        closeModal();
    }
});

