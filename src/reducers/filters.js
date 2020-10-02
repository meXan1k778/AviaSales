const initialState = {
  isAll: true,
  isZero: true,
  isOne: true,
  isTwo: true,
  isThree: true,
};

const filtersReducer = (state = initialState, action) => {
  const { isOne, isZero, isTwo, isThree, isAll } = state;

  if (action.type === 'ALL_FILTER') {
    return {
      isAll: !isAll,
      isZero: !isAll,
      isOne: !isAll,
      isTwo: !isAll,
      isThree: !isAll,
    };
  }

  if (action.type === 'ZERO_FILTER') {
    if ((isOne && isTwo && isThree && !isZero) || (isOne && isTwo && isThree && isZero)) {
      return { ...state, isZero: !isZero, isAll: !isAll };
    }
    return { ...state, isZero: !isZero };
  }

  if (action.type === 'ONE_FILTER') {
    if ((!isOne && isTwo && isThree && isZero) || (isOne && isTwo && isThree && isZero)) {
      return { ...state, isOne: !isOne, isAll: !isAll };
    }
    return { ...state, isOne: !isOne };
  }

  if (action.type === 'TWO_FILTER') {
    if ((isOne && !isTwo && isThree && isZero) || (isOne && isTwo && isThree && isZero)) {
      return { ...state, isTwo: !isTwo, isAll: !isAll };
    }
    return { ...state, isTwo: !isTwo };
  }

  if (action.type === 'TRHEE_FILTER') {
    if ((isOne && isTwo && !isThree && isZero) || (isOne && isTwo && isThree && isZero)) {
      return { ...state, isThree: !isThree, isAll: !isAll };
    }
    return { ...state, isThree: !isThree };
  }

  return state;
};

export default filtersReducer;
