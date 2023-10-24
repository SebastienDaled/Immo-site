import Loading from "../../components/Global/Loading/Loading";
import List from "../../components/Global/List/List";
import ListItem from "../../components/Global/List/ListItem";
import Button from "../../components/Global/Button/Button";
import DeleteTodoButton from "./Delete/DeleteTodoButton";
import useFetch from "../../hooks/useFetch";

const TodosOverview = () => {
  const {
    isLoading,
    error,
    invalidate,
    data: todos,
  } = useFetch("/todos");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteSuccess = () => {
    invalidate();
  };

  return (
    <>
      <div className="flex flex-end">
        <Button color="primary" href="add">
          Add
        </Button>
      </div>
      <List>
        {todos.map((todo) => (
          <ListItem
            href={`/todos/${todo._id}`}
            key={todo._id}
            title={todo.title}
            done={todo.done}
            data={todo}
          >
            <DeleteTodoButton
              id={todo._id}
              onSuccess={handleDeleteSuccess}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodosOverview;
