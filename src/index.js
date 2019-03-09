import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routers/App';
import configureStore from './config/configureStore';
import { startSetHabits } from './reducers/habitsReducers';
import { visibleHabits } from './reducers/rootReducers';
import './config/fbConfig';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import { firebase } from './config/fbConfig';


const store = configureStore();

const prov = (
  <Provider store={store} >
    <App />
  </Provider>
);



ReactDOM.render(prov, document.getElementById('root'));

store.dispatch(startSetHabits()).then(() => {
  ReactDOM.render(prov, document.getElementById('root'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("log in");
  } else {
    console.log("log out");
  }
});

module.hot.accept();
