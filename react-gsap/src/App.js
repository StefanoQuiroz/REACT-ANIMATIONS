import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './view/Home/Home';
import Oportunidades from './view/Oportunidades/Oportunidades';
import Soluciones from './view/Soluciones/Soluciones';
import Contacto from './view/Contacto/Contacto';
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path={`/`}>
                  <Home/>
                </Route>
                <Route path={`/oportunidades`}>
                  <Oportunidades/>
                </Route>
                <Route path={`/soluciones`}>
                  <Soluciones/>
                </Route>
                <Route path={`/contacto`}>
                  <Contacto/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>        
      </div>
    </Router>
  );
}

export default App;
