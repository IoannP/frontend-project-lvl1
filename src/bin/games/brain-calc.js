#!/usr/bin/env node

import { getExpression, calculation } from '../../game-calc';
import { enviroment, getRandomNumber } from '../..';

console.log(enviroment(calculation,
  [getExpression([getRandomNumber(1, 100), getRandomNumber(1, 100)]),
    getExpression([getRandomNumber(1, 100), getRandomNumber(1, 100)]),
    getExpression([getRandomNumber(1, 100), getRandomNumber(1, 100)])],
  'What is the result of the expression?'));
