import { getCurrentDate } from './getCurrentDate.js';
import { getCurrentTime } from './getCurrentTime.js';

const currentDate = getCurrentDate();
const currentTime = getCurrentTime();

console.log(`Поточна дата та час: ${currentDate} ${currentTime}`);