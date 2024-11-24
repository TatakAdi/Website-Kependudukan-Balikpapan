import "../styles/formBox.css";

function formBox(props) {
  return (
    <div className="formBox">
      <div className="logo"></div>
      <h2> {props.name}</h2>
    </div>
  );
}

export default formBox;
