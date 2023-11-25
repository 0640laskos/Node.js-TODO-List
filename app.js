const fs = require('fs');

const tasksFile = 'tasks.json';

function loadTasks() {
    try {
        const data = fs.readFileSync(tasksFile, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveTasks(tasks) {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

function addTask(description) {
    const tasks = loadTasks();
    const newTask = { id: tasks.length + 1, description, status: 'Incomplete' };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task "${description}" is added to the list.`);
}

function listTasks(status) {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log('No tasks found.');
        return;
    }

    console.log('ID Description Status');
    tasks.forEach((task) => {
        if (!status || task.status.toLowerCase() === status.toLowerCase()) {
            console.log(`${task.id} ${task.description} ${task.status}`);
        }
    });
}

function editTask(id, newDescription) {
    const tasks = loadTasks();
    const task = tasks.find((t) => t.id === id);
    if (task) {
        console.log(`Task ${task.id} edited: "${task.description}" => "${newDescription}"`);
        task.description = newDescription;
        saveTasks(tasks);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

function completeTask(id) {
    const tasks = loadTasks();
    const task = tasks.find((t) => t.id === id);
    if (task) {
        console.log(`Task "${task.description}" is marked as completed.`);
        task.status = 'Complete';
        saveTasks(tasks);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

function searchTasks(keyword) {
    const tasks = loadTasks();
    const matchingTasks = tasks.filter((task) =>
        task.description.toLowerCase().includes(keyword.toLowerCase())
    );

    if (matchingTasks.length === 0) {
        console.log('No matching tasks found.');
        return;
    }

    console.log('ID Description Status');
    matchingTasks.forEach((task) => {
        console.log(`${task.id} ${task.description} ${task.status}`);
    });
}

const [command, ...args] = process.argv.slice(2);
const joinedArgs = args.join(' ');

if (command === 'add') {
    addTask(joinedArgs);
} else if (command === 'list') {
    const status = joinedArgs.toLowerCase();
    listTasks(status);
} else if (command === 'edit') {
    const [id, newDescription] = args;
    editTask(parseInt(id), newDescription);
} else if (command === 'complete') {
    const id = parseInt(joinedArgs);
    completeTask(id);
} else if (command === 'search') {
    searchTasks(joinedArgs);
} else {
    console.log('Invalid command.');
}
