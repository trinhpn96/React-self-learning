import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css"

// create component AddTodo
const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    //change state
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length === 0) {
      return;
    }

    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add To Do"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddTodo;
