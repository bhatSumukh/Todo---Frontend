# My Todo App — Full Stack

A full stack Todo application built with React, Node.js, Express, and MongoDB.

🔗 **Live Demo:** [todo-frontend-ten-gamma.vercel.app](https://todo-frontend-ten-gamma.vercel.app)

---

## Tech Stack

**Frontend**
- React (Vite)
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose

**Deployment**
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## Features

- Add new todos
- View all todos
- Delete todos
- Data persists in a real cloud database

---

## Project Structure

```
Frontend → github.com/bhatSumukh/Todo---Frontend
Backend  → github.com/bhatSumukh/Todo---Backend-
```

---

## How It Works

```
React (Vercel) → Express REST API (Render) → MongoDB Atlas
```

The React frontend communicates with the Express backend via HTTP requests. The backend handles all CRUD operations and stores data in MongoDB Atlas.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /todos | Get all todos |
| POST | /todos | Add a new todo |
| PUT | /todos/:id | Update a todo |
| DELETE | /todos/:id | Delete a todo |

---

## Run Locally

**Backend**
```bash
git clone https://github.com/bhatSumukh/Todo---Backend-
cd Todo---Backend-
npm install
```

Create a `.env` file:
```
MONGO_URL=your_mongodb_connection_string
```

```bash
node todo.js
```

**Frontend**
```bash
git clone https://github.com/bhatSumukh/Todo---Frontend
cd Todo---Frontend
npm install
npm run dev
```

---

## Author

**Sumukh Bhat** — [github.com/bhatSumukh](https://github.com/bhatSumukh)