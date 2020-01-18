import { flow, getRandomNumber } from './index';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  flow(isPrime,
    [[getRandomNumber(1, 100)],
      [getRandomNumber(1, 100)],
      [getRandomNumber(1, 100)]],
    'Answer "yes" if given number is prime. Otherwise answer "no".');
};
