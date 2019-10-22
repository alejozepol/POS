import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../container/Login';
import Register from '../container/Register';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/registro' component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
