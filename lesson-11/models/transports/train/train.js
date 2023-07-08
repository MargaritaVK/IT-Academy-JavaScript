import { Transport } from "../transport.js"

class Train extends Transport {
    constructor(name) {
        super(name);
    }

    getPrice = () => 0;
}

export { Train }