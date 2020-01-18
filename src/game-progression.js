import { flow, getRandomNumber } from './index';

const makeProgression = (start, acc = getRandomNumber(1, 100), space = getRandomNumber(1, 10)) => {
  const progression = [];
  let numberOfProgression = start;
  for (let i = 1; i <= 10; i += 1) {
    if (space === i) {
      progression.push('..');
      numberOfProgression += acc;
    } else {
      progression.push(numberOfProgression);
      numberOfProgression += acc;
    }
  }
  return progression;
};

const finder = (progression) => {
  const index = progression.indexOf('..');
  if (index <= 5) {
    return (progression[index + 1] - progression[index + 2]) + progression[index + 1];
  }
  return (progression[index - 1] - progression[index - 2]) + progression[index - 1];
};

export default () => {
  flow(finder,
    [makeProgression(getRandomNumber(1, 100)),
      makeProgression(getRandomNumber(1, 100)),
      makeProgression(getRandomNumber(1, 100))],
    'What number is missing in the progression?');
};
