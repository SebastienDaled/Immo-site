import React, { useEffect, useState } from 'react';
import Loading from '../../components/Global/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import './Huizen.css';
import { Link } from 'react-router-dom';
import HuizenKaart from '../../components/Global/Cards/Houses/HuizenKaart';

const Huizen = () => {
  const {
    isLoading,
    error,
    invalidate,
    data: huizen,
  } = useFetch("/huizen");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Huizen</h1>
      <div className='huizen'>
        {huizen.map((huis) => (
          <div  className='houseCart' key={huis._id}>
            <HuizenKaart huis={huis} />
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Huizen;