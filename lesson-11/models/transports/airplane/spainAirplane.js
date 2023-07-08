import { Airplane } from "./airplane.js"

class SpainAirplane extends Airplane {
    constructor(name) {
        super(name);
    }

    getPrice = () => 350;
}

export { SpainAirplane }