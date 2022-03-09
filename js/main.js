
const OFFERS_AMOUNT = 10;
const MAX_PRICE = 5000;
const MAX_ROOMS = 5;
const MAX_GUESTS = 5;
const LOCATION_NUMBER_OF_DIGITS = 5;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const HOURS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LAT_RANGE = [35.65000, 35.70000];
const LNG_RANGE = [139.70000, 139.80000];


// Возвращает случайное целое число из переданного диапазона включительно.
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


const createObject = () => {
  const objects = [];
  for (let i = 1; i <= OFFERS_AMOUNT; i++) {
    const imgNum = i < 10 ? `0${i}` : i;
    const lat = generateRandomRange(LAT_RANGE[0], LAT_RANGE[1], LOCATION_NUMBER_OF_DIGITS);
    const lng = generateRandomRange(LNG_RANGE[0], LNG_RANGE[1], LOCATION_NUMBER_OF_DIGITS);
    const typeRandomIndex = getRandomInNumber(0, TYPES.length - 1);
    const checkinRandomIndex = getRandomInNumber(0, HOURS.length - 1);
    const checkoutRandomIndex = getRandomInNumber(0, HOURS.length - 1);
    const obj = {
      author: {
        avatar: `img/avatars/user${imgNum}.png`
      },
      offer: {
        title: 'Заголовок предложения',
        address: `${lat} ${lng}`,
        price: generateRandomRange(1, MAX_PRICE),
        type: TYPES[typeRandomIndex],
        rooms: generateRandomRange(1, MAX_ROOMS),
        guests: generateRandomRange(1, MAX_GUESTS),
        checkin: HOURS[checkinRandomIndex],
        checkout: HOURS[checkoutRandomIndex],
        features: randomizeArr(FEATURES),
        description: 'Описание помещения',
        photos: randomizeArr(PHOTOS),
      },
      location: {
        lat,
        lng
      }
    };

    objects.push(obj);
  }
  return objects;
}


// Вовзращает случайный элемент массива
  const randomizeArr = (arr) => {
    const newArr = arr.slice(0);
    const sliceRandomIndex = generateRandomRange(1, newArr.length-1);
    return newArr.slice(0, sliceRandomIndex);
  };
createObject();


