#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const game = (func, arg) => {
  let computer;
  let human;
  const iter = (acc) => {
    if (acc.length === 0) {
      return [human, computer];
    }
    const argOfQuestion = acc[0];
    console.log(`Question: ${argOfQuestion.join(' ')}`);
    computer = func(acc[0]);
    human = readlineSync.question('Your answer: ');
    if (human == computer) {
      console.log('Correct!');
      return iter(acc.slice(1));
    }
    return [human, computer];
  };
  return iter(arg);
};

export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

export const enviroment = (func, arg, question) => {
  console.log('Welcome to the Brain Games!');
  console.log(question);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const result = game(func, arg);
  if (result[0] == result[1]) return `Congratulations, ${name}!`;
  return `'${result[0]}' is wrong answer ;(. Correct answer was '${result[1]}'. \nLet's try again, ${name}!`;
};
