import readlineSync from 'readline-sync';

export default (questions, answers, leadIn, roundsQuantity = 3) => {
  console.log(`Welcome to the Brain Games!\n${leadIn}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let userAnswer;
  let computerAnswer;

  for (let count = 0; count < roundsQuantity; count += 1) {
    const question = questions[count];
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    computerAnswer = answers[count];
    if (userAnswer !== computerAnswer) {
      break;
    }
    console.log('Correct!');
  }

  return (userAnswer === computerAnswer)
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${computerAnswer}'.\nLet's try again, ${userName}!`);
};
