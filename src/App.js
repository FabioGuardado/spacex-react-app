import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import Header from './components/Header';
import Menu from './components/Menu';
import Error from './components/Error';
import Footer from './components/UI/Footer';

//Pages
import Details from './components/Details';
import Launches from './components/Launches';

function App() {
  return (
    <Fragment>
        <Router>

            <Header />

            <div className="container">
              <Switch>
                  <Route exact path="/" component={Menu} />
                  <Route path="/details/:project/:id" component={Details} />
                  <Route exact path="/launches" component={Launches}/>
                  <Route path="*" component={Error} />
              </Switch>
            </div>

            <Footer/>
        </Router>
    </Fragment>
  );
}

export default App;