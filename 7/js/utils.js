//модуль вспомогательных функций


//Возвращает случайное положительное число.
const getRandomInNumber = (minNumber, maxNumber) => {

  if (minNumber >= 0 && maxNumber >= minNumber) {
    return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
  }
  throw new Error('Invalid Input Parameters');
};


// Возвращает случайное число с плавающей точкой из переданного диапазона включительно.
const generateRandomRange = (minNumber, maxNumber, numOfDecimalPlaces = 0) => {

  if (minNumber >= 0 && maxNumber >= minNumber) {
    const range = Math.random() * (maxNumber - minNumber) + minNumber;
    const result = (Number((range) / Math.pow(1, +1)));
    return +result.toFixed(numOfDecimalPlaces);
  }
  throw new Error('Invalid Input Parameters');
};

// Возвращает случайный элемент массива
const randomizeArr = (arr) => {
  const newArr = arr.slice(0);
  const sliceRandomIndex = generateRandomRange(1, newArr.length-1);
  return newArr.slice(0, sliceRandomIndex);
};


export {getRandomInNumber, generateRandomRange, randomizeArr};
