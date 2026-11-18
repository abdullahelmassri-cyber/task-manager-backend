// In-memory data: it lives only while the program is running
const users = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Sara", email: "sara@example.com" },
];

let nextId = 3;

export function getAllUsers() {
  return users;
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function createUser({ name, email }) {
  const user = { id: nextId++, name, email };
  users.push(user);
  return user;
}
