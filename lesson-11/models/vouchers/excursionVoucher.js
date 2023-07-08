import { Voucher } from "./voucher.js";

class ExcursionVoucher extends Voucher {
    constructor(name, transport, meals, numberOfDays) {
        super(name, transport, meals, numberOfDays, 3);
    }
}

export { ExcursionVoucher }