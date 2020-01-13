#!/usr/bin/env node

import isEven from '../../game-even';
import { enviroment, getRandomNumber } from '../..';

console.log(enviroment(isEven,
  [[getRandomNumber(1, 100)],
    [getRandomNumber(1, 100)],
    [getRandomNumber(1, 100)]],
  'Answer \'yes\' if the number is even, otherwise answer \'no\'.'));
