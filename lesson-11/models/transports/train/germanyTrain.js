import { Train } from "./train.js"

class GermanyTrain extends Train {
    constructor(name) {
        super(name);
    }

    getPrice = () => 40;
}

export { GermanyTrain }