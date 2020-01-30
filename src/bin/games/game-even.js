import flow from '../../index';
import getRandomNumber from '../../utils';

const isEven = (num) => (num % 2 === 0);

const transformBoolean = (number) => (isEven(number) ? 'yes' : 'no');

// arguments of games (rounds)
const rounds = [getRandomNumber(1, 100), getRandomNumber(1, 100), getRandomNumber(1, 100)];

const leadIn = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

// game
export default () => (flow(transformBoolean, rounds, leadIn));
