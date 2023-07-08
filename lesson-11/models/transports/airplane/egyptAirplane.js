import { Airplane } from "./airplane.js"

class EgyptAirplane extends Airplane {
    constructor(name) {
        super(name);
    }

    getPrice = () => 300;
}

export { EgyptAirplane }