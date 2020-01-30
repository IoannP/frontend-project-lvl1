import readlineSync from 'readline-sync';

export default (game, rounds, leadIn, roundsQuantity = 3) => {
  console.log(`Welcome to the Brain Games!\n${leadIn}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let userAnswer;
  let computerAnswer;

  for (let count = 0; count < roundsQuantity; count += 1) {
    const question = rounds[count];
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    computerAnswer = game(question);
    if (userAnswer !== computerAnswer.toString()) {
      break;
    }
    console.log('Correct!');
  }

  return (userAnswer === computerAnswer.toString())
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${computerAnswer}'.\nLet's try again, ${userName}!`);
};
