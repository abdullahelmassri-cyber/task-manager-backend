# Task Management Backend Starter

A Node.js project that demonstrates a simple task management backend structure using ES modules.

## Requirements

- Node.js 18 or later

## Run the project

Open a terminal in the project folder and run:

```bash
npm start
```

For development, run:

```bash
npm run dev
```

The development command watches for file changes and restarts the program when you save.

## Project structure

```text
task-manager-backend/
├── src/
│   ├── modules/
│   │   ├── tasks/
│   │   │   └── tasks.service.js
│   │   └── users/
│   │       └── users.service.js
│   └── app.js
├── .gitignore
├── package.json
└── README.md
```

- `app.js` is the entry point. It runs examples of the user and task operations.
- The users module can list users, find a user by ID, and create a user.
- The tasks module can list, create, complete, and delete tasks.

## Data storage

Users and tasks are stored in memory. Any changes are lost when the program stops, and the sample data is restored the next time it runs.

This starter prints results to the terminal; it does not start a web server or provide API endpoints.
