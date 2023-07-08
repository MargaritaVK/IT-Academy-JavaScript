import { Ship } from "./ship.js"

class SpainShip extends Ship {
    constructor(name) {
        super(name);
    }

    getPrice = () => 800;
}

export { SpainShip }