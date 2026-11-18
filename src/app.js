import { getAllUsers, createUser } from "./modules/users/users.service.js";
import {
  getAllTasks,
  createTask,
  completeTask,
  deleteTask,
} from "./modules/tasks/tasks.service.js";

console.log("Users:", getAllUsers());

const newUser = createUser({ name: "Omar", email: "omar@example.com" });
console.log("Created user:", newUser);

console.log("\nInitial tasks:", getAllTasks());

const newTask = createTask("Finish backend homework");
console.log("\nCreated task:", newTask);

const completedTask = completeTask(1);
console.log("\nCompleted task:", completedTask);

const deleted = deleteTask(2);
console.log("\nTask 2 deleted:", deleted);

console.log("\nFinal tasks:", getAllTasks());
