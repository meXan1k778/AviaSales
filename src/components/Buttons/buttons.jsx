/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { setCheapSort, setFastSort } from '../actions/actions';

import './buttons.scss';

const Buttons = ({ setCheapSort, setFastSort }) => {
  return (
    <>
      <button type="button" className="content__first-button" onClick={setCheapSort}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className="content__second-button" onClick={setFastSort}>
        САМЫЙ БЫСТРЫЙ
      </button>
    </>
  );
};

const mapStatetoProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  setCheapSort,
  setFastSort,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Buttons);
