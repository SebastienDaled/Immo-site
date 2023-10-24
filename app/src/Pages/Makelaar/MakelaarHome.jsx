import React from 'react';
import { Link } from 'react-router-dom';

const MakelaarHome = () => {
  return (
    <div>
      <Link to="/makelaar/add">voeg pand toe</Link>
    </div>
  );
};

export default MakelaarHome;