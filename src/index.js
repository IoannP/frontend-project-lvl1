#!/usr/bin/env node

import readlineSync from 'readline-sync';

export { default as readlineSync } from 'readline-sync';

// brain-even
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const question = (num, name) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === isEven(num)) {
    console.log('Correct!');
    return true;
  }
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num)}'. \nLet's try again, ${name}!`);
};

export const games = (f) => (a, b, c, name) => {
  for (;;) {
    if (f(a, name) !== true) { break; }
    if (f(b, name) !== true) { break; }
    if (f(c, name) === true) {
      return `Congratulations, ${name}!`;
    }
    break;
  }
  return ' ';
};
