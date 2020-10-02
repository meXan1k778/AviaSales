const allFilter = (array, filters) => {
  const zeroFilter = () => {
    return filters.isZero ? array.filter((item) => item.segments[0].stops.length === 0) : [];
  };

  const singleFilter = () => {
    return filters.isOne ? array.filter((item) => item.segments[0].stops.length === 1) : [];
  };

  const doubleFilter = () => {
    return filters.isTwo ? array.filter((item) => item.segments[0].stops.length === 2) : [];
  };

  const trippleFilter = () => {
    return filters.isThree ? array.filter((item) => item.segments[0].stops.length === 3) : [];
  };
  return [...zeroFilter(), ...singleFilter(), ...doubleFilter(), ...trippleFilter()];
};

export default allFilter;
