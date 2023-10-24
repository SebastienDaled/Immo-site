import React, { useEffect, useState } from 'react';
import Input from '../../../components/Global/Input/Input';
import Textarea from '../../../components/Global/Textarea/Textarea';
import Button from '../../../components/Global/Button/Button';

const PandForm =({onSubmit, isDisabled, label, initialData = {}}) => {
  const [data, setData] = useState({
    soort: "Huis",
    type: "te koop",
    prijs: "",
    oppervlakte: "",
    kamers: "",
    address_street: "",
    address_number: "",
    address_postalcode: "",
    address_city: "",
    beschrijving: "",
    image: "",
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
      <label htmlFor="soort">Soort</label>
      {/* a select for soort */}
      <select name="soort" value={data.soort} onChange={handleChange}>
        <option value="Huis" selected>Huis</option>
        <option value="Appartement">Appartement</option>
        <option value="Grond">Grond</option>
      </select>

      <label htmlFor="type">Type</label>
      {/* a select for type */}
      <select name="type" value={data.type} onChange={handleChange}>
        <option value="te koop" selected>Koop</option>
        <option value="te huur">Huur</option>
      </select>
      <label htmlFor="prijs">Prijs</label>
      <Input name="prijs" value={data.prijs} onChange={handleChange} type="number" />
      <label htmlFor="oppervlakte">Oppervlakte</label>
      <Input name="oppervlakte" value={data.oppervlakte} onChange={handleChange} type="number" />
      <label htmlFor="kamers">Kamers</label>
      <Input name="kamers" value={data.kamers} onChange={handleChange} type="number"/>
      <label htmlFor="address_street">Straat</label>
      <Input name="address_street" value={data.address_street} onChange={handleChange} />
      <label htmlFor="address_number">Nummer</label>
      <Input name="address_number" value={data.address_number} onChange={handleChange} />
      <label htmlFor="address_postalcode">Postcode</label>
      <Input name="address_postalcode" value={data.address_postalcode} onChange={handleChange} type="number" />
      <label htmlFor="address_city">Stad</label>
      <Input name="address_city" value={data.address_city} onChange={handleChange} />
      <label htmlFor="beschrijving">Beschrijving</label>
      <Textarea name="beschrijving" value={data.beschrijving} onChange={handleChange} />
      <label htmlFor="image">Afbeelding</label>
      <Input name="image" value={data.image} onChange={handleChange} type="file" />
      <br />
      <Button type="submit" disabled={isDisabled}>
        {label}
      </Button>
    </form>
  );
};

export default PandForm;