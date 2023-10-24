import { useState } from "react";
import Button from "../../components/Global/Button/Button";
import Container from "../../components/Global/Container/Container";
import Input from "../../components/Global/Input/Input";
import Title from "../../components/Global/Title/Title";
import useMutation from "../../hooks/useMutation";
import style from "./LoginScreen.module.css";
import { Link } from "react-router-dom";

const Register = ({ onLogin, initialError }) => {

  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

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
      },
    });
  };

  return (
    <div>
      <div className={style.loginContainer}>
        <div className={style.flex__item__fig}>
          <img src="/images/login/log.jpg" alt="log" className={style.loginImg}/>
        </div>

        {/* check if route is register or login then show other div */}
        <div className="flex__item__form">
        
        </div>
        
      </div>
    </div>
  );
};

export default Register;
