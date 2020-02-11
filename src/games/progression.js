import flow from '../index';
import getRandomNumber from '../utils';

const getDataGame = () => {
  const progression = [];
  const firstNumber = getRandomNumber();
  const difference = getRandomNumber();
  const length = 10;
  let missingNumber;
  const blank = getRandomNumber(0, length - 1);
  for (let index = 0; index < length; index += 1) {
    progression[index] = firstNumber + (difference * index);
    if (blank === index) {
      missingNumber = progression[index];
      progression[blank] = '..';
    }
  }
  return [progression.join(' '), `${missingNumber}`];
};

const description = 'What number is missing in the progression?';

// game
export default () => (flow(getDataGame, description));
