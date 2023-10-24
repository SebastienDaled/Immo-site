import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Global/Nav/Profile/Nav';
import { useAuthContext } from '../../contexts/AuthContainer';
import './Gegevens.css';

const Gegevens = () => {

  const {user} = useAuthContext();

  return (
    <div>
      <Nav />
      

      <section className='gegevens'>
        <div className='sidenav'>
          <div className='circle'></div>

          <p className='sidenav__item'>Accountoverzicht</p>
        </div>
        <div className='info'>
          <div className='info_all'>
            <h2 className='info__title'>Accountoverzicht</h2>

            <p>naam: {user.username}</p>
            <p>email: {user.email}</p>
            <p>telefoonnummer: {user.phone}</p>
            <p>rol: {user.role}</p>
            <br />
            <p>adres: {user.address_street} {user.address_number} 
            <p>stad: {user.address_postalcode} {user.address_city}</p></p>
            <p>geboortedatum: {user.birthdate}</p>
            
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gegevens;