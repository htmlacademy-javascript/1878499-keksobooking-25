import {createObject, OFFERS_AMOUNT} from './data.js';
import './utils.js';


const createObjects = () => Array.from({length: OFFERS_AMOUNT}, createObject);

console.log(createObjects);
