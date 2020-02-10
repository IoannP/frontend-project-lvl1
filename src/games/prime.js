import flow from '../index';
import getRandomNumber from '../utils';

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

// game's parameters
const getDataGame = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

// game
export default () => (flow(getDataGame, description));
