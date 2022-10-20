export default function PageFilter(props) {
    // let FilterData = props.todo.filter(
    //     (newList) => newList.complete
    //   );

      return (
        <ul>
        {props.todo.map((mappedArr, i) => (
          <li
            className={mappedArr.complete ? "text-decoration-line-through" : ""}
            key={mappedArr.id}
          >
            {mappedArr.value}{" "}
            <button
              onClick={() => {
                props.setToDo(
                  props.todo.filter((todoFilter) => todoFilter.id !== mappedArr.id)
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
                props.todo[i].complete = !props.todo[i].complete;

                props.setToDo([...props.todo]);
              }}
            ></input>
          </li>
        ))}
      </ul>
      )
}

