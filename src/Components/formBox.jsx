import "../styles/formBox.css";
import { Link } from "react-router-dom";

function formBox(props) {
  return (
    <Link to={props.to} className="formBox">
      <div className="logo"></div>
      <h2> {props.name}</h2>
    </Link>
  );
}

export default formBox;
