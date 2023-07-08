import { CRUISE_VOUCHER, EXCURSION_VOUCHER, SHOPPING_VOUCHER, THERAPY_VOUCHER, VACATION_VOUCHER } from "./constants.js";
import { VoucherFactory } from "./factories/voucherFactories.js";

export function createAllPossibleVouchers(countryAbstractFactory) {
    const availableTransports = countryAbstractFactory.createTransports();
    const availableMeals = countryAbstractFactory.createMeals();
    const numberOfDaysArray = countryAbstractFactory.createNumberOfDays();
    const voucherFactory = new VoucherFactory();
    const availableVouchers = [];

    for (let availableTransport of availableTransports) {
        for (let availableMeal of availableMeals) {
            for (let numberOfDays of numberOfDaysArray) {
                availableVouchers.push(voucherFactory.createVoucher(CRUISE_VOUCHER, availableTransport, availableMeal, numberOfDays));
                availableVouchers.push(voucherFactory.createVoucher(EXCURSION_VOUCHER, availableTransport, availableMeal, numberOfDays));
                availableVouchers.push(voucherFactory.createVoucher(SHOPPING_VOUCHER, availableTransport, availableMeal, numberOfDays));
                availableVouchers.push(voucherFactory.createVoucher(THERAPY_VOUCHER, availableTransport, availableMeal, numberOfDays));
                availableVouchers.push(voucherFactory.createVoucher(VACATION_VOUCHER, availableTransport, availableMeal, numberOfDays));
            }
        }
    }

    return availableVouchers;
}
