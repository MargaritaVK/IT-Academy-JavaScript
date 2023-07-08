/*
Туристические путевки. Сформировать набор предложений клиенту по
выбору туристической путевки различного типа (отдых, экскурсии,
лечение, шопинг, круиз и т.д.) для оптимального выбора. Учитывать
возможность выбора транспорта, питания и числа дней. Реализовать
выбор и сортировку путевок.
*/

import { PolandAbstractFactory } from "./abstractFactories/polandAbstractFactory.js";
import { EgyptAbstractFactory } from "./abstractFactories/egyptAbstractFactory.js";
import { GermanyAbstractFactory } from "./abstractFactories/germanyAbstractFactory.js";
import { GreeceAbstractFactory } from "./abstractFactories/greeceAbstractFactory.js";
import { SpainAbstractFactory } from "./abstractFactories/SpainAbstractFactory.js";
import { ThailandAbstractFactory } from "./abstractFactories/thailandAbstractFactory.js";
import { TurkeyAbstractFactory } from "./abstractFactories/turkeyAbstractFactory.js";
import { UserConsoleAdapter } from "./adapters/userConsoleAdapter.js";
import { VoucherFilterBuilder } from "./builders/voucherFilterBuilder.js";
import { createAllPossibleVouchers } from "./createDataset.js";
import { sortVouchers } from "./sortVouchers.js";

const consoleAdapter = new UserConsoleAdapter();
let countryAbstractFactory;
let answer = await consoleAdapter.ask("Which country?\n0 - Poland\n1 - Egypt\n2 - Germany\n3 - Greece\n4 - Spain\n5 - Thailand\n6 - Turkey\n");

switch (answer) {
    case '0':
        countryAbstractFactory = new PolandAbstractFactory();
        break;
    case '1':
        countryAbstractFactory = new EgyptAbstractFactory();
        break;
    case '2':
        countryAbstractFactory = new GermanyAbstractFactory();
        break;
    case '3':
        countryAbstractFactory = new GreeceAbstractFactory();
        break;
    case '4':
        countryAbstractFactory = new SpainAbstractFactory();
        break;
    case '5':
        countryAbstractFactory = new ThailandAbstractFactory();
        break;
    case '6':
        countryAbstractFactory = new TurkeyAbstractFactory();
        break;
    default:
        throw new Exception("Incorrect input");
}

console.log(`Your answer is ${answer}`);
let availableVouchers = createAllPossibleVouchers(countryAbstractFactory);
await sortVouchers(availableVouchers);

for (let voucher of availableVouchers) {
    console.log(voucher.displayName());
}

const filterBuilder = new VoucherFilterBuilder(availableVouchers);
await filterBuilder.applyFilterByVoucherName();
await filterBuilder.applyFilterByTransportName();
await filterBuilder.applyFilterByMealsType();
await filterBuilder.applyFilterByNumberOfDays();
const selectedVouchers = filterBuilder.getFilteredResult();

console.log("Please select voucher.")

for (let index = 0; index < selectedVouchers.length; index++) {
    console.log(`${index} - ${selectedVouchers[index].displayName()}\n`);
}

answer = await consoleAdapter.ask("");

const selectedVoucher = selectedVouchers[Number(answer)];

console.log(`Congratulations! You've booked the following voucher: ${selectedVoucher.displayName()}\n`);