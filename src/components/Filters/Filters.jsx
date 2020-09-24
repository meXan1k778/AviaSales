import React from 'react';

const Filters = () => {
  return (
    <div className="content__filters">
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label className="content__label">
        <input type="checkbox" /> Все
      </label>
      <label className="content__label">
        <input type="checkbox" /> Без пересадок
      </label>
      <label className="content__label">
        <input type="checkbox" /> 1 пересадка
      </label>
      <label className="content__label">
        <input type="checkbox" /> 2 пересадки
      </label>
      <label className="content__label">
        <input type="checkbox" /> 3 пересадки
      </label>
    </div>
  );
};

export default Filters;
