import { UserConsoleAdapter } from "../adapters/userConsoleAdapter.js";

class VoucherFilterBuilder {
    constructor(vouchers) {
        this.vouchers = vouchers;
        this.consoleAdapter = new UserConsoleAdapter();
    }

    async applyFilterByVoucherName() {
        const uniqueVoucherNames = [...new Set(this.vouchers.map(item => item.name))];
        let availableVoucherNames = "";

        for (let index = 0; index < uniqueVoucherNames.length; index++) {
            availableVoucherNames = availableVoucherNames.concat(`${index} - ${uniqueVoucherNames[index]}\n`);
        }

        let selectedVoucherTypeIndex = await this.consoleAdapter.ask(`Please select a voucher type.\n${availableVoucherNames}\n`);
        console.log(`You've selected the following voucher type: ${uniqueVoucherNames[selectedVoucherTypeIndex]}`);
        this.vouchers = this.vouchers.filter(x => x.name === uniqueVoucherNames[selectedVoucherTypeIndex]);
    }

    async applyFilterByTransportName() {
        const uniqueTransportNames = [...new Set(this.vouchers.map(item => item.transport.name))];
        let availableTransportOptions = "";

        for (let index = 0; index < uniqueTransportNames.length; index++) {
            availableTransportOptions = availableTransportOptions.concat(`${index} - ${uniqueTransportNames[index]}\n`);
        }

        let selectedTransportIndex = await this.consoleAdapter.ask(`Please select a transport.\n${availableTransportOptions}\n`);
        console.log(`You've selected the following transport type: ${uniqueTransportNames[selectedTransportIndex]}`);
        this.vouchers = this.vouchers.filter(x => x.transport.name === uniqueTransportNames[selectedTransportIndex]);
    }

    async applyFilterByMealsType() {
        const uniqueMeals = [...new Set(this.vouchers.map(item => item.meals.name))];
        let availableMealsNames = "";

        for (let index = 0; index < uniqueMeals.length; index++) {
            availableMealsNames = availableMealsNames.concat(`${index} - ${uniqueMeals[index]}\n`);
        }

        let selectedMealsIndex = await this.consoleAdapter.ask(`Please select a meals type.\n${availableMealsNames}\n`);
        console.log(`You've selected the following meals type: ${uniqueMeals[selectedMealsIndex]}`);
        this.vouchers = this.vouchers.filter(x => x.meals.name === uniqueMeals[selectedMealsIndex]);
    }

    async applyFilterByNumberOfDays() {
        const uniqueNumberOfDays = [...new Set(this.vouchers.map(item => item.numberOfDays))];
        let availableNumberOfDays = "";

        for (let index = 0; index < uniqueNumberOfDays.length; index++) {
            availableNumberOfDays = availableNumberOfDays.concat(`${index} - ${uniqueNumberOfDays[index]}\n`);
        }

        let selectedNumberOfDaysIndex = await this.consoleAdapter.ask(`Please select number of days.\n${availableNumberOfDays}\n`);
        console.log(`You've selected the following number of days: ${uniqueNumberOfDays[selectedNumberOfDaysIndex]}`);
        this.vouchers = this.vouchers.filter(x => x.numberOfDays === uniqueNumberOfDays[selectedNumberOfDaysIndex]);
    }

    getFilteredResult() { 
        return this.vouchers;
    };
}

export { VoucherFilterBuilder }