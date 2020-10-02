/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import Ticket from '../Ticket/Ticket';
import { ticketsLoaded, setCheapSort, allTicketsLoaded, setError, loadData } from '../../actions/actions';
import allFilter from '../../selectors/selector';

import withTicketService from '../Hoc/With-ticketstore';
import 'antd/dist/antd.css';

class TicketList extends React.Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const { tickets, isAllLoaded, isError } = this.props.dataReducer;
    const elements = allFilter(tickets, this.props.filtersReducer)
      .slice(0, 5)
      .map((item) => <Ticket data={item} key={item.segments[0].date} />);

    const loader = isAllLoaded || isError || <Spin />;

    const content =
      isError && tickets.length === 0 ? (
        <Alert message="Error" description="Cant load data... Reload page or try later" type="error" showIcon />
      ) : (
        elements
      );

    if (content.length === 0) return <div>No results on your request...</div>;
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
    dataReducer: {
      sortValue: state.dataReducer.sortValue,
      tickets: state.dataReducer.tickets,
      isAllLoaded: state.dataReducer.isAllLoaded,
      isError: state.dataReducer.isError,
    },
    filtersReducer: state.filtersReducer,
  };
};

const mapDispatchToProps = {
  ticketsLoaded,
  setCheapSort,
  allTicketsLoaded,
  setError,
  loadData,
};

export default withTicketService()(connect(mapStateToProps, mapDispatchToProps)(TicketList));
