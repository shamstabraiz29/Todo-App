import React, { useState } from "react";
import List from "./components/List";

function App() {
  const [items, setitems] = useState([
    {
      title: "Todo item One",
      completed: false,
      edit: false,
    },
    {
      title: "Todo item Two",
      completed: false,
      edit: false,
    },
  ]);


  // Add Todo

  const addList = (title) => {
    const newList = [...items, { title, completed: false }];
    setitems(newList);
  };

  // update Todo Input

  const updateInput = (e, index) => {
    const newlists = [...items];
    newlists[index].title = e.target.value;
    console.log(e.target.value);
    setitems(newlists);
  };

  // Complete Todo

  const completeList = (index) => {
    const newlists = [...items];
    newlists[index].completed = true;
    setitems(newlists);
  };

  // Delete Todo

  const deleteList = (index) => {
    const newlists = [...items];
    newlists.splice(index, 1);
    setitems(newlists);
  };

  // edit Todo

  const editList = (index) => {
    const newlists = [...items];
    newlists[index].edit = true;
    setitems(newlists);
  };

  // Update Tod

  const updateList = (index) => {
    const newlists = [...items];
    newlists[index].edit = false;
    setitems(newlists);
  };


  return (
    <div className="main">
      <h1>Todo App</h1>
      <List
        items={items}
        addList={addList}
        completeList={completeList}
        updateList={updateList}
        updateInput={updateInput}
        deleteList={deleteList}
        editList={editList}
      />
    </div>
  );
}

export default App;
