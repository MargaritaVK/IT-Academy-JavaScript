import { Train } from "./train.js"

class PolandTrain extends Train {
    constructor(name) {
        super(name);
    }

    getPrice = () => 10;
}

export { PolandTrain }