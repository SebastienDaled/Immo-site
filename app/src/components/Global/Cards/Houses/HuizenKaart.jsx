import React from 'react';
import { Link } from 'react-router-dom';
import './HuizenKaart.css';

const HuizenKaart = ({huis}) => {
  const imageUrl = "/images/home/" 

  let url;
  let lastIndex;
  let fileName;

  return (
    <Link to={`/huizen/${huis._id}`} key={huis._id}>
            <div className='houseCartItem'>
              <div className='houseCart__image'>
                <p className='none'>
                {
                  url = huis.image
                }
                {
                  lastIndex = url.lastIndexOf('\\')
                }
                {
                  fileName = url.substring(lastIndex + 1)
                }
                </p>
                <img src={imageUrl + fileName} alt='house' />
              </div>
              <div className='houseCart__info'>
                <h4 className='info_st'>{huis.soort} - {huis.type}</h4>
                <h3 className='info_price'>€ {huis.prijs}</h3>
                <p className='info_adres'>{huis.address_street}, {huis.address_postalcode} {huis.address_city}</p>
                <p className='info_inf'>{huis.kamers} slaapkamers - {huis.oppervlakte}m<span className='super'>2</span></p>
              </div>
            </div>
          </Link>  
  );
};

export default HuizenKaart;