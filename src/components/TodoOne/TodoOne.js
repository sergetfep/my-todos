import React, { useState, useEffect } from 'react';
import styles from './TodoOne.module.css';
import { TodoList } from './TodoOneComponents/TodoList';
import { Context } from './context';
import { AddTodo } from './TodoOneComponents/AddTodo';
import { Loader } from '../common/Loader/Loader';
import { Modal } from '../common/Modal/Modal';

// const AddTodo = React.lazy(() => import('./AddTodo')); // work only on App.js

// const AddTodo = React.lazy(
//   () =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(import('./TodoOneComponents/AddTodo'));
//       }, 3000);
//     })
// );

export const TodoOne = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([{ title, id: Date.now(), completed: false }]));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className={styles.wrapper}>
        <h1>React Todo</h1>
        <Modal />
        {/* <React.Suspense fallback={<p>Loading...</p>}> */}
        <AddTodo onCreate={addTodo} />
        {/* </React.Suspense> */}
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
};
