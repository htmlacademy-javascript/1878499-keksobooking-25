function getRandomInRange(minNumber, maxNumber) {
  if (minNumber >= 0 && maxNumber >= minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  } else {
    return 'Invalid Input Parameters';
  }
}
getRandomInRange(0, 3);

function randomInteger(minNumber, maxNumber, numOfDecimalPlaces) {
  if (minNumber >= 0 && maxNumber >= minNumber) {
    const range = (maxNumber - minNumber);
    return Number(range + 1 / Math.pow(10, numOfDecimalPlaces + 1)).toFixed(numOfDecimalPlaces);
  }
  return 'Invalid Input Parameters';
}
randomInteger(11, 15.6, 1);

/*Переделал вторую функцию под тернарный оператор, но не могу понять в чем ошибка отрицательное число выводит функция */
function returnRandomNum(minNumber, maxNumber, numOfDecimalPlaces) {
  const range = (minNumber - maxNumber);
  return (minNumber >= 0 && maxNumber >= minNumber) ?
    Number (range + 1 / Math.pow(10, numOfDecimalPlaces + 1)).toFixed(numOfDecimalPlaces) : 'Invalid Input Parameters';
}
returnRandomNum(10.5, 14.6, 1);
