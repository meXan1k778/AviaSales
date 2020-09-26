import React from 'react';

import { TicketConsumer } from '../ticketstore-context/ticketstore-context';

const withTicketStore = () => (Wrapped) => {
  return (props) => {
    return (
      <TicketConsumer>
        {(ticketStore) => {
          return <Wrapped {...props} ticketStore={ticketStore} />;
        }}
      </TicketConsumer>
    );
  };
};

export default withTicketStore;
