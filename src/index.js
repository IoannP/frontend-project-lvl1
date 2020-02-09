import readlineSync from 'readline-sync';

export default (dataGame, description) => {
  console.log(`Welcome to the Brain Games!\n${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const rounds = 3;
  for (let count = 0; count < rounds; count += 1) {
    const dataRound = dataGame();
    const question = dataRound[0];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = dataRound[1];
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return '';
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
