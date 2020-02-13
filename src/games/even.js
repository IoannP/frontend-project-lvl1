import flow from '../index';
import getRandomNumber from '../utils';

const isEven = (number) => (number % 2 === 0);

const getDataGame = () => {
  const question = getRandomNumber();
  const answer = (isEven(question) ? 'yes' : 'no');
  return [question, answer];
};

const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

// game
export default () => flow(getDataGame, description);
