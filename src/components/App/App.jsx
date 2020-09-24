import React from 'react';

import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';

import icon from '../../img/S7logo.png';

const App = () => {
  return (
    <>
      <Logo />
      <div className="content">
        <Filters />
        <div className="content__buttons">
          <button type="button" className="content__first-button">
            САМЫЙ ДЕШЕВЫЙ
          </button>
          <button type="button" className="content__second-button">
            САМЫЙ БЫСТРЫЙ
          </button>
          <div className="content__ticket">
            <div className="content__row">
              <p className="content__row--price">3700 Р</p>
              <img className="content__row--img" src={icon} alt="no img" />
            </div>
            <div className="content__row">
              <div className="content__description">
                <p className="content__description--title">MSK-HKT</p>
                <p className="content__description--text">10:45 - 8:00</p>
              </div>
              <div className="content__description">
                <p className="content__description--title">В ПУТИ</p>
                <p className="content__description--text">21ч 40 мин</p>
              </div>
              <div className="content__description">
                <p className="content__description--title">2 ПЕРЕСАДКИ</p>
                <p className="content__description--text">GFH</p>
              </div>
            </div>
            <div className="content__row">
              <div className="content__description">
                <p className="content__description--title">MSK-HKT</p>
                <p className="content__description--text">10:45 - 8:00</p>
              </div>
              <div className="content__description">
                <p className="content__description--title">В ПУТИ</p>
                <p className="content__description--text">21ч 40 мин</p>
              </div>
              <div className="content__description">
                <p className="content__description--title">1 ПЕРЕСАДКА</p>
                <p className="content__description--text">GTH, GYW</p>
              </div>
            </div>
          </div>
          <div className="content__ticket">ticket</div>
        </div>
      </div>
    </>
  );
};

export default App;
