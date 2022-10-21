export default function StateButtons(props) {
  return (
    <button
      className=""
      onClick={() => props.handleClick(props.bool)}
    >
      {props.text}
    </button>
  );
}
