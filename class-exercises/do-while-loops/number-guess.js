const rightAnswer = Math.ceil(Math.random() * 20);
let guessCount = 0;
let guess = 0;
do {
    guess = Number(prompt('Please enter a number guess'));
    if (guess == NaN) {
        alert('You must enter a number!');
    } else if (guess == rightAnswer) {
        alert('You got it!');
    } else if (guess < rightAnswer) {
        alert('Higher');
    } else {
        alert('Lower');
    }
    guessCount++;
} while (guess != rightAnswer);

alert(`It took you ${guessCount} guess${guessCount == 1 ? '' : 'es'} to get it right`);