import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = (e) => {
    setTask(e.target.value);
    //console.log(task);
  };

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), task: task }]);
      setTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="text-2xl flex flex-col items-center font-mono">
      <h1 className="my-4 py-6 text-5xl">TO-DO's!</h1>
      <input
        value={task}
        onChange={handleAddTask}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Enter task here..."
        className="border-black border-2 rounded-lg w-[400px] h-[50px]"
      />
      <button
        className=" border-black border-2 my-2 p-1 rounded-2xl bg-slate-300"
        onClick={handleAddTodo}
      >
        Add Task
      </button>
      <ul className=" text-black">
        {todos.map((todo) => (
          <li className="text-3xl my-9" key={todo.id}>
            {todo.task}
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-black text-white px-1 mx-4  text-sm py-1 "
            >
              Delete
            </button>
            <button className="bg-black text-white px-1 text-sm py-1 ">
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
