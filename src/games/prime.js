import flow from '../index';
import getRandomNumber from '../utils';

const isPrime = (number) => {
  if (number < 2) return false;
  const squareRoot = Math.sqrt(number);
  for (let divisor = 2; divisor <= squareRoot; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

// game's parameters
const getDataGame = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

// game
export default () => flow(getDataGame, description);
