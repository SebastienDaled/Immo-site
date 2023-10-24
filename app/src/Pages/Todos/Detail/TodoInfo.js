import "./TodoInfo.css";
import { Link } from "react-router-dom";
import Button from "../../../components/Global/Button/Button";


const TodoInfo = ({ todo }) => {

  const convertDate = (dateTime) => {
    const date = new Date(dateTime);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }
  return (
    <div>
      <Link to="/">&lt; Back</Link>
      <div className="flex flex-end">
        <Button color="primary" href="edit">
          Edit
        </Button>
      </div>
      <div>
        <h1 className="title">{todo.title}</h1>
        <p className={`todo-state todo-${todo.done}`}>{todo.done ? "completed" : "not completed yet"}</p>
        <p className={`deadline`}>{todo.deadline ? convertDate(todo.deadline) : ''}</p>
        <p className="description">{todo.description}</p>
      </div>
    </div>
  );
};

export default TodoInfo;
