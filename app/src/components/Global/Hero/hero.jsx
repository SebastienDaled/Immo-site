import React, { useState, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [filter, setFilter] = useState({
    forSale: false,
    forRent: false,
    region: '',
    price: '',
    propertyType: '',
    bedrooms: '',
  });

  const [regionSuggestions, setRegionSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: newValue }));
  };

  const handleSearch = () => {
    // Process the filter criteria and navigate to another page
    console.log(filter);
  };

  const imageUrl = '/hero.jpg';

  useEffect(() => {
    const fetchRegionSuggestions = async () => {
      try {
        setLoading(true);
        // Replace the following code with your logic to fetch region suggestions from the database
        // give me the right fetch url
        const response = await fetch(process.env.REACT_APP_API_URL + '/gemeentes');
        console.log(response);
        const data = await response.json();
        setRegionSuggestions(data); // Update region suggestions based on the fetched data
      } catch (error) {
        console.error('Error fetching region suggestions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegionSuggestions();
  }, []);

  return (
    <div className="hero">
      {/* <div className='divImg'> */}
        <img src={imageUrl} alt="Hero" />
      {/* </div> */}

      <div className="filter">

        <div className='huurKoopDiv'>
          <label>
            <input
              type="checkbox"
              name="forSale"
              checked={filter.forSale}
              onChange={handleFilterChange}
            />
            Te koop
          </label>

          <label>
            <input
              type="checkbox"
              name="forRent"
              checked={filter.forRent}
              onChange={handleFilterChange}
            />
            Te huur
          </label>
        </div>

        <div className="bigFilter">
        <label>
          <input
            type="text"
            name="region"
            value={filter.region}
            onChange={handleFilterChange}
            placeholder="Voer een regio in"
            list="regionSuggestions"
          />
          {loading && <p>Loading...</p>}
          {!loading && regionSuggestions.length > 0 && (
            <datalist id="regionSuggestions">
              {regionSuggestions.map((suggestion) => (
                <option key={suggestion} value={suggestion} />
              ))}
            </datalist>
          )}
        </label>

        <label>
          Max prijs: 
          <input
            type="number"
            name="price"
            value={filter.price}
            onChange={handleFilterChange}
          />
        </label>

        <label>
          <select
            name="propertyType"
            value={filter.propertyType}
            onChange={handleFilterChange}
          >
            <option value="" disabled>selecteer een type</option>
            <option value="all" selected>Alle types</option>
            <option value="appartement">Appartement</option>
            <option value="huis">Huis</option>
          </select>
        </label>

        <label>
          Aantal slaapkamers:
          <input
            type="number"
            name="bedrooms"
            value={filter.bedrooms}
            onChange={handleFilterChange}
          />
        </label>

        <button onClick={handleSearch}>Zoek</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
