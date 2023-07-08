import { Airplane } from "./airplane.js"

class TurkeyAirplane extends Airplane {
    constructor(name) {
        super(name);
    }

    getPrice = () => 500;
}

export { TurkeyAirplane }