import React from "react";
import ListItem from "./ListItem";
import Input from "./Input";

function List({
  items,
  addList,
  completeList,
  deleteList,
  editList,
  updateList,
  updateInput,
}) {
  return (
    <div>
      <div>
        {items.map((item, index) => (
          <ListItem
            item={item}
            index={index}
            key={index}
            completeList={completeList}
            updateList={updateList}
            updateInput={updateInput}
            deleteList={deleteList}
            editList={editList}
          />
        ))}
      </div>
      <div className="create-List">
        <Input addList={addList} />
      </div>
    </div>
  );
}

export default List;
