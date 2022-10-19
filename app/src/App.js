
import { useState } from 'react'



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
          { id: `${value}_${nextId}`, value: value, }
        ]);
      }}>Add</button>
       { console.log(todo) }
      <ul>
        {todo.map(mappedArr => (
          <li key={mappedArr.id}>{mappedArr.value}{' '}
          <button onClick={() => {
              setToDo(
                todo.filter(todoFilter =>
                  todoFilter.id !== mappedArr.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;