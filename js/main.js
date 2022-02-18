
function stringLengthNumber(stringOfUser, maxLength) {
  const textLength = stringOfUser.length;
  return textLength <= maxLength;
}
stringLengthNumber(' Cегодня хорошая погода ', 15);

/* randomInteger, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
  функция(от, до,numOfDecimalPlaces - количество_знаков_после_запятой);
  Необходимо найти число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
  диапазон может быть только положительный, включая ноль.*/

/*придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
    Не забудьте, что в случае с дробными числами
  диапазон может быть в десятых, сотых, тысячных и т. д. долях. Например, 1.1, 1.2 — корректный диапазон.*/

function randomInteger(minNumber, maxNumber, numOfDecimalPlaces) {
  if (minNumber >= 0 && maxNumber >= minNumber) {
    const range = (maxNumber - minNumber);
    return Number(range + 1 / Math.pow(10, numOfDecimalPlaces + 1)).toFixed(numOfDecimalPlaces);
  }
  return 'Invalid Input Parameters';
}
randomInteger(24.5, 5.6, 1);
