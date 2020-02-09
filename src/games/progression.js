import flow from '../index';
import getRandomNumber from '../utils';

const getDataGame = () => {
  const progression = [];
  const firstNumber = getRandomNumber(0, 100);
  const difference = getRandomNumber(0, 100);
  const length = 10;
  const blank = getRandomNumber(0, length - 1);
  for (let index = 0; index < length; index += 1) {
    if (blank === index) {
      progression[blank] = '..';
    } else {
      progression[index] = firstNumber + (difference * index);
    }
  }
  const missingNumber = firstNumber + (difference * blank);
  return [progression.join(' '), `${missingNumber}`];
};

const description = 'What number is missing in the progression?';

// game
export default () => (flow(getDataGame, description));
