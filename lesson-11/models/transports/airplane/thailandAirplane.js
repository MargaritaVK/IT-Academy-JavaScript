import { Airplane } from "./airplane.js"

class ThailandAirplane extends Airplane {
    constructor(name) {
        super(name);
    }

    getPrice = () => 700;
}

export { ThailandAirplane }