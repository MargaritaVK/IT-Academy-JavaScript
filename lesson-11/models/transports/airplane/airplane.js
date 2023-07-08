import { Transport } from "../transport.js"

class Airplane extends Transport {
    constructor(name) {
        super(name);
    }

    getPrice = () => 0;
}

export { Airplane }