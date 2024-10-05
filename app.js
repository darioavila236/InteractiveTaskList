document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const taskInput = document.getElementById('task-input').value;
    
    if (taskInput.trim() !== '') {
        addTask(taskInput);
        document.getElementById('task-input').value = ''; // Limpia el campo de entrada
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.innerText = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Eliminar';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
}
// Cargar las tareas almacenadas al iniciar
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTask);
}

// Almacenar tareas
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(task) {
    const li = document.createElement('li');
    li.innerText = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Eliminar';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
        removeTask(task);
    });

    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
    saveTask(task);
}

function removeTask(taskToRemove) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

li.addEventListener('click', function() {
    li.classList.toggle('completed');
});
