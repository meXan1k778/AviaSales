import React from 'react';

import { TicketConsumer } from '../Ticketstore-context/Ticketstore-context';

const withTicketService = () => (Wrapped) => {
  return (props) => {
    return (
      <TicketConsumer>
        {(ticketService) => {
          return <Wrapped {...props} ticketService={ticketService} />;
        }}
      </TicketConsumer>
    );
  };
};

export default withTicketService;
