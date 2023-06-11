let max = 33;
let restValue = max;
let randomValueCount = 5;
let numberArray = new Array();

for (let i=0; i<randomValueCount; i++) {
    if (i == randomValueCount-1) {
        numberArray.push(restValue);
        break;
    } else {
        let number = Math.floor(Math.random() * restValue);
        restValue = restValue - number;
        numberArray.push(number);
    }
}

console.log(numberArray);
const sumOfNumbers = numberArray.reduce((acc, curr) => acc + curr);
console.log(sumOfNumbers);