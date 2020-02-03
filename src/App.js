import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';

const theme = createMuiTheme();

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
