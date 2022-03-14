import {getRandomInNumber, generateRandomRange, randomizeArr} from './utils.js';

//интерфейс-функция с помощью которой  мы получаем массив объектов(заглушка), вместо модуля работы с сервером

/*импорты других модулей
Вызовы общих функций
Настройка скриптов
*/


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
        title:'Заголовок предложения',
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
};

export {createObject};
