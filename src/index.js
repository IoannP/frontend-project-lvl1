#!/usr/bin/env node

import readlineSync from 'readline-sync';
import safeEval from 'safe-eval';

export { default as readlineSync } from 'readline-sync';

// game flow
export const game = (f1) => (arg1, arg2, arg3, name, f2) => {
  for (;;) {
    if (f1(arg1, f2, name) !== true) { break; }
    if (f1(arg2, f2, name) !== true) { break; }
    if (f1(arg3, f2, name) === true) {
      return `Congratulations, ${name}!`;
    }
    break;
  }
  return ' ';
};

export const question = (arg, func, name) => {
  console.log(`Question: ${arg.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer == func(arg)) {
    console.log('Correct!');
    return true;
  }
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${func(arg)}'. \nLet's try again, ${name}!`);
};

export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

// brain-even
export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// brain-calc
export const getExpression = (func) => (argument) => {
  if (func(1, 3) === 1) {
    return [argument.join(' + ')];
  }
  if (func(1, 3) === 2) {
    return [argument.join(' - ')];
  }
  return [argument.join(' * ')];
};

export const getSum = (string) => (safeEval(string));

// brain-gcd
export const greatestCommonDivisor = (argument) => {
  let arg1 = argument[0];
  let arg2 = argument[1];
  while (arg2) {
    const divisor = arg2;
    arg2 = arg1 % arg2;
    arg1 = divisor;
  }
  return arg1;
};
