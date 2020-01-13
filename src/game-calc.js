#!/usr/bin/env node

import safeEval from 'safe-eval';
import { getRandomNumber } from '..';

export const getExpression = (argument) => {
  if (getRandomNumber(1, 3) === 1) {
    return [argument.join(' + ')];
  }
  if (getRandomNumber(1, 3) === 2) {
    return [argument.join(' - ')];
  }
  return [argument.join(' * ')];
};

export const calculation = (string) => (safeEval(string));
