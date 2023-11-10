import { Ship } from "./ship.js"

class ThailandShip extends Ship {
    constructor(name) {
        super(name);
    }

    getPrice = () => 1000;
}

export { ThailandShip }