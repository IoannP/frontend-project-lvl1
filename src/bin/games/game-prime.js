import flow from '../../index';
import getRandomNumber from '../../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const squareFromNumber = Math.sqrt(number);
  for (let divisor = 2; divisor <= squareFromNumber; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const transformBoolean = (number) => (isPrime(number) ? 'yes' : 'no');

// arguments of game (rounds)
const numbers = [getRandomNumber(1, 100), getRandomNumber(1, 100), getRandomNumber(1, 100)];

const leadIn = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// game
export default () => (flow(transformBoolean, numbers, leadIn));
