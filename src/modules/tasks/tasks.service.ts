import type { Task } from "./task.interface.js";

const tasks: Task[] = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Practice JavaScript", completed: false },
];

let nextId = 3;

export async function getAllTasks(): Promise<Task[]> {
  return tasks;
}

export async function createTask(title: string): Promise<Task> {
  const task: Task = { id: nextId++, title, completed: false };
  tasks.push(task);
  return task;
}

export async function completeTask(id: number): Promise<Task> {
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    throw new Error(`Task with ID ${id} was not found.`);
  }

  task.completed = true;
  return task;
}

export async function deleteTask(id: number): Promise<void> {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    throw new Error(`Task with ID ${id} was not found.`);
  }

  tasks.splice(index, 1);
}
