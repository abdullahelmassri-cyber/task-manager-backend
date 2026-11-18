import type { User } from "./user.interface.js";

// This data exists only while the program is running.
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Sara", email: "sara@example.com" },
];

let nextId = 3;

export function getAllUsers(): User[] {
  return users;
}

export function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

export function createUser(name: string, email: string): User {
  const user: User = { id: nextId++, name, email };
  users.push(user);
  return user;
}
