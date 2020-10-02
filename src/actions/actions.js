import TicketService from '../services/ticketservice';

const ticketService = new TicketService();

const ticketsLoaded = (array) => {
  return {
    type: 'tickets_loaded',
    payload: array,
  };
};

const allTicketsLoaded = () => {
  return {
    type: 'ALL_TICKETS_LOADED',
  };
};

const setCheapSort = () => {
  return {
    type: 'cheap',
  };
};

const setFastSort = () => {
  return {
    type: 'fast',
  };
};

const setAllTransfer = () => {
  return {
    type: 'ALL_FILTER',
  };
};

const setSingleTransfer = () => {
  return {
    type: 'ONE_FILTER',
  };
};

const setDoubleTransfer = () => {
  return {
    type: 'TWO_FILTER',
  };
};

const setTrippleTransfer = () => {
  return {
    type: 'TRHEE_FILTER',
  };
};

const setZeroTransfer = () => {
  return {
    type: 'ZERO_FILTER',
  };
};

const setError = () => {
  return {
    type: 'ERROR',
  };
};

const loadData = () => {
  return (dispatch) => {
    ticketService
      .getSessionId()
      .then((res) =>
        ticketService
          .getTickets(res.searchId)
          .then((data) => {
            dispatch(ticketsLoaded(data.tickets));
            return res.searchId;
          })
          .catch(() => setError())
      )
      .then((id) => ticketService.circleFetch(id, ticketsLoaded, allTicketsLoaded, dispatch))
      .catch(() => setError());
  };
};

export {
  ticketsLoaded,
  setCheapSort,
  setFastSort,
  setZeroTransfer,
  setAllTransfer,
  setSingleTransfer,
  setDoubleTransfer,
  setTrippleTransfer,
  allTicketsLoaded,
  setError,
  loadData,
};
