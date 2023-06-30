import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory, Redirect } from 'react-router-dom';

const Login = () => {
  console.log('Login')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const redirectToWelcome = () => {
    <Redirect to="/welcome"/>
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => {
        handleLogin();
        redirectToWelcome();
      }}>Login</button>
    </div>
  );
};

export default Login;