import React, { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]); //create state
  function handleFilter(item) {
    setFilter(item);
  }

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={handleFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
