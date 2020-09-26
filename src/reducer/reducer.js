const initialState = {
  tickets: [],
  visibleTickets: [],
  sortValue: '',
  isAll: false,
  isZero: false,
  isOne: false,
  isTwo: false,
  isThree: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'tickets_loaded') {
    return { ...state, tickets: action.payload, visibleTickets: action.payload };
  }

  if (action.type === 'cheap') {
    const sortedTickets = state.visibleTickets.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });

    return { ...state, visibleTickets: sortedTickets, sortValue: 'cheap' };
  }

  if (action.type === 'FILTER') {
    let zeroTrigger = action.payload === 'zero' ? !state.isZero : state.isZero;
    let singleTrigger = action.payload === 'one' ? !state.isOne : state.isOne;
    let doubleTrigger = action.payload === 'two' ? !state.isTwo : state.isTwo;
    let trippleTrigger = action.payload === 'three' ? !state.isThree : state.isThree;

    zeroTrigger = action.payload === 'all' ? !state.isAll : zeroTrigger;
    singleTrigger = action.payload === 'all' ? !state.isAll : singleTrigger;
    doubleTrigger = action.payload === 'all' ? !state.isAll : doubleTrigger;
    trippleTrigger = action.payload === 'all' ? !state.isAll : trippleTrigger;

    const allTrigger =
      action.payload === 'all' ||
      (zeroTrigger && singleTrigger && doubleTrigger && trippleTrigger) ||
      (state.isAll && !(zeroTrigger && singleTrigger && doubleTrigger && trippleTrigger))
        ? !state.isAll
        : state.isAll;

    const zeroFilter = () => {
      return zeroTrigger ? state.tickets.filter((item) => item.segments[0].stops.length === 0) : [];
    };

    const singleFilter = () => {
      return singleTrigger ? state.tickets.filter((item) => item.segments[0].stops.length === 1) : [];
    };

    const doubleFilter = () => {
      return doubleTrigger ? state.tickets.filter((item) => item.segments[0].stops.length === 2) : [];
    };

    const trippleFilter = () => {
      return trippleTrigger ? state.tickets.filter((item) => item.segments[0].stops.length === 3) : [];
    };

    const result = [...zeroFilter(), ...singleFilter(), ...doubleFilter(), ...trippleFilter()];
    return {
      ...state,
      visibleTickets: result,
      isZero: zeroTrigger,
      isOne: singleTrigger,
      isTwo: doubleTrigger,
      isThree: trippleTrigger,
      isAll: allTrigger,
    };
  }

  if (action.type === 'fast') {
    const sortedTickets = state.visibleTickets.sort((a, b) => {
      if (a.segments[0].duration > b.segments[0].duration) {
        return 1;
      }
      if (a.segments[0].duration < b.segments[0].duration) {
        return -1;
      }
      return 0;
    });

    return { ...state, visibleTickets: sortedTickets, sortValue: 'fast' };
  }

  return state;
};

export default reducer;
