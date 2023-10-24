import { Link, useNavigate } from "react-router-dom"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Title from "../Title/Title"
import style from "./LoginScreen.module.css";
import useMutation from "../../../hooks/useMutation";
import { useState } from "react";

const Register = ({initialError, onLogin}) => {

  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "", 
    birthdate: "",
    phone: "",
    address_street: "",
    address_number: "",
    address_postalcode: "",
    address_city: "",
    role: "gebruiker"
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
        navigate("/");
      },
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
        navigate("/");
      },
    });
  };

  return (
    <div className="flex__item__form">
      <Title>Inloggen</Title>
      <form onSubmit={handleSubmit}>
        {error || initialError ? <p className={style.error}>{initialError ?? error}</p> : ''}
        <label htmlFor="username">Username</label>
        <Input name="username" value={data.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <Input name="password" value={data.password} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <Input name="email" value={data.email} onChange={handleChange} type="email"/>
        <label htmlFor="birthdate">Birthdate</label>
        <Input name="birthdate" value={data.birthdate} onChange={handleChange} type="date" />
        <label htmlFor="phone">Phone</label>
        <Input name="phone" value={data.phone} onChange={handleChange} />
        <label htmlFor="address_street">Address Street</label>
        <Input name="address_street" value={data.address_street} onChange={handleChange} />
        <label htmlFor="address_number">Address Number</label>
        <Input name="address_number" value={data.address_number} onChange={handleChange} />
        <label htmlFor="address_postalcode">Address Postalcode</label>
        <Input name="address_postalcode" value={data.address_postalcode} onChange={handleChange} />
        <label htmlFor="address_city">Address City</label>
        <Input name="address_city" value={data.address_city} onChange={handleChange} />
        
        {/* <Button type="submit" disabled={isLoading}> Login </Button> */}
        <Button type="submit" disabled={isLoading} onClick={handleRegister}> Register </Button>
        <Link to="/login">al een account</Link>
      </form>
    </div>
  )
}

export default Register