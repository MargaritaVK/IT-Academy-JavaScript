import { Bus } from "./bus.js"

class SpainBus extends Bus {
    constructor(name) {
        super(name);
    }

    getPrice = () => 30;
}

export { SpainBus }