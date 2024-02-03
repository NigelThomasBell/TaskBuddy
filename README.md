# TaskBuddy - A MERN stack web application project
![TaskBuddy Project Image](/_readme_images/TaskBuddy.png "TaskBuddy Project Image")
## Introduction
* This project:
    * Is based on:
        * The [MERN Stack Tutorial series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE) by The Net Ninja.
        * The [MERN Authentication Tutorial series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT) by The Net Ninja.
    * Creates tasks instead of workouts.
    * Uses Vite (via `create vite@latest`) instead of Create React App (via `create-react-app`) because the latter is objectively worse (in many factors such as project size and performance) and is no longer officially or professionally recommended for creating new React applications.
        * For the frontend, the server port is not initially set to 3000 and the `proxy` field inside `package.json`, as seen in [MERN Stack Tutorial #9 - Fetching Data](https://www.youtube.com/watch?v=MEab_a19ZGk), does not work.
        * To fix this, the following field is added to the config file `vite.config.js`, specifically within the `defineConfig` type helper function:
            ```
            server: {
                port: 3000,
                proxy: {
                    "/api": {
                        target: "http://localhost:4000/",
                    },
                },
            },
            ```

## Instructions
1. Inside the `backend` folder, create a file called `.env`.
2. Follow the instructions from [MERN Stack Tutorial #4 - MongoDB Atlas & Mongoose](https://www.youtube.com/watch?v=s0anSjEeua8) on how to make a database in MongoDB Atlas.
3. Inside the `.env` file, add the following:
    ```
    PORT=4000
    MONGO_URI=connection_string
    SECRET=secret_string
    ```
    where:
    * `connection_string` is the connection string obtained from MongoDB Atlas, with the `<password>` section changed to the user password.
    * `secret_string` is the string used when signing JSON Web Tokens, which are used when logging in and signing up.
4. Open two terminals: one for the frontend and one for the backend. Both need to be running for the full stack application to function.
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
5. After installing both the frontend and backend node modules, the command `npm install` does not need to be rerun for either end. 

## EXTRA: Node modules used to create the web application and the corresponding commands used during development:
### Frontend
1. Create a Vite application
    ```
    npm create vite@latest frontend
    ```
    Select the following:
    * Framework: React
    * Variant: JavaScript
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
6. Install bcrypt
    ```
    npm install bcrypt
    ```
6. Install validator
    ```
    npm install validator
    ```
7. Install jsonwebtoken
    ```
    npm install jsonwebtoken
    ```