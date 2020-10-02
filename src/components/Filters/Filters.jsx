/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import {
  setZeroTransfer,
  setAllTransfer,
  setSingleTransfer,
  setDoubleTransfer,
  setTrippleTransfer,
} from '../../actions/actions';

import './filter.scss';

const Filters = ({
  filtersReducer,
  setZeroTransfer,
  setAllTransfer,
  setSingleTransfer,
  setDoubleTransfer,
  setTrippleTransfer,
}) => {
  return (
    <div className="content__filters">
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label className="content__label">
        <input type="checkbox" onChange={setAllTransfer} checked={filtersReducer.isAll} /> Все
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setZeroTransfer} checked={filtersReducer.isZero} /> Без пересадок
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setSingleTransfer} checked={filtersReducer.isOne} /> 1 пересадка
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setDoubleTransfer} checked={filtersReducer.isTwo} /> 2 пересадки
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setTrippleTransfer} checked={filtersReducer.isThree} /> 3 пересадки
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filtersReducer: state.filtersReducer,
  };
};

const mapDispatchToProps = {
  setZeroTransfer,
  setAllTransfer,
  setSingleTransfer,
  setDoubleTransfer,
  setTrippleTransfer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
