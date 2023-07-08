import { Airplane } from "./airplane.js"

class PolandAirplane extends Airplane {
    constructor(name) {
        super(name);
    }

    getPrice = () => 100;
}

export { PolandAirplane }