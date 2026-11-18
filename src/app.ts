import { getAllUsers, createUser } from "./modules/users/users.service.js";
import {
  getAllTasks,
  createTask,
  completeTask,
  deleteTask,
} from "./modules/tasks/tasks.service.js";

async function main(): Promise<void> {
  console.log("Users:", getAllUsers());

  const newUser = createUser("Omar", "omar@example.com");
  console.log("Created user:", newUser);

  console.log("\nInitial tasks:", await getAllTasks());

  const newTask = await createTask("Finish backend homework");
  console.log("\nCreated task:", newTask);

  const completedTask = await completeTask(1);
  console.log("\nCompleted task:", completedTask);

  await deleteTask(2);
  console.log("\nTask 2 deleted successfully.");

  console.log("\nFinal tasks:", await getAllTasks());

  // Demonstrate a failure and handle it without crashing the program.
  try {
    await completeTask(999);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("\nExpected error:", error.message);
    } else {
      console.error("\nAn unexpected error occurred:", error);
    }
  }
}

main().catch((error: unknown) => {
  console.error("The program failed:", error);
  process.exitCode = 1;
});
