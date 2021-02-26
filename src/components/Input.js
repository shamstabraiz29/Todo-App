import React, { useState } from "react";

export default function Input({ addList }) {
  const [value, setValue] = useState("");

  const AddTodo = (e) => {
    e.preventDefault();
    if (!value) return;
    addList(value);
    setValue("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="add-input"
          value={value}
          placeholder="Add a Something"
          onChange={(e) => setValue(e.target.value)}
        /><br></br>
          <button className="btn add"  onClick={AddTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
}
