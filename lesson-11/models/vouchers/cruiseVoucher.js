import { Voucher } from "./voucher.js";

class CruiseVoucher extends Voucher {
    constructor(name, transport, meals, numberOfDays) {
        super(name, transport, meals, numberOfDays, 2);
    }
}

export { CruiseVoucher }