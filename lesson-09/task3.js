function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNumFirst() {
    return new Promise((resolve) => {
        const number = getRandomNumber(1, 5);
        setTimeout(() => {
            resolve(number);
        }, 3000) 
    })
}

function getNumSecond() {
    return new Promise((resolve) => {
        const number = getRandomNumber(6, 10);
        setTimeout(() => {
            resolve(number);
        }, 5000) 
    })
}

async function getSumResult() {
    let firstResult = await getNumFirst();
    let secondResult = await getNumSecond();

    console.log(firstResult + secondResult);
}

getSumResult();