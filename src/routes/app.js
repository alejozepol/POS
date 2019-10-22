import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../container/Login';
import Register from '../container/Register';
import Caja from '../container/Caja';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route exact path='/caja' component={Caja} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
