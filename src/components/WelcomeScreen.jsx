import React, { useContext, Redirect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const WelcomeScreen = () => {
  console.log('entrou')
  const { isLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    <Redirect to="/login"/>
  };

  /*if (!isLoggedIn) {
    <Redirect to="/login"/>
  }*/

  return (
    <div>
      <h2>Welcome Screen</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomeScreen;