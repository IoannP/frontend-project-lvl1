#!/usr/bin/env node

import isPrime from '../../game-prime';
import { enviroment, getRandomNumber } from '../..';

console.log(enviroment(isPrime,
  [[getRandomNumber(1, 100)],
    [getRandomNumber(1, 100)],
    [getRandomNumber(1, 100)]],
  'Answer "yes" if given number is prime. Otherwise answer "no".'));
