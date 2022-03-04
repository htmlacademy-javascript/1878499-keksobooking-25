/*Структура каждого объекта должна быть следующей:
author, объект — описывает автора. Содержит одно поле:
avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.


offer, объект — содержит информацию об объявлении. Состоит из полей:
title, строка — заголовок предложения. Придумайте самостоятельно.
address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
price, число — стоимость. Случайное целое положительное число.
type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
rooms, число — количество комнат. Случайное целое положительное число.
guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
description, строка — описание помещения. Придумайте самостоятельно.
photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
location, объект — местоположение в виде географических координат. Состоит из двух полей:
lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.*/

const OFFERS_AMOUNT = 10;
const MIN_DESCRIPTION_WORDS = 4;
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
const DESCRIPTION_STRING = 'Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of the night.';


const getRandomInRan = (minNumber, maxNumber) => {

  if (minNumber >= 0 && maxNumber >= minNumber) {
    return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
  }
  throw new Error('Invalid Input Parameters');
};
getRandomInRan(1,4);


const generateRandomRange = (minNumber, maxNumber, numOfDecimalPlaces = 1) => {

  if (minNumber >= 0 && maxNumber >= minNumber) {
    const range = Math.random() * (maxNumber - minNumber) + minNumber;
    const result = (Number((range) / Math.pow(1, +1)));
    return +result.toFixed(numOfDecimalPlaces);
  }
  throw new Error('Invalid Input Parameters');
};
generateRandomRange();


const createObject = () => {
  const objects = [];
  for (let i = 1; i <= OFFERS_AMOUNT; i++) {
    const imgNum = i < 10 ? `0${i}` : i;
    const lat = generateRandomRange(LAT_RANGE[0], LAT_RANGE[1], LOCATION_NUMBER_OF_DIGITS);
    const lng = generateRandomRange(LNG_RANGE[0], LNG_RANGE[1], LOCATION_NUMBER_OF_DIGITS);
    const typeRandomIndex = generateRandomRange(0, TYPES.length - 1);
    const checkinRandomIndex = generateRandomRange(0, HOURS.length - 1);
    const checkoutRandomIndex = generateRandomRange(0, HOURS.length - 1);
    const RandomIndex = generateRandomRange(MIN_DESCRIPTION_WORDS, String.length - 1);
    const obj= {
      author: {
        avatar: `img/avatars/user${imgNum}.png`
      },
      offer: {
        title: `Title ${i}`,
        address: `${lat} ${lng}`,
        price: generateRandomRange(1, MAX_PRICE),
        type: TYPES[typeRandomIndex],
        rooms: generateRandomRange(1, MAX_ROOMS),
        guests: generateRandomRange(1, MAX_GUESTS),
        checkin: HOURS[checkinRandomIndex],
        checkout: HOURS[checkoutRandomIndex],
        features: FEATURES,
        description: (DESCRIPTION_STRING),
        photos: PHOTOS,
      },
      location: {
        lat,
        lng
      }
    };
  }
  return createObject();
};

/*const similarObjects = Array.from({length:OFFERS_AMOUNT},createObject);
window.console.log(similarObjects);*/



//не могу понять как использовать Array и Shuffle

function shuffleArray {
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // Used like so
  const arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);
}
