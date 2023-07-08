import { Train } from "./train.js"

class SpainTrain extends Train {
    constructor(name) {
        super(name);
    }

    getPrice = () => 70;
}

export { SpainTrain }