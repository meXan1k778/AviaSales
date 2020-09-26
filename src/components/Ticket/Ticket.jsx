/* eslint-disable react/prop-types */
import React from 'react';

import icon from '../../img/S7logo.png';

const Ticket = ({ data }) => {
  const { price, segments } = data;
  return (
    <div className="content__ticket">
      <div className="content__row">
        <p className="content__row--price">{price} Р</p>
        <img className="content__row--img" src={icon} alt="no img" />
      </div>
      <div className="content__row">
        <div className="content__description">
          <p className="content__description--title">{`${segments[0].origin} - ${segments[0].destination}`}</p>
          <p className="content__description--text">10:45 - 8:00</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">В ПУТИ</p>
          <p className="content__description--text">{segments[0].duration} мин</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">{segments[0].stops.length} ПЕРЕСАДКИ</p>
          <p className="content__description--text">GFH</p>
        </div>
      </div>
      <div className="content__row">
        <div className="content__description">
          <p className="content__description--title">{`${segments[1].origin} - ${segments[1].destination}`}</p>
          <p className="content__description--text">10:45 - 8:00</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">В ПУТИ</p>
          <p className="content__description--text">{segments[1].duration} мин</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">{segments[1].stops.length} ПЕРЕСАДКИ</p>
          <p className="content__description--text">{segments[1].stops.join(',')}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
