import { useState } from "react";
import Filtertodo from './Filtertodo'
import Statebutton from './Statebutton'
import Submission from './Submission'
let keyNum = 0;

function App() {
  const [value, setValue] = useState("");
  const [todo, setToDo] = useState([]);
  const [page, setPage] = useState("false");

  let completeCounter = todo.filter(
    (totalComplete) => totalComplete.complete).length;
  console.log(completeCounter);

  const buttonFilter = [
    "All",
    "Completed",
    "ToDo",
  ];
  function handleClick(text) {
    setPage(text);
  }
  return (
    <>
      <Submission value={value} setValue={setValue} todo={todo} setToDo={setToDo}/>
      {/* <h1>TO DO</h1>
      <h2>tasks completed: {completeCounter}</h2>
      <button
        onClick={() => {
          todo.forEach((allTrue) => (allTrue.complete = true));
          setToDo([...todo]);
        }}
      >
        check all
      </button>
      <button onClick={() => {
        todo.forEach((allFalse) => (allFalse.complete = false));
        setToDo([...todo]);
      }}>uncheck all</button>
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
      </button> */}
      <Filtertodo todo={todo} page={page} setToDo={setToDo} />
      {console.log(todo)}
      {/* <ul>
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
      </ul> */}
      <button onClick = {() => {
        setToDo(
          todo.filter(deleteComplete => deleteComplete.complete === false)
        )
      }}>delete all completed</button>
      {buttonFilter.map((buttons) => (
        <Statebutton text={buttons} handleClick={handleClick} />
      ))}
    </>
  );
}

export default App;
