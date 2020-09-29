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
} from '../actions/actions';

const Filters = ({
  isZero,
  isAll,
  isOne,
  isTwo,
  isThree,
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
        <input type="checkbox" onChange={setAllTransfer} checked={isAll} /> Все
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setZeroTransfer} checked={isZero} /> Без пересадок
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setSingleTransfer} checked={isOne} /> 1 пересадка
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setDoubleTransfer} checked={isTwo} /> 2 пересадки
      </label>
      <label className="content__label">
        <input type="checkbox" onChange={setTrippleTransfer} checked={isThree} /> 3 пересадки
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAll: state.isAll,
    isZero: state.isZero,
    isOne: state.isOne,
    isTwo: state.isTwo,
    isThree: state.isThree,
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
