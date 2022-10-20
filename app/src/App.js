import { useState } from "react";

let keyNum = 0;

function App() {
  const [value, setValue] = useState("");
  const [todo, setToDo] = useState([]);

  let completeCounter = todo.filter(
    (totalComplete) => totalComplete.complete
  ).length;
  console.log(completeCounter);

  return (
    <>
      <h1>TO DO</h1>
      <h2>tasks completed: {completeCounter}</h2>
      <button
        onClick={() => {
          todo.forEach((allTrue) => (allTrue.complete = true));
          setToDo([...todo]);
          console.log(todo);
        }}
      >
        complete all
      </button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          setValue("");
          setToDo([
            ...todo,
            {
              id: `${value}_${todo.length}_${keyNum++}`,
              value: value,
              complete: false,
            },
          ]);
        }}
      >
        Add
      </button>
      {console.log(todo)}
      <ul>
        {todo.map((mappedArr, i) => (
          <li
            className={mappedArr.complete ? "text-decoration-line-through" : ""}
            key={mappedArr.id}
          >
            {mappedArr.value}{" "}
            <button
              onClick={() => {
                setToDo(
                  todo.filter((todoFilter) => todoFilter.id !== mappedArr.id)
                );
              }}
            >
              Delete
            </button>
            <input
              className="form-check-input"
              type="checkbox"
              checked={mappedArr.complete ? true : false}
              onClick={() => {
                todo[i].complete = !todo[i].complete;

                setToDo([...todo]);
              }}
            ></input>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
