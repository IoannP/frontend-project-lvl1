import flow from '../index';
import getRandomNumber from '../utils';

const isEven = (number) => (number % 2 === 0);

const transformBoolean = (number) => (isEven(number) ? 'yes' : 'no');

// arguments of games
const questions = [getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100)];

const answers = questions.map(transformBoolean);

const leadIn = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

// game
export default () => (flow(questions, answers, leadIn));
