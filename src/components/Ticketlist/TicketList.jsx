/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Ticket from '../Ticket/Ticket';
import { ticketsLoaded, setCheapSort } from '../actions/actions';

import withTicketStore from '../hoc/with-ticketstore';

class TicketList extends React.Component {
  componentDidMount() {
    const data = this.props.ticketStore.getTickets();
    this.props.ticketsLoaded(data);
  }

  render() {
    const elements = this.props.visibleTickets.map((item) => <Ticket data={item} key={item.price} />);
    return elements;
  }
}

const mapStateToProps = (state) => {
  return {
    sortValue: state.sortValue,
    visibleTickets: state.visibleTickets,
  };
};

const mapDispatchToProps = {
  ticketsLoaded,
  setCheapSort,
};

export default withTicketStore()(connect(mapStateToProps, mapDispatchToProps)(TicketList));
