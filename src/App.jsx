import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/welcome" /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/welcome" /> : <Login />}
        </Route>
        <Route exact path="/welcome">
          {!isLoggedIn ? <Redirect to="/login" /> : <WelcomeScreen />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App;