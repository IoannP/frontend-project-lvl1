import { flow, getRandomNumber } from './index';

export default () => {
  flow((num) => (num % 2 === 0 ? 'yes' : 'no'),
    [[getRandomNumber(1, 100)],
      [getRandomNumber(1, 100)],
      [getRandomNumber(1, 100)]],
    'Answer \'yes\' if the number is even, otherwise answer \'no\'.');
};
