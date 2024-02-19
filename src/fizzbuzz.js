const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Write your code below this line

for (let i = 1; i <= answer.length; i++) {
  if (answer[i] % 15 === 0) {
    answer[i] = 'FizzBuzz'
  } else if (answer[i] % 5 === 0) {
    answer[i] = 'Buzz'
  } else if (answer[i] % 3 === 0) {
    answer[i] = 'Fizz'
  }
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
