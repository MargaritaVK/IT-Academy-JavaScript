let max = 51.20;
let restValue = max;
let randomValueCount = 6;
let numberArray = new Array();

for (let i=0; i<randomValueCount; i++) {
    if (i == randomValueCount-1) {
        numberArray.push(Number.parseFloat(restValue.toFixed(2)));
        break;
    } else {
        let number = (Math.random() * restValue).toFixed(2);
        restValue = restValue - number;
        numberArray.push(Number.parseFloat(number));
    }
}

console.log(numberArray);
const sumOfNumbers = numberArray.reduce((acc, curr) => acc + curr);
console.log(sumOfNumbers.toFixed(2));