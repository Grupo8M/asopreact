// import logo from './logo.svg';
import '../styles/App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Navegacion } from '../layouts/Navegacion';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Partidos } from '../pages/Partidos'
import { Login } from '../pages/Login';
import { Registro } from '../pages/Registro';



import { RutaPrivada } from './RutaPrivada';
import { Provider } from 'react-redux';
import { store } from '../store';
import {comprobarToken} from '../conection/helpers/comprobarToken'

import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')


comprobarToken()


function App() {
  
  return (
    <Provider store={store}>

      <BrowserRouter>
        <div>
          <Navegacion/>
        </div>
        <Container>
          <Switch>
            <Route exact path='/' component={Partidos}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/registro' component={Registro}></Route>
            
          </Switch>
        </Container>
        
      </BrowserRouter>
    </Provider>

  );
}

export default App;
