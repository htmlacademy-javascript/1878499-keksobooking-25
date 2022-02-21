/*Функция, возвращающая случайное целое число из переданного диапазона включительно.
Пример использования функции:

имя_функции(от, до); // Результат: целое число из диапазона "от...до"

Учтите, что диапазон может быть только положительный, включая ноль.

А также придумайте, как функция должна вести себя,
если передать значение «до» меньшее, чем значение «от», или равное ему.
.*/

function randomInteger(mIn, mAx, numOfDecimalPlaces) {
  if (mIn >= 0 && mAx >= mIn) {
    const diapason = (mAx - mIn);
    return Number(diapason + 1 / Math.pow(10, numOfDecimalPlaces + 1)).toFixed(numOfDecimalPlaces);
  }
  return 'Invalid Input Parameters';
}
randomInteger(3, 4,0);

/*Д15. Если при использовании условного оператора в любом случае возвращается значение,
альтернативная ветка опускается.
Д17. Там, где возможно, в присвоении значения вместо if используется тернарный оператор.*/

/*function randomInteger(mIn, mAx, numOfDecimalPlaces) {
  (mIn >= 0 && mAx >= mIn) ?
  const diapason = (mAx - mIn) : Number(diapason + 1 / Math.pow(10, numOfDecimalPlaces + 1)).toFixed(numOfDecimalPlaces)
  return 'Invalid Input Parameters';
}
console.log(randomInteger(1, 6,0));*/
