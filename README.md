# Async Task Management Backend with TypeScript

A Node.js project that demonstrates asynchronous task operations using TypeScript, ES modules, and in-memory data.

## Requirements

- Node.js 24 or later
- npm

## Setup

Install the development dependencies:

```bash
npm install
```

## Run the project

Build and run the program:

```bash
npm start
```

Compile the TypeScript files without running the program:

```bash
npm run build
```

For development:

```bash
npm run dev
```

The development command builds once and watches the compiled JavaScript. After editing a TypeScript file, stop the command with Ctrl + C and run it again to rebuild.

## Project structure

```text
src/
├── app.ts
└── modules/
    ├── tasks/
    │   ├── task.interface.ts
    │   └── tasks.service.ts
    └── users/
        ├── user.interface.ts
        └── users.service.ts
```

- `app.ts` runs examples of successful operations and handles an expected error.
- The Users module defines the `User` interface and manages sample users.
- The Tasks module defines the `Task` interface and provides asynchronous functions to list, create, complete, and delete tasks.
- TypeScript strict mode is enabled in `tsconfig.json`.

## Data storage

Users and tasks are stored in memory. Changes are lost when the program stops, and the sample data is restored when it runs again.

The program prints results to the terminal. It does not start a web server or provide API endpoints.

## AI use

An AI coding assistant helped convert the project to TypeScript, implement asynchronous task operations, and troubleshoot the TypeScript configuration. The changes were inspected, and `npm start` was run to verify the successful operations and expected error.
