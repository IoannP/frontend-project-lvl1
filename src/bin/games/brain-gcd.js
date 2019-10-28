#!/usr/bin/env node

import {
  readlineSync, game, question, getRandomNumber,
  greatestCommonDivisor,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(game(question)([getRandomNumber(1, 100), getRandomNumber(1, 100)],
  [getRandomNumber(1, 100), getRandomNumber(1, 100)],
  [getRandomNumber(1, 100), getRandomNumber(1, 100)],
  name, greatestCommonDivisor));
