import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Global/Title/Title";
import TodoForm from "./Form/TodoForm";
import useMutation from "../../hooks/useMutation";

const EditTodo = ({ todo, onUpdate }) => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    data = {
      ...data,
      deadline: new Date(data.deadline).getTime(),
    }
    mutate(`${process.env.REACT_APP_API_URL}/todos/${todo._id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        onUpdate();
        navigate(`/todos/${todo._id}`);
      },
    });
  };

  return (
    <>
      <Link to="/">&lt; Back</Link>
      <Title>Edit todo</Title>
      {error && <p>{error}</p>}
      <TodoForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Save"
        initialData={todo}
      />
    </>
  );
};

export default EditTodo;
