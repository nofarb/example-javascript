const Calculator = require('./calculator');
const MathUtils = require('./mathUtils');

// Let's do some very convoluted math operations for no reason.

const calc = new Calculator();

// We'll add 10 and 20, then check if the result is even or odd, and then square it, cube it, and find the factorial of the result.

let sum = calc.add(10, 20);  // Sum of 10 + 20

let isEven = MathUtils.isEven(sum);  // Is the sum even?
let isOdd = MathUtils.isOdd(sum);    // Is the sum odd?

console.log(`Sum: ${sum}`);
console.log(`Is the sum even? ${isEven}`);
console.log(`Is the sum odd? ${isOdd}`);

let squared = MathUtils.square(sum);  // Square of the sum
let cubed = MathUtils.cube(sum);      // Cube of the sum

console.log(`Squared sum: ${squared}`);
console.log(`Cubed sum: ${cubed}`);

let factorial = MathUtils.factorial(sum);  // Factorial of the sum

console.log(`Factorial of sum: ${factorial}`);

// Now let's subtract the sum by 5, check if it's even, square it again, then divide by 3
let result = calc.subtract(sum, 5);
let resultSquared = MathUtils.square(result);
let resultDivided = calc.divide(resultSquared, 3);

console.log(`Subtract 5 from sum: ${result}`);
console.log(`Squared result: ${resultSquared}`);
console.log(`Result divided by 3: ${resultDivided}`);
