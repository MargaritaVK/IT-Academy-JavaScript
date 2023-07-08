import { Airplane } from "./airplane.js"

class GreeceAirplane extends Airplane {
    constructor(name) {
        super(name);
    }

    getPrice = () => 400;
}

export { GreeceAirplane }