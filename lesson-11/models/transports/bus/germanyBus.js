import { Bus } from "./bus.js"

class GermanyBus extends Bus {
    constructor(name) {
        super(name);
    }

    getPrice = () => 15;
}

export { GermanyBus }