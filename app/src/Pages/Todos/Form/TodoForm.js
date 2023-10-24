import { useEffect, useState } from "react";
import Button from "../../../components/Global/Button/Button";
import Input from "../../../components/Global/Input/Input";
import Textarea from "../../../components/Global/Textarea/Textarea";

const TodoForm = ({ onSubmit, isDisabled, label, initialData = {} }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    deadline: "",
    done: false,
    ...initialData,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  
  useEffect(() => {
   if(initialData.deadline)
   setData({...data,deadline:new Date(initialData.deadline).toISOString().slice(0,10)}
  )

  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <Input name="title" value={data.title} onChange={handleChange} />
      <label htmlFor="description">Description</label>
      <Textarea name="description" value={data.description} onChange={handleChange} />
      <label htmlFor="deadline">Deadline</label>
      <Input type={'date'} name="deadline" value={data.deadline} onChange={handleChange} />
      <Button type="submit" disabled={isDisabled}>
        {label}
      </Button>
    </form>
  );
};

export default TodoForm;
