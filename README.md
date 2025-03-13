# Simple Todo Web App (Learning Purpose) - Using Redux Toolkit

## Project Overview

This is a simple **Todo Web App** built for learning purposes, which demonstrates how to manage state in a React application using **Redux Toolkit**. The app allows users to **add**, **edit**, and **delete** todos, while leveraging Redux Toolkit for effective state management.

## Key Features

- **Add Todo**: Allows users to add new tasks to the list.
- **Edit Todo**: Enables users to update the title of an existing task.
- **Delete Todo**: Allows users to remove tasks from the list.
- **Redux Toolkit Integration**: The app uses Redux Toolkit to manage the state, ensuring predictable and scalable state management across the app.

## Learning Objectives

This project aims to help you learn:

1. **State Management with Redux Toolkit**: You will learn how to use Redux Toolkit to manage global state in a React app.
2. **Action Creators and Reducers**: Learn how to define and dispatch actions to modify the state in Redux.
3. **React-Redux Integration**: Understand how to connect Redux store with React components using `useDispatch` and `useSelector`.
4. **Conditional Rendering in React**: Learn how to conditionally render components based on Redux state, such as showing the edit form when a todo is selected for editing.

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **Redux Toolkit**: A state management library that simplifies the process of working with Redux.
- **JavaScript**: The programming language used for building the application.
- **CSS**: Basic styling for the UI components.

## Project Structure

The project is organized in the following way:

1. **redux**:
   - Contains the Redux slice (`todoSlice.js`) to manage todos and the app’s state.
   - Stores actions like `addTodo`, `removeTodo`, `updateTodo`, and `setEditTodoId`.
2. **components**:
   - **AddTodo**: A form that allows users to add or edit a todo.
   - **TodoList**: Displays the list of todos with options to edit or delete each todo.
3. **App.js**:
   - The root component that uses `Provider` to wrap the app and pass down the Redux store.
4. **redux/store.js**:
   - Configures the Redux store and combines reducers.

## How It Works

1. **Adding Todos**: Users can enter a todo title and click the "Add Todo" button. The app dispatches an `addTodo` action to the Redux store, adding the new todo to the state.
2. **Editing Todos**: When users click the "Edit" button next to a todo, the app sets the `editTodoId` in the Redux store to the todo’s ID. The **AddTodo** component then populates the form with the current title of that todo, allowing users to edit it.
3. **Removing Todos**: Clicking the "Delete" button next to a todo dispatches the `removeTodo` action, which removes the todo from the state.

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git@github.com:devhimal/todo-redux-toolkit.git
cd todo-redux-toolkit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Project Structure

```
/src
  /components
    AddTodo.js        // Component to add or edit todos
    TodoList.js       // Component to list todos
  /store
    store.js
  /redux
    todoSlice.js      // Redux slice for todos
  App.js              // Main application component
  index.js            // App entry point
```

## Key Concepts to Learn

- **Redux Toolkit**: Learn how Redux Toolkit simplifies the process of writing Redux logic with slices, reducers, and actions.
- **`useDispatch` and `useSelector`**: Understand how to dispatch actions and select state from the Redux store in React components.
- **State Updates**: Learn how state is updated in response to user actions and how these updates are reflected in the UI using Redux state.

## Conclusion

This project is designed to help you understand **Redux Toolkit** and its integration with **React** for managing application state. It is a beginner-friendly project that gives you hands-on experience with modern state management techniques using Redux Toolkit.
# todo-redux-toolkit
