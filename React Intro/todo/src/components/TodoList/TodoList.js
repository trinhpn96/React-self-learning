import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css"

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Drink Tea", status: "active" },
    { id: "2", text: "Eat sushi", status: "active" },
    { id: "3", text: "Learn React", status: "completed" },
  ]);

  const handleAdd = (todo) => {
    //update new todo in todos
    console.log(todo);
    setTodos([...todos, todo]);
  };

  const handleUpdate = (newObject) => {
    //update status
    setTodos(
      todos.map((todo) => (todo.id === newObject.id ? newObject : todo))
    );
  };

  const handleDelete = (deletedObject) => {
    //delete todo
    setTodos(todos.filter((todo) => todo.id !== deletedObject.id));
  };

  const filteredTodos = getFilteredTodos(todos, filter);
  function getFilteredTodos(todos, filter) {
    if (filter === "active") {
      return todos.filter((item) => item.status === "active");
    } else if (filter === "completed") {
      return todos.filter((item) => item.status === "completed");
    } else if (filter === "all") {
      return todos;
    }
  }

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((item) => (
          //add 4 props cho item
          <Todo
            key={item.id}
            todo={item}
            onUpdateStatus={handleUpdate} //variable, not event
            onDeleteTodo={handleDelete} //variable, not event
          /> //-> pass prop for Todo
        ))}
      </ul>

      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
