#!/usr/bin/env node

import {
  readlineSync, game, question, getRandomNumber,
  getExpression, getSum,
} from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?.');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(game(question)(getExpression(getRandomNumber)(getRandomNumber(1, 100),
  getRandomNumber(1, 100)),
getExpression(getRandomNumber)(getRandomNumber(1, 100), getRandomNumber(1, 100)),
getExpression(getRandomNumber)(getRandomNumber(1, 100), getRandomNumber(1, 100)),
name, getSum));
