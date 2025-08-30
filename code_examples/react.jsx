import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

// Utility function
const generateRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

// Child Component
function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <motion.li
      className={`p-2 rounded-xl shadow-md flex justify-between items-center ${
        todo.completed ? "bg-green-200 line-through" : "bg-white"
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span>{todo.text}</span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </motion.li>
  );
}

// Main Component
export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish React project", completed: false },
    { id: 2, text: "Prepare dinner", completed: true },
  ]);
  const [input, setInput] = useState("");
  const [themeColor, setThemeColor] = useState("#f3f4f6");

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  const toggleComplete = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [setTodos]
  );

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    if (text.trim().length === 0) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
    setInput("");
  };

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-6"
      style={{ backgroundColor: themeColor }}
    >
      <h1 className="text-4xl font-bold mb-4">My Todo List</h1>
      <div className="flex gap-2 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo(input)}
          placeholder="Add a new task..."
          className="p-2 border rounded-xl shadow-inner w-72"
        />
        <button
          onClick={() => addTodo(input)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-700"
        >
          Add
        </button>
        <button
          onClick={() => setThemeColor(generateRandomColor())}
          className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-700"
        >
          Change Theme
        </button>
      </div>

      <ul className="space-y-3 w-full max-w-md">
        {todos.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600"
          >
            No tasks yet. Add something above!
          </motion.p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))
        )}
      </ul>

      <footer className="mt-6 text-gray-800">
        Completed: {completedCount} / {todos.length}
      </footer>
    </div>
  );
}
