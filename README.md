# Library Management System

### [Live Link](https://library-management-liard-ten.vercel.app)

## Project Description

A Library Management System (LMS) that uses Prisma as the ORM (Object-Relational Mapping) and Node.js as the backend offers a reliable way to manage a library's digital activities. A thorough project description including the project's features, structure, and possible tech stack can be seen below.A Library Management System (LMS) that uses Prisma as the ORM (Object-Relational Mapping) and Node.js as the backend offers a reliable way to manage a library's digital activities. A thorough project description including the project's features, structure, and possible tech stack can be seen below.

## Technology Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- TypeScript
- zod

## Features

- Managing books (add, get, update, delete)
- Managing members (add, get, update, delete)
- Borrowing and returning books
- overdue books

## Installation Guideline

### Prerequisites

- Node (^20.14.10)

### Installation Steps

First you need to install all dependencies. For installing you need to run **`yarn`** in your terminal.

```
yarn
```

### Configuration

1. Create a **`.env`** file in the root directory of the project.
2. Add `PORT` and `DATABASE_URL` in **`.env`** file Example:

```
PORT=3000

DATABASE_URL=add a PostgreSQL database url
```
Then you can run server useing **`yarn dev`** on your terminal.

```
yarn dev
```

---

Now to can run the server locally.