function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNum() {
    return new Promise((resolve) => {
        const number = getRandomNumber(1, 5);
        setTimeout(() => {
            resolve(number);
        }, 3000) 
    })
}

async function getResult() {
    let numberResult = await getNum()
	
    console.log(Math.pow(numberResult , 2));
}

getResult();