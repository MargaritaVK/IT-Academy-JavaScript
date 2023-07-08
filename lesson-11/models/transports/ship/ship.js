import { Transport } from "../transport.js"

class Ship extends Transport {
    constructor(name) {
        super(name);
    }

    getPrice = () => 0;
}

export { Ship }