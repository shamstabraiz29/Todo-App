import React from "react";

function ListItem({
  item,
  index,
  completeList,
  deleteList,
  editList,
  updateList,
  updateInput,
}) {
  return (
    <>
      <div style={{ textDecoration: item.completed ? "line-through" : "" }}>
        {item.edit ? (
          <input
            className ="update-input"
            value={item.title}
            onChange={(e) => updateInput(e, index)}
          />
        ) : (
          item.title
        )}
        <div className="buttons">
          <button className="btn" onClick={() => completeList(index)}>
            completed
          </button>
          <button className="btn" onClick={() => deleteList(index)}>
            Delete
          </button>
          {item.edit ? (
            <button className="btn" onClick={() => updateList(index)}>
              Update
            </button>
          ) : (
            <button className="btn" onClick={() => editList(index)}>
              Edit
            </button>
          )}
        </div>
        <br></br>
      </div>
    </>
  );
}
export default ListItem;
