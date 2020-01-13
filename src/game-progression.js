#!/usr/bin/env node

import { getRandomNumber } from '..';

export const progression = (arg, acc = getRandomNumber(1, 100), space = getRandomNumber(1, 10)) => {
  const result = [];
  let argument = arg;
  for (let i = 1; i <= 10; i += 1) {
    if (space === i) {
      result.push('..');
      argument += acc;
    } else {
      result.push(argument);
      argument += acc;
    }
  }
  return result;
};

export const finder = (arg) => {
  const index = arg.indexOf('..');
  if (index <= 5) {
    return (arg[index + 1] - arg[index + 2]) + arg[index + 1];
  }
  return (arg[index - 1] - arg[index - 2]) + arg[index - 1];
};
