import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [Todos, setTodos] = useState([]);
  const [newtask, setnewtask] = useState("");

  const inputtext = (e) => {
    setnewtask(e.target.value);
  };

  const addtask = () => {
    if (newtask.trim() === "") return;
    setTodos([...Todos, { task: newtask, id: uuidv4() }]);
    setnewtask("");
  };

  const deleteTodos = (id) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center pt-20 px-4">

      {/* 🔥 Highlighted Box */}
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl border border-indigo-100">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          📝 Todo App
        </h1>

        <input
          type="text"
          placeholder="Add a new task..."
          value={newtask}
          onChange={inputtext}
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={addtask}
          className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
        >
          Add Task
        </button>
      </div>

      {/* 📋 Todo List BELOW */}
      <ul className="w-full max-w-md mt-6 space-y-3">
        {Todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white/90 px-4 py-3 rounded-xl shadow-md"
          >
            <span className="text-gray-800">{todo.task}</span>

            <button
              onClick={() => deleteTodos(todo.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
