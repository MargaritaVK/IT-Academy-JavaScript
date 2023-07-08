import { Bus } from "./bus.js"

class PolandBus extends Bus {
    constructor(name) {
        super(name);
    }

    getPrice = () => 8;
}

export { PolandBus }