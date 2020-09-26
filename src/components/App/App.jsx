import React from 'react';

import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';
import Buttons from '../Buttons/buttons';

import TicketList from '../Ticketlist/TicketList';

const App = () => {
  return (
    <>
      <Logo />
      <div className="content">
        <Filters />
        <div className="content__buttons">
          <Buttons />
          <TicketList />
        </div>
      </div>
    </>
  );
};

export default App;
