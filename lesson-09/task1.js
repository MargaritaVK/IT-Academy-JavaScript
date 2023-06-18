function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function returnResult() {
    return new Promise((resolve) => {
        const delay = getRandomNumber(1, 5);
        setTimeout(() => {
            resolve(delay);
        }, delay * 1000)
    })
}

const promiseOne = returnResult();
const promiseTwo = returnResult();
const promiseThree = returnResult();

Promise.race([promiseOne, promiseTwo, promiseThree])
    .then((number) => {
      console.log(number);
    }
)