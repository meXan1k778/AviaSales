/* eslint-disable react/prop-types */
import React from 'react';
import { formatDate, formatDateOnlyDigits, changeCounter } from '../../utils/utils';

import './ticket.scss';

const Ticket = ({ data }) => {
  const { price, segments, carrier } = data;

  const timeFront = formatDate(new Date(segments[0].duration * 60000));
  const timeBack = formatDate(new Date(segments[1].duration * 60000));

  const departureTime = (num) => formatDateOnlyDigits(new Date(segments[num].date));
  const arrivalTime = (num) =>
    formatDateOnlyDigits(
      new Date(
        new Date(segments[num].date).getTime() + new Date(segments[num].duration * 60000).getTime() + 3600000 * 3
      )
    );

  return (
    <div className="content__ticket">
      <div className="content__row">
        <p className="content__row--price">{price} Р</p>
        <img className="content__row--img" src={`http://pics.avs.io/99/36/${carrier}.png`} alt="no img" />
      </div>
      <div className="content__row">
        <div className="content__description">
          <p className="content__description--title">{`${segments[0].origin} - ${segments[0].destination}`}</p>
          <p className="content__description--text">
            {departureTime(0)} - {arrivalTime(0)}
          </p>
        </div>
        <div className="content__description">
          <p className="content__description--title">В ПУТИ</p>
          <p className="content__description--text">{timeFront}</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">{changeCounter(segments[0].stops.length)}</p>
          <p className="content__description--text">{segments[0].stops.join(',')}</p>
        </div>
      </div>
      <div className="content__row">
        <div className="content__description">
          <p className="content__description--title">{`${segments[1].origin} - ${segments[1].destination}`}</p>
          <p className="content__description--text">
            {departureTime(1)} - {arrivalTime(1)}
          </p>
        </div>
        <div className="content__description">
          <p className="content__description--title">В ПУТИ</p>
          <p className="content__description--text">{timeBack}</p>
        </div>
        <div className="content__description">
          <p className="content__description--title">{changeCounter(segments[1].stops.length)}</p>
          <p className="content__description--text">{segments[1].stops.join(',')}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
