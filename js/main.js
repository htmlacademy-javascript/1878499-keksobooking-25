const getRandomInRan = (minNumber,maxNumber) => {
  if (minNumber >= 0 && maxNumber >= minNumber) {
    return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
  }
  throw new Error('Invalid Input Parameters');
};
getRandomInRan(1,6);


const generateRandomRange = (minNumber, maxNumber, numOfDecimalPlaces=4) => {
  if (minNumber >= 0 && maxNumber >= minNumber) {
    const range = Math.random() * (maxNumber - minNumber) + minNumber;
    const result = (Number((range) / Math.pow(1, +1)));
    return +result.toFixed(numOfDecimalPlaces);
  }
  throw new Error('Invalid Input Parameters');
};

generateRandomRange(1.2, 1.9);

