import { Airplane } from "./airplane.js"

class GermanyAirplane extends Airplane {
    constructor(name) {
        super(name);
    }

    getPrice = () => 150;
}

export { GermanyAirplane }