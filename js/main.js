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
/*
Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Будет использоваться для генерации временных географических координат в следующем задании. Пример использования функции:

  имя_функции(от, до, количество_знаков_после_запятой); // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему. Не забудьте, что в случае с дробными числами диапазон может быть в десятых, сотых, тысячных и т. д. долях. Например, 1.1, 1.2 — корректный диапазон.
*/
randomInteger(11, 15.6, 1);


function returnRandomNum(minNumber, maxNumber, numOfDecimalPlaces) {
  const range = (minNumber - maxNumber);
  return (minNumber >= 0 && maxNumber >= minNumber) ?
    range + 1 / Math.pow(10, numOfDecimalPlaces + 1).toFixed(numOfDecimalPlaces) : 'Invalid Input Parameters';
}
returnRandomNum(10.5, 14.6, 1);
