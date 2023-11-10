import { Voucher } from "./voucher.js";

class ShoppingVoucher extends Voucher {
    constructor(name, transport, meals, numberOfDays) {
        super(name, transport, meals, numberOfDays, 1.5);
    }
}

export { ShoppingVoucher }