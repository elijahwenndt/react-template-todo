
import { useState } from 'react'

let keyNum = 0
let idNum = 0

function App() {
  const [value, setValue] = useState('');
  const [todo, setToDo] = useState([]);
  let nextId = todo.length;
 
  let counter = 0
  return (
    <>
      <h1>TO DO</h1>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => {
        setValue('');
        setToDo([
          ...todo,
          { id: `${value}_${nextId}_${keyNum++}`, value: value, complete: false}
        ]);
      }}>Add</button>
       { console.log(todo) }
      <ul>
        {todo.map((mappedArr, i)=> (
          <li className = {mappedArr.complete ? 'text-decoration-line-through' : ''}key={mappedArr.id}>{mappedArr.value}{' '}
          <button onClick={() => {
            
            
              setToDo(
                todo.filter(todoFilter =>
                  todoFilter.id !== mappedArr.id
                )
              );
            }}>
              Delete
            </button>
            <input className="form-check-input" type='checkbox' checked={mappedArr.complete ? true : false} onClick={() => {
              todo[i].complete = !todo[i].complete
              setToDo([
                ...todo
              ])
              
            }}></input>
            {/* {console.log(todo)} */}
          </li>
          
        ))}
      </ul>

    </>
  );
}

export default App;

