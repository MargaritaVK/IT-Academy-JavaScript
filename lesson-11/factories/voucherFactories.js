import { VacationVoucher } from "../models/vouchers/vacationVoucher.js";
import { ExcursionVoucher } from "../models/vouchers/excursionVoucher.js";
import { TherapyVoucher } from "../models/vouchers/therapyVoucher.js";
import { ShoppingVoucher } from "../models/vouchers/shoppingVoucher.js";
import { CruiseVoucher } from "../models/vouchers/cruiseVoucher.js";
import { VACATION_VOUCHER, EXCURSION_VOUCHER, THERAPY_VOUCHER, SHOPPING_VOUCHER, CRUISE_VOUCHER } from "../constants.js";

class VoucherFactory {
    createVoucher(voucherType, transport, meals, numberOfDays) {
        switch (voucherType.toLowerCase()) {
            case VACATION_VOUCHER:
                return new VacationVoucher(VACATION_VOUCHER, transport, meals, numberOfDays);
            case EXCURSION_VOUCHER:
                return new ExcursionVoucher(EXCURSION_VOUCHER, transport, meals, numberOfDays);
            case THERAPY_VOUCHER:
                return new TherapyVoucher(THERAPY_VOUCHER, transport, meals, numberOfDays);
            case SHOPPING_VOUCHER:
                return new ShoppingVoucher(SHOPPING_VOUCHER, transport, meals, numberOfDays);
            case CRUISE_VOUCHER:
                return new CruiseVoucher(CRUISE_VOUCHER, transport, meals, numberOfDays);
        }
    }
}

export { VoucherFactory }