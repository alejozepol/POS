import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../container/Login';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
