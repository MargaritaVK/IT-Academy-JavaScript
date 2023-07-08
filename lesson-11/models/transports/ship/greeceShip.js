import { Ship } from "./ship.js"

class GreeceShip extends Ship {
    constructor(name) {
        super(name);
    }

    getPrice = () => 900;
}

export { GreeceShip }