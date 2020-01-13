#!/usr/bin/env node

import greatestCommonDivisor from '../../game-gcd';
import { enviroment, getRandomNumber } from '../..';

console.log(enviroment(greatestCommonDivisor,
  [[getRandomNumber(1, 100), getRandomNumber(1, 100)],
    [getRandomNumber(1, 100), getRandomNumber(1, 100)],
    [getRandomNumber(1, 100), getRandomNumber(1, 100)]],
  'Find the greatest common divisor of given numbers.'));
