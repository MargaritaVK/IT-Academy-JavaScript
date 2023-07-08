import { Voucher } from "./voucher.js";

class VacationVoucher extends Voucher {
    constructor(name, transport, meals, numberOfDays) {
        super(name, transport, meals, numberOfDays, 10);
    }
}

export { VacationVoucher }