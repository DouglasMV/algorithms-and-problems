// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz"

const fizzBuzz = (start, end) => {
  for (let i = start; i <= end; i++) {
    let text = ''
    text += i % 3 ? '' : 'Fizz'
    text += i % 5 ? '' : 'Buzz'
    console.log(text || i)
  }
}

fizzBuzz(1, 100)
