#!/usr/bin/env node

import { enviroment, getRandomNumber } from '../..';
import { progression, finder } from '../../game-progression';

console.log(enviroment(finder,
  [progression(getRandomNumber(1, 100)),
    progression(getRandomNumber(1, 100)),
    progression(getRandomNumber(1, 100))],
  'What number is missing in the progression?'));
