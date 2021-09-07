import './App.css';
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    //console.log('uuid',todo);
    setTodos([todo, ...todos]);
    //console.log("app",todo);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        //console.log("todo.id:",todo.id ,":","id:",id);
        if (todo.id === id) {
          //console.log(!todo.completed);
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    //console.log(id);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>ToDo-List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
