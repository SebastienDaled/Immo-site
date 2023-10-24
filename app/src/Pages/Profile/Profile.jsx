import React from 'react';
import { Link, Route } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>

      <nav>
        <ul>
          <Link to="/profile/gegevens"> Jouw Gegevens</Link>
          <Link to="/profile/favoieten"> Jouw Favoieten</Link>
        </ul>
      </nav>
      
    </div>
  );
};

export default Profile;