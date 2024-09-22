// task 1
// const calc = function(num1, num2, operation) {
//   if(typeof num1 !== 'number' || typeof num2 !== 'number') {
//     return null;
//   }
//   if (isNaN(num1) || isNaN(num2)) {
//     return null;
//   }
//   if(operation !== '+' || operation !== '-' ||operation !== '*' || operation !== '/') {
//     return null;
//   }
//   switch(operation) {
//     case '+': {
//       return num1 + num2;
//     }
//     case '-': {
//       return num1 - num2;
//     }
//     case '*': {
//       return num1 * num2;
//     }
//     case '/': {
//       return num1 / num2;
//     }
//     default: {
//       return null;
//     }
//   }
// }
// let num1 = +prompt('Enter first number: ');
// let num2 = +prompt('Enter second number: ');
// let operation = prompt('Enter operation: ');
// console.log(calc(num1, num2, operation));

// task 2
// const sumOfOneHundredNumbers = function(firstNumber, sum) {
//   while (firstNumber <= 100) {
//     sum += firstNumber;
//     firstNumber++;
//   }
//   return sum;

//   // або
//   // return ((1 + 100) * 50);
// }
// let sum = 0;
// let firstNumber = 1;
// console.log(sumOfOneHundredNumbers(firstNumber, sum));

// task 3
const getExSolution = function(result) {
  do {
    result = +prompt('2+2*2= '); 
  } while (result !== 6);  
  return 'Well done!';
}
let result;
console.log(getExSolution(result));