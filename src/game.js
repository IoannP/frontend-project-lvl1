#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcom to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return `Hi ${userName}!`;
};
