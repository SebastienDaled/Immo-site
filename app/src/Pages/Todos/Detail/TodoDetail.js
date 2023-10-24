import { Route, Routes, useParams } from "react-router-dom";
import Loading from "../../../components/Global/Loading/Loading";
import EditTodo from "../EditTodo";
import TodoInfo from "./TodoInfo";
import useFetch from "../../../hooks/useFetch";

const TodoDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    invalidate,
    data: todo,
  } = useFetch(`/todos/${id}`);

  const handleUpdate = () => {
    invalidate();
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route
        path="edit"
        element={<EditTodo todo={todo} onUpdate={handleUpdate} />}
      />
      <Route index element={<TodoInfo todo={todo} />} />
    </Routes>
  );
};

export default TodoDetail;
