//поменять массив в обратном порядке

let array = [1, 2, 3, 4, 5, 6];

function showArray(array){
    return array.reverse();
}
console.log(showArray(array));

//найти максимальное значение числа в массиве

let valueArray = [28, 3, 95, 11, 47];

function maxValueArray(valueArray){
    return valueArray.reduce((x, y) => Math.max(x, y));
}

console.log(maxValueArray(valueArray));

//записать в массив ряд фибоначчи начиная с N члена с длинной массива M

let startElementIndex = 5;
let maxCount = 11;

function calculateFibonacci(startElementIndex, maxCount) {
    let initialArray = [0, 1];
    let resultFibonacci = [];

    if (startElementIndex == 0) {
        resultFibonacci.push(initialArray[0], initialArray[1]);
    }
    if (startElementIndex == 1) {
        resultFibonacci.push(initialArray[1]);
    }
    for (let i = 2; resultFibonacci.length < maxCount; i++) {
        let value = initialArray[i - 2] + initialArray[i - 1];
        if (i >= startElementIndex) {
            resultFibonacci.push(value);
       }

        initialArray.push(value);
    }

    return resultFibonacci;
}

console.log(calculateFibonacci(startElementIndex, maxCount));

//даны два 4-х значных числа с неповторяющимися цифрами. надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению

let number1 = 3487;
let number2 = 3794;

function checkByValue(number1, number2) {
    let array1 = Array.from(number1.toString()).map(Number); 
    let array2 = Array.from(number2.toString()).map(Number);
    let count = 0;

    for (let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                count++;
            }
        }
    }

    return count;
}

function checkByValueAndIndex(number1, number2) {
    let array1 = Array.from(number1.toString()).map(Number); 
    let array2 = Array.from(number2.toString()).map(Number);
    let count = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            count++;
        }
    }

    return count;
}

console.log(checkByValue(number1, number2));
console.log(checkByValueAndIndex(number1, number2));

//сортировка массива по возрастанию/убыванию

let newArray = [17, 8, 35, 92, 49, 1, 77, 24];

function ascendingSortArray(newArray){
    return newArray.sort((a, b) => a - b);
}

function descendingSortArray(newArray){
    return newArray.sort((a, b) => b - a);
}

console.log(ascendingSortArray(newArray));
console.log(descendingSortArray(newArray));

//удалить из массива все повторяющиеся элементы

let numberArray = [5, 9, 3, 5, 7, 5, 4, 5, 2];

function removeDuplicateElementsArray(numberArray){
    return numberArray.filter((x, i) => numberArray.indexOf(x) === i);
}

console.log(removeDuplicateElementsArray(numberArray));