import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo, editTodoId } from "../features/todo/todoSlice";
import { useSelector } from "react-redux";

const AddTodo = () => {
  const editId = useSelector((state) => state.todos.editTodoId);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [dateline, setDateline] = useState("");

  React.useEffect(() => {
    // If a todo is being edited, populate the title with the current todo's title
    if (editId) {
      const todoToEdit = todos.find((todo) => todo.id === editId);
      if (todoToEdit) {
        setTitle(todoToEdit.title);
      }
    }
  }, [editId, todos]);

  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTodoId) {
      // If editing, dispatch the update action
      dispatch(updateTodo({ id: editTodoId, newTitle: title }));
      dispatch(editTodoId(null)); // Clear the edit mode after update
    } else {
      // If adding a new todo
      dispatch(addTodo({ title }));
    }
    setTitle(""); // Clear the input field after submit
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title, dateline }));
    setTitle("");
    setDateline("");
  };

  return (
    <form className="p-4 border rounded shadow-md w-80" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Dateline:</label>
        <input
          type="date"
          value={dateline}
          onChange={(e) => setDateline(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        onClick={handleClick}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {editTodoId ? "update" : "add todo"}
      </button>
    </form>
  );
};

export default AddTodo;
