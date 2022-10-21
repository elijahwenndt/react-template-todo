export default function Submission(props) {
  return (
    <>
      <h1>TO DO</h1>
      <h2>tasks completed: {props.completeCounter}</h2>
      <button
        onClick={() => {
          props.todo.forEach((allTrue) => (allTrue.complete = true));
          props.setToDo([...props.todo]);
        }}
      >
        check all
      </button>
      <button
        onClick={() => {
          props.todo.forEach((allFalse) => (allFalse.complete = false));
          props.setToDo([...props.todo]);
        }}
      >
        uncheck all
      </button>
      <input
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <button
        onClick={() => {
          props.setValue("");
          props.setToDo([
            ...props.todo,
            {
              id: `${props.value}_${props.todo.length}`,
              value: props.value,
              complete: false,
            },
          ]);
        }}
      >
        Add
      </button>
    </>
  );
}
