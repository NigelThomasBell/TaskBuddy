# Task Buddy - A MERN stack web application project
## Introduction
* This project:
    * is based on:
        * The [MERN Stack Tutorial series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE) by The Net Ninja 
    * creates tasks instead of workouts.
    * uses Vite instead of create-react-app because the latter is larger in terms of project size, not as efficient, and is no longer recommended for creating React apps.

## Instructions
1. Inside the `backend` folder, create a file called `.env`.
2. Follow the instructions from [MERN Stack Tutorial #4 - MongoDB Atlas & Mongoose](https://www.youtube.com/watch?v=s0anSjEeua8) on how to make a database in MongoDB Atlas.
3. Inside the `.env` file, add the following:
    ```
    PORT=4000
    MONGO_URI=connection_string
    ```
    where connection_string is the connection string obtained from MongoDB Atlas with the password changed to the user password.
4. Open two terminals: one for the front end and one for the backend. Both need to be running for the full stack to function.
    1. For the frontend terminal, run the following commands:
        ```
        cd frontend
        npm install
        npm run dev
        ```
    2. For the backend terminal, run the following commands:
        ```
        cd backend
        npm install
        npm run dev
        ```

## EXTRA: Commands used to create the web application
### Frontend
1. Create a Vite app
    ```
    npm create vite@latest frontend
        Framework: React
        Variant: JavaScript
    ```
2. Install the node modules
    ```
    cd frontend
    npm install
    ```
3. Install React Router DOM
    ```
    npm install react-router-dom
    ```
4. Install date-fns
    ```
    npm install date-fns
    ```

### Backend
1. Create package.json
    ```
    cd backend
    npm init -y 
    ```
2. Install Express.js
    ```
    npm install express
    ```
3. Install Nodemon
    ```
    npm install -g nodemon
    ```
4. Install dotenv
    ```
    npm install dotenv
    ```
5. Install mongoose
    ```
    npm install mongoose
    ```