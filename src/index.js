import readlineSync from 'readline-sync';

export const flow = (func, arg, rule) => {
  console.log(`Welcome to the Brain Games!\n${rule}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let user;
  let computer;

  for (let i = 0; i < 3; i += 1) {
    const Question = arg[i].join(' ');
    console.log(`Question: ${Question}`);
    user = readlineSync.question('Your answer: ');
    computer = func(arg[i]);
    if (user !== computer.toString()) {
      break;
    }
    console.log('Correct!');
  }

  if (user === computer.toString()) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${user}' is wrong answer ;(. Correct answer was '${computer}'.\nLet's try again, ${userName}!`);
  }
  return '';
};

export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
