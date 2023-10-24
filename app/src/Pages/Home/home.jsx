import React from 'react';
import './home.css';
import Hero from '../../components/Global/Hero/hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className='homeFlex'>
        <aside className='infoTextDiv'>
          <div>
          <h2>Vind uw droomhuis met onze immo site</h2>
          <p>Welkom op onze immo site, waar we u helpen bij het vinden van uw droomhuis. Wij zijn gepassioneerd door het bieden van hoogwaardige vastgoedoplossingen en streven ernaar om u de beste service te bieden die u verdient. Of u nu op zoek bent naar een appartement in het hart van de stad of een villa aan de kust, wij hebben de expertise om uw dromen werkelijkheid te maken.</p>
          </div>
        </aside>
        <div className='wideDiv'>
          <div>
            <div className='beige square'></div>
            <img src="/images/home/1.jpg" alt="" className='rect' />
          </div>
          <div>
            <img src="/images/home/2.jpg" alt="" className='square'/>
            <div className='grey rect'>
              <p>UNIEK</p>
            </div>
          </div>
        </div>
      </section>
      <section className='homeFlex mt-b'>
        <div className='wideDiv'>
          <div>
            <div className='grey rect'>
              <p>LUXUEUS</p>
            </div>
          </div>
          <div>
            <div className='beige square'>

            </div>
            <img src="/images/home/3.jpg" alt="" className='square' />
          </div>
        </div>
        <aside className='infoTextDiv'>
          <div>
          <h2>Deskundige makelaars staan voor u klaar</h2>
          <p>Onze deskundige makelaars helpen u graag bij het vinden van het pand dat bij uw behoeften en budget past. Zij hebben de kennis en ervaring om u te begeleiden bij elke stap van het proces en zullen ervoor zorgen dat u goed geïnformeerd bent over uw opties.</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Home;