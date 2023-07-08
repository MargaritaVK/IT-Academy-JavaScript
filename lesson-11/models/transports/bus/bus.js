import { Transport } from "../transport.js"

class Bus extends Transport {
    constructor(name) {
        super(name);
    }

    getPrice = () => 0;
}

export { Bus }