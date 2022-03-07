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
const DESCRIPTION = ['one','two','three'];


const getRandomInRan = (minNumber, maxNumber) => {

  if (minNumber >= 0 && maxNumber >= minNumber) {
    return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
  }
  throw new Error('Invalid Input Parameters');
};


const generateRandomRange = (minNumber, maxNumber, numOfDecimalPlaces = 1) => {

  if (minNumber >= 0 && maxNumber >= minNumber) {
    const range = Math.random() * (maxNumber - minNumber) + minNumber;
    const result = (Number((range) / Math.pow(1, +1)));
    return +result.toFixed(numOfDecimalPlaces);
  }
  throw new Error('Invalid Input Parameters');
};

createObject();

function createObject() {
  const objects = [];
  for (let i = 1; i <= OFFERS_AMOUNT; i++) {
    const imgNum = i < 10 ? `0${i}` : i;
    const lat = generateRandomRange(LAT_RANGE[0], LAT_RANGE[1], LOCATION_NUMBER_OF_DIGITS);
    const lng = generateRandomRange(LNG_RANGE[0], LNG_RANGE[1], LOCATION_NUMBER_OF_DIGITS);
    const typeRandomIndex = getRandomInRan(0, TYPES.length - 1);
    const checkinRandomIndex = getRandomInRan(0, HOURS.length - 1);
    const checkoutRandomIndex = getRandomInRan(0, HOURS.length - 1);
    const description = getRandomInRan(0, DESCRIPTION.length - 1);
    const obj = {
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
        features: randomizeArr(FEATURES),
        description: randomizeArr(DESCRIPTION),
        photos: randomizeArr(PHOTOS)
      },
      location:{
        lat,
        lng
      }
    };

    objects.push(obj);
  }
  return objects;
}

function randomizeArr(arr){
  const newArr = arr.slice(0);
  Array(newArr);
  const sliceRandomIndex = getRandomInRan(1, newArr.length-1);
  return newArr.slice(0, sliceRandomIndex);
}

