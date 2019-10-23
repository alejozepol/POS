import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/app';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  cart: [
    {
      'id': '1',
      'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
      'title': 'Camiseta',
      'price': 25,
      'description': 'bla bla bla bla bla',
      'amount': 1,
      'priceTotal': 4,
    },
    {
      'id': '3',
      'image': 'https://arepa.s3.amazonaws.com/mug.png',
      'title': 'Mug',
      'price': 10,
      'description': 'bla bla bla bla bla',
      'amount': 1,
      'priceTotal': 4,
    },
    {
      'id': '4',
      'image': 'https://arepa.s3.amazonaws.com/pin.png',
      'title': 'Pin',
      'price': 4,
      'description': 'bla bla bla bla bla',
      'amount': 1,
      'priceTotal': 4,
    },
  ],
  products: [
    {
      'id': '1',
      'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
      'title': 'Camiseta',
      'price': 25,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '3',
      'image': 'https://arepa.s3.amazonaws.com/mug.png',
      'title': 'Mug',
      'price': 10,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '4',
      'image': 'https://arepa.s3.amazonaws.com/pin.png',
      'title': 'Pin',
      'price': 4,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '5',
      'image': 'https://arepa.s3.amazonaws.com/stickers1.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '6',
      'image': 'https://arepa.s3.amazonaws.com/stickers2.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '7',
      'image': 'https://arepa.s3.amazonaws.com/hoodie.png',
      'title': 'Hoodie',
      'price': 35,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '8',
      'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
      'title': 'Camiseta',
      'price': 25,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '9',
      'image': 'https://arepa.s3.amazonaws.com/mug.png',
      'title': 'Mug',
      'price': 10,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '10',
      'image': 'https://arepa.s3.amazonaws.com/pin.png',
      'title': 'Pin',
      'price': 4,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '11',
      'image': 'https://arepa.s3.amazonaws.com/stickers1.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '12',
      'image': 'https://arepa.s3.amazonaws.com/stickers2.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '13',
      'image': 'https://arepa.s3.amazonaws.com/hoodie.png',
      'title': 'Hoodie',
      'price': 35,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '14',
      'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
      'title': 'Camiseta',
      'price': 25,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '15',
      'image': 'https://arepa.s3.amazonaws.com/mug.png',
      'title': 'Mug',
      'price': 10,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '16',
      'image': 'https://arepa.s3.amazonaws.com/pin.png',
      'title': 'Pin',
      'price': 4,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '17',
      'image': 'https://arepa.s3.amazonaws.com/stickers1.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '18',
      'image': 'https://arepa.s3.amazonaws.com/stickers2.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'bla bla bla bla bla',
    },
    {
      'id': '19',
      'image': 'https://arepa.s3.amazonaws.com/hoodie.png',
      'title': 'Hoodie',
      'price': 35,
      'description': 'bla bla bla bla bla',
    },
  ],
};

const store = createStore(reducer, initialState, composeEnhacers());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
