#!/usr/bin/env node

import { readlineSync, games, question } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
const start = games(question)(15, 6, 7, name);
console.log(start);
