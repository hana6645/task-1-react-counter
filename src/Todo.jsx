import { useReducer, useState } from "react";

const initialState = {
  todos: []
};

function reducer(state, action) {

  switch (action.type) {

    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload]
      };

    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload)
      };

    case "UPDATE_TODO":
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? action.payload.text : todo
        )
      };

    default:
      return state;
  }
}

function Todo() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);


  const handleAdd = () => {

    if (text.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: text
    });

    setText("");
  };

  const handleUpdate = () => {

    dispatch({
      type: "UPDATE_TODO",
      payload: {
        index: editIndex,
        text: text
      }
    });

    setEditIndex(null);
    setText("");
  };

  return (
    <div>

      <h2>Todo List</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />

      {editIndex === null ? (
        <button  style={{marginLeft:"10px"}} onClick={handleAdd}>Add</button>
      ) : (
        <button style={{marginLeft:"10px"}} onClick={handleUpdate}>Update</button>
      )}

      <ul>

        {state.todos.map((todo, index) => (

          <li key={index} style={{marginTop:"10px"}}>

            {todo}


            <button
            style={{marginLeft:"10px"}}
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: index
                })
              }
            >
              Delete
            </button>

           
            <button
            style={{marginLeft :"10px"}}
              onClick={() => {
                setEditIndex(index);
                setText(todo);
              }}
            >
              Edit
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default Todo;