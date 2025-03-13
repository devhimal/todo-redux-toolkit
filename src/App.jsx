import "./App.css";
import Todos from "../src/components/todo.jsx";
import AddTodo from "../src/components/addTodo.jsx";

function App() {
  return (
    <>
      <h1>hello todos</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
