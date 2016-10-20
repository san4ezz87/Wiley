import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import './styles/app.css';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = configureStore(persistedState);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);