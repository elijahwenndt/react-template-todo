export default function StateButtons(props) {
    return (
      <button
        className="col-md-2 col-12 text-center text-opacity-75 hover fst-italic"
        onClick={() => props.handleClick(props.bool)}
      >
        {props.text}
      </button>
    );
  }