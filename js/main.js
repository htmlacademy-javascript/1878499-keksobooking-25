function getRandomInRange(minNumber, maxNumber) {
  if (minNumber >= 0 && maxNumber >= minNumber) {
    return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
  } else {
    throw new Error('Invalid Input Parameters');
  }
}
getRandomInRange(0, 6);


function generateRandomNum(minNumber, maxNumber, numOfDecimalPlaces) {
  const range = (maxNumber - minNumber);
  return (minNumber >= 0 && maxNumber >= minNumber) ?
    Number ( Math.random(range) + 1 / Math.pow(10, numOfDecimalPlaces + 1)).toFixed(numOfDecimalPlaces) : 'Invalid Input Parameters';
}
generateRandomNum(1.1, 1.2, 3);
