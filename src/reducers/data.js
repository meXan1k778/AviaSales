const initialState = {
  tickets: [],
  searchId: '',
  sortValue: '',
  isAllLoaded: false,
  isError: false,
};

const dataReducer = (state = initialState, action) => {
  const { tickets } = state;

  if (action.type === 'ERROR') {
    return { ...state, isError: true };
  }

  if (action.type === 'tickets_loaded') {
    return { ...state, tickets: [...tickets, ...action.payload] };
  }

  if (action.type === 'ALL_TICKETS_LOADED') {
    return { ...state, isAllLoaded: true };
  }

  if (action.type === 'cheap') {
    const sortedTickets = tickets.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });

    return { ...state, tickets: sortedTickets, sortValue: 'cheap' };
  }

  if (action.type === 'fast') {
    const sortedTickets = tickets.sort((a, b) => {
      if (a.segments[0].duration > b.segments[0].duration) {
        return 1;
      }
      if (a.segments[0].duration < b.segments[0].duration) {
        return -1;
      }
      return 0;
    });

    return { ...state, tickets: sortedTickets, sortValue: 'fast' };
  }

  return state;
};

export default dataReducer;
