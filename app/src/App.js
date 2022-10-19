
import { useState } from 'react'

let keyNum = 0
let idNum = 0

function App() {
  const [value, setValue] = useState('');
  const [todo, setToDo] = useState([]);
  let nextId = todo.length;
 
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
          { id: `${value}_${nextId}_${keyNum++}`, value: value, }
        ]);
      }}>Add</button>
       { console.log(todo) }
      <ul>
        {todo.map((mappedArr)=> (
          <li id={`${idNum++}`} key={mappedArr.id}>{mappedArr.value}{' '}
          <button onClick={() => {
            
            
              setToDo(
                todo.filter(todoFilter =>
                  todoFilter.id !== mappedArr.id
                )
              );
            }}>
              Delete
            </button>
            <input className="form-check-input" type='checkbox' onClick={() => {document.getElementById('idNu')}}></input>
            {/* {console.log(todo)} */}
          </li>
          
        ))}
      </ul>
    </>
  );
}

export default App;

