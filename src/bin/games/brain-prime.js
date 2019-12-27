import {
  readlineSync, game, question, getRandomNumber,
  isPrime,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(game(question)([getRandomNumber(1, 100)], [getRandomNumber(1, 100)],
  [getRandomNumber(1, 100)], name, isPrime));
