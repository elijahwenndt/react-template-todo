export default function (props) {
  return (
    <li
      className={props.mappedArr.complete ? "text-decoration-line-through" : ""}
      key={props.mappedArr.id}
    >
      {props.mappedArr.value}{" "}
      <button
        onClick={() => {
          props.setToDo(
            props.todo.filter(
              (todoFilter) => todoFilter.id !== props.mappedArr.id
            )
          );
        }}
      >
        Delete
      </button>
      <input
        className="form-check-input"
        type="checkbox"
        checked={props.mappedArr.complete ? true : false}
        onClick={() => {
          props.todo[props.i].complete = !props.todo[props.i].complete;

          props.setToDo([...props.todo]);
        }}
      ></input>
    </li>
  );
}
