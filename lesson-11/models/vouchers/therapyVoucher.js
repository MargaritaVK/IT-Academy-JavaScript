import { Voucher } from "./voucher.js";

class TherapyVoucher extends Voucher {
    constructor(name, transport, meals, numberOfDays) {
        super(name, transport, meals, numberOfDays, 5);
    }
}

export { TherapyVoucher }