#!/usr/bin/env node

export default (argument) => {
  let x = argument[0];
  let y = argument[1];

  while (y) y = x % (x = y);
  return x;
};
