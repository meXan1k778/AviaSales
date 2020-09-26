import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TicketStore from './services/ticketstore';
import { TicketProvider } from './components/ticketstore-context/ticketstore-context';

import App from './components/App/App';

import './style.scss';

const ticketStore = new TicketStore();

ReactDOM.render(
  <Provider store={store}>
    <TicketProvider value={ticketStore}>
      <App />
    </TicketProvider>
  </Provider>,
  document.getElementById('root')
);
