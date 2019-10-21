import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from '../components/helloWorld';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={HelloWorld} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
