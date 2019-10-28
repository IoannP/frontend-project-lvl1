#!/usr/bin/env node

import {
  getRandomNumber, readlineSync, game, question, isEven,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log(game(question)([getRandomNumber(1, 100)], [getRandomNumber(1, 100)],
  [getRandomNumber(1, 100)], name, isEven));
