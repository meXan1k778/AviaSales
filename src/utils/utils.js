function formatDate(date) {
  let mm = date.getHours();
  if (mm < 10) mm = `0${mm}`;

  let ss = date.getMinutes();
  if (ss < 10) ss = `0${ss}`;

  return `${mm}ч ${ss}м`;
}

export default formatDate;
