import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Global/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/Global/Button/Button';
import './HuizenDetail.css';

const HuizenDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    invalidate,
    data: huis,
  } = useFetch(`/huizen/${id}`);


  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }
  const imageUrl = "/images/home/" 

  let url;
  let lastIndex;
  let fileName;
  return (
    <div>
      <Link to="/huizen">&lt; Back</Link>
      <h1>Huizen Detail</h1>
      <div className='huizen'>
        
          <div className='detailfig'>
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
              <img className='detailimg' src={imageUrl + fileName} alt='house' />
              <div className='figsquares'>
                {/* placeholder images from the web */}
                <img className='detailimgs' src="https://via.placeholder.com/150" alt='house' />
                <img className='detailimgs' src="https://via.placeholder.com/150" alt='house' />
                <img className='detailimgs' src="https://via.placeholder.com/150" alt='house' />
                
              </div>
          </div>
          <div className='detailHeadbar'>
            <div className='detailHeadbar__info'>
              <p>{huis.soort} - {huis.type}</p>
              <p>{huis.address_street}, {huis.address_postalcode} {huis.address_city}</p>
            </div>
            <p className='detailPrijs'>€ {huis.prijs}</p>

            <Button className="btn--primary right">Favorieten</Button>
          </div>
          <div className=''>
            <h2 className='tussentitel'>Beschrijving:</h2>
            <p>{huis.beschrijving}</p>

            <h2 className='tussentitel mt'>Overzicht</h2>
            <div className='detailOverzicht'>
              <div className='detailOverzicht__item'>
                <p className='detailOverzicht__item__title'>- {huis.kamers} Slaapkamers</p>
              </div>
              <div className='detailOverzicht__item'>
                <p className='detailOverzicht__item__title'>- {huis.oppervlakte}m<span className='super'>2</span></p>
              </div>
            </div>
          </div>
        
      </div>
    </div>

  );
};

export default HuizenDetail;