import flow from '../index';
import getRandomNumber from '../utils';

const lengthOfProgression = 10;

const getDataGame = () => {
  const progression = [];
  const firstNumber = getRandomNumber();
  const difference = getRandomNumber();
  const blank = getRandomNumber(0, lengthOfProgression - 1);
  const missingNumber = firstNumber + (difference * blank);
  for (let index = 0; index < lengthOfProgression; index += 1) {
    progression[index] = firstNumber + (difference * index);
    if (blank === index) {
      progression[blank] = '..';
    }
  }
  return [progression.join(' '), missingNumber.toString()];
};

const description = 'What number is missing in the progression?';

// game
export default () => flow(getDataGame, description);
