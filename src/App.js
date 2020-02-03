import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './components/LandingPage/LandingPage';

import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import UserProfile from './containers/UserProfile/UserProfile';
import ProfileForm from './containers/ProfileForm/ProfileForm';
import firebase from './firebase/firestoreConfig';

const theme = createMuiTheme();

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser((user: null));
        console.log('no users');
      }
    });
  });

  return firebaseUser !== false ? (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/profile-form" component={ProfileForm} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  ) : (
    // TODO: Add Loading Spinner
    <div>Loading...</div>
  );
}

export default App;
