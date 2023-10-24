import React, { useEffect, useState } from 'react';
import Input from '../../components/Global/Input/Input';
import Textarea from '../../components/Global/Textarea/Textarea';
import Button from '../../components/Global/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import { useAuthContext } from '../../contexts/AuthContainer';
import Title from '../../components/Global/Title/Title';
import PandForm from './Form/PandForm';

const AddPand = () => {
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();
  const {user} = useAuthContext()

  const handleSubmit = (data) => {
    data = {
      ...data,
      deadline: new Date(data.deadline).getTime(),
      creator: user._id
    }
    mutate(`${process.env.REACT_APP_API_URL}/makelaar`, {
      method: "POST",
      data,
      onSuccess: () => {
        navigate(`/makelaar`);
      },
    });
  };

  return (
    <>
      <Link to="/makelaar">&lt; Back</Link>
      <Title>Voeg een pand toe</Title>
      {error && <p>{error}</p>}
      <PandForm onSubmit={handleSubmit} isDisabled={isLoading} label="Create" />
    </>
  );
};

export default AddPand;