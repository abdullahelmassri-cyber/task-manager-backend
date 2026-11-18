// Tasks are stored in memory while the program is running.
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Practice JavaScript", completed: false },
];

let nextId = 3;

export function getAllTasks() {
  return tasks;
}

export function createTask(title) {
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  return task;
}

export function completeTask(id) {
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return null;
  }

  task.completed = true;
  return task;
}

export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}
