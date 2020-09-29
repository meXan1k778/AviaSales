function formatDate(date) {
  let mm = date.getHours();
  if (mm < 10) mm = `0${mm}`;

  let ss = date.getMinutes();
  if (ss < 10) ss = `0${ss}`;

  return `${mm}ч ${ss}м`;
}

function formatDateOnlyDigits(date) {
  let mm = date.getHours();
  if (mm < 10) mm = `0${mm}`;

  let ss = date.getMinutes();
  if (ss < 10) ss = `0${ss}`;

  return `${mm}:${ss}`;
}

function changeCounter(number) {
  if (number === 0) return 'БЕЗ ПЕРЕСАДОК';
  if (number === 1) return '1 ПЕРЕСАДКА';
  return `${number} ПЕРЕСАДКИ`;
}

export { formatDateOnlyDigits, formatDate, changeCounter };
