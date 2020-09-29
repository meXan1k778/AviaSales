/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import Ticket from '../Ticket/Ticket';
import { ticketsLoaded, setCheapSort, allTicketsLoaded, setError } from '../actions/actions';

import withTicketStore from '../hoc/with-ticketstore';
import 'antd/dist/antd.css';

class TicketList extends React.Component {
  componentDidMount() {
    const {
      ticketsLoaded,
      allTicketsLoaded,
      setError,
      ticketStore: { getSessionId, getTickets },
    } = this.props;

    function circleFetch(id) {
      getTickets(id)
        .then((data) => {
          ticketsLoaded(data.tickets);
          if (!data.stop) {
            return circleFetch(id);
          }
          return allTicketsLoaded();
        })
        .catch(() => circleFetch(id));
    }

    getSessionId()
      .then((res) => {
        getTickets(res.searchId)
          .then((data) => ticketsLoaded(data.tickets))
          .catch(() => setError());
        return res.searchId;
      })
      .then((id) => circleFetch(id))
      .catch(() => setError());
  }

  render() {
    const elements = this.props.visibleTickets
      .slice(0, 5)
      .map((item) => <Ticket data={item} key={item.segments[0].date} />);

    const loader = this.props.isAllLoaded || this.props.isError || <Spin />;

    const content =
      this.props.isError && !this.props.tickets ? (
        <Alert message="Error" description="Cant load data... Reload page or try later" type="error" showIcon />
      ) : (
        elements
      );
    return (
      <>
        {loader}
        {content}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortValue: state.sortValue,
    visibleTickets: state.visibleTickets,
    isAllLoaded: state.isAllLoaded,
    isError: state.isError,
  };
};

const mapDispatchToProps = {
  ticketsLoaded,
  setCheapSort,
  allTicketsLoaded,
  setError,
};

export default withTicketStore()(connect(mapStateToProps, mapDispatchToProps)(TicketList));
