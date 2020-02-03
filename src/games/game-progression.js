import flow from '../index';
import getRandomNumber from '../utils';

const makeProgression = (firstNumber, space, length = 10) => {
  const progression = [];
  const gap = getRandomNumber(0, length - 1);
  let nextNumber = firstNumber;
  for (let index = 0; index < length; index += 1) {
    nextNumber += space;
    progression[index] = nextNumber;
  }
  progression[gap] = '..';
  return progression.join(' ');
};

// finding of missing number (gap)
const finder = (progression) => {
  const toArray = progression.split(' ');
  const index = toArray.indexOf('..');
  const middle = Math.round(toArray.length / 2);
  return (index <= middle)
    ? `${(toArray[index + 1] * 2) - toArray[index + 2]}`
    : `${(toArray[index - 1] * 2) - toArray[index - 2]}`;
};

// arguments of game
const questions = [makeProgression(getRandomNumber(1, 100), getRandomNumber(1, 100)),
  makeProgression(getRandomNumber(1, 100), getRandomNumber(1, 100)),
  makeProgression(getRandomNumber(1, 100), getRandomNumber(1, 100))];

const answers = questions.map(finder);

const leadIn = 'What number is missing in the progression?';

// game
export default () => (flow(questions, answers, leadIn));
