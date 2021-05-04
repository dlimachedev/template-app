import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/style.scss';

const loading = (
  <div className="loading">
    <div className="centered">
      <div className="blob-1"></div>
      <div className="blob-2"></div>
    </div>
  </div>
)

// Containers
const Layout = React.lazy(() => import('./layout/index'));

// Pages
const Login = React.lazy(() => import('./pages/login/Login'));
const Register = React.lazy(() => import('./pages/register/Register'));
const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./pages/page500/Page500'));

const App = () => {
  return (
    <Router>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </Router>
  );
}

export default App;
