#!/usr/bin/env node

import {
  readlineSync, game, question, getRandomNumber,
  progression, finder,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(game(question)(progression(getRandomNumber(1, 100)),
  progression(getRandomNumber(1, 100)),
  progression(getRandomNumber(1, 100)), name, finder));
