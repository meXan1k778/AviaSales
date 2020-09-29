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
    type: 'FILTER',
    payload: 'all',
  };
};

const setSingleTransfer = () => {
  return {
    type: 'FILTER',
    payload: 'one',
  };
};

const setDoubleTransfer = () => {
  return {
    type: 'FILTER',
    payload: 'two',
  };
};

const setTrippleTransfer = () => {
  return {
    type: 'FILTER',
    payload: 'three',
  };
};

const setZeroTransfer = () => {
  return {
    type: 'FILTER',
    payload: 'zero',
  };
};

const setSearchId = (id) => {
  return {
    type: 'SEARCH_ID',
    payload: id,
  };
};

const setError = () => {
  return {
    type: 'ERROR',
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
  setSearchId,
  allTicketsLoaded,
  setError,
};
