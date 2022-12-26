import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

const Todo = ({ todo, onUpdateStatus, onDeleteTodo }) => {
  const handleChange = (event) => {
    console.log(event);
    // console.log(newStatus);
    const newStatus = event.target.checked ? "completed" : "active";
    onUpdateStatus({ ...todo, status: newStatus }); //spreading obj k co thu tu
  };
  const handleDelete = () => {
    onDeleteTodo(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor="checkbox">
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default Todo;
