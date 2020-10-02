import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TicketService from './services/ticketservice';
import { TicketProvider } from './components/Ticketstore-context/Ticketstore-context';

import App from './components/App/App';

import './style.scss';

const ticketService = new TicketService();

ReactDOM.render(
  <Provider store={store}>
    <TicketProvider value={ticketService}>
      <App />
    </TicketProvider>
  </Provider>,
  document.getElementById('root')
);
