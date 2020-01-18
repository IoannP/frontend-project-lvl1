import { flow, getRandomNumber } from './index';


const greatestCommonDivisor = (argument) => {
  let x = argument[0];
  let y = argument[1];

  while (y) y = x % (x = y);
  return x;
};

export default () => {
  flow(greatestCommonDivisor,
    [[getRandomNumber(1, 100), getRandomNumber(1, 100)],
      [getRandomNumber(1, 100), getRandomNumber(1, 100)],
      [getRandomNumber(1, 100), getRandomNumber(1, 100)]],
    'Find the greatest common divisor of given numbers.');
};
