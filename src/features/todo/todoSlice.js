import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "Hello, Himal Tamang", dateline: "" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        dateline: action.payload.dateline,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newTitle } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle;
      }
    },
    editTodoId: (state, action) => {
      state.editTodoId = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodoId } =
  todoSlice.actions;
export default todoSlice.reducer;
