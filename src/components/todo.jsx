import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodoId } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeTodo(id));
  };

  const handleEditEvent = (e, id) => {
    e.preventDefault();
    dispatch(editTodoId(id));
  };

  return (
    <div>
      Todos
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              {todo.title}
              <button
                type="button"
                onClick={(e) => handleEditEvent(e, todo.id)}
              >
                Edit
              </button>

              <button type="button" onClick={(e) => handleRemove(e, todo.id)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
