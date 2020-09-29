/* eslint-disable react/prop-types */
import React from 'react';
import formatDate from '../../utils/utils';

const Ticket = ({ data }) => {
  const { price, segments, carrier } = data;

  const timeFront = formatDate(new Date(segments[0].duration * 60000));
  const timeBack = formatDate(new Date(segments[1].duration * 60000));

  const arrivalTime = new Date(segments[0].date);
  // console.log(segments[0].date);
  // console.log(formatDate(arrivalTime));

  return (
    <div className="content__ticket">
      <div className="content__row">
        <p className="content__row--price">{price} Р</p>
        <img className="content__row--img" src={`http://pics.avs.io/99/36/${carrier}.png`} alt="no img" />
      </div>
      <div className="content__row">
        <div className="content__description">
          <p className="content__description--title">{`${segments[0].origin} - ${segments[0].destination}`}</p>
          <p className="content__description--text">10:45 - 8:00</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">В ПУТИ</p>
          <p className="content__description--text">{timeFront}</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">{segments[0].stops.length} ПЕРЕСАДКИ</p>
          <p className="content__description--text">{segments[0].stops.join(',')}</p>
        </div>
      </div>
      <div className="content__row">
        <div className="content__description">
          <p className="content__description--title">{`${segments[1].origin} - ${segments[1].destination}`}</p>
          <p className="content__description--text">10:45 - 8:00</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">В ПУТИ</p>
          <p className="content__description--text">{timeBack}</p>
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
