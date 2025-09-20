# Taskly

Taskly is a modern MERN-based task manager with authentication, task creation, editing, deletion, and status tracking. It's built with Tailwind CSS for a clean, responsive UI.

![Taskly Dashboard Screenshot](./frontend/public/taskly-dashboard.png)

---

## Live URLs

- **Frontend:** https://taskly-site.vercel.app
- **Backend:** https://taskly-backend-api.onrender.com

---

## Features

- **Authentication:** Secure user signup and login using JWT.
- **Task Management:** Create, edit, delete, and track the status of tasks.
- **Task Filtering:** Filter tasks by status (All, Pending, Completed).
- **Responsive UI:** A clean and modern user interface built with React and Tailwind CSS.

---

## Tech Stack

### Backend

- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) & bcrypt.js

### Frontend

- React & Vite
- React Router
- Zustand (state management)
- Tailwind CSS
- Axios
- Lucide React

---

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (a local instance or a connection URI from Atlas)

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/Shubham-567/Taskly.git
    cd Taskly
    ```

2.  **Set up the Backend:**

    - Navigate to the backend folder: `cd backend`
    - Install dependencies: `npm install`
    - Create a `.env` file and add the following variables:
      ```env
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_super_secret_key
      PORT=5000
      ```

3.  **Set up the Frontend:**
    - Navigate to the frontend folder: `cd ../frontend`
    - Install dependencies: `npm install`
    - Create a `.env` file and add your backend URL:
      ```env
      REACT_APP_BACKEND_URL=http://localhost:5000
      ```

### Running the Application

You need to run the backend and frontend servers in two separate terminals.

1.  **Start the Backend Server:**

    - In the `/backend` directory, run:
      ```sh
      npm run server
      ```

2.  **Start the Frontend Development Server:**
    - In the `/frontend` directory, run:
      ```sh
      npm run dev
      ```

Your application should now be running! Open your browser and go to `http://localhost:5173` (or the address provided by Vite).

---

## License

This project is licensed under the MIT License.
