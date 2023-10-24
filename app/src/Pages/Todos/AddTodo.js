import { Link, useNavigate } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import Title from "../../components/Global/Title/Title";
import TodoForm from "./Form/TodoForm";
import { useAuthContext } from "../../contexts/AuthContainer";

const AddTodo = () => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();
  const {user} = useAuthContext()

  const handleSubmit = (data) => {
    data = {
      ...data,
      deadline: new Date(data.deadline).getTime(),
      creator: user._id
    }
    mutate(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/todos`);
      },
    });
  };

  return (
    <>
      <Link to="/">&lt; Back</Link>
      <Title>Add todo</Title>
      {error && <p>{error}</p>}
      <TodoForm
        onSubmit={handleSubmit}
        isDisabled={isLoading}
        label="Create"
      />
    </>
  );
};

export default AddTodo;
