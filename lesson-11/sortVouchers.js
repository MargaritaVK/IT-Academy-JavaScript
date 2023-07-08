import { UserConsoleAdapter } from "./adapters/userConsoleAdapter.js";

function sortByField(a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
}

export async function sortVouchers(availableVouchers) {
    let consoleAdapter = new UserConsoleAdapter();
    let sortType = await consoleAdapter.ask("Select column to sort?\n0 - voucher type\n1 - transport type\n2 - meals type\n3 - number of days\n4 - price\n");
    let sortOrder = await consoleAdapter.ask("Select type of sorting?\n0 - ASC\n1 - DESC\n");

    switch (sortType) {
        case '0':
            availableVouchers = sortOrder === 0 ?
                availableVouchers.sort((a, b) => sortByField(a.name, b.name)) :
                availableVouchers.sort((a, b) => sortByField(a.name, b.name)).reverse();
            break;
        case '1':
            availableVouchers = sortOrder === 0 ?
                availableVouchers.sort((a, b) => sortByField(a.transport.name, b.transport.name)) :
                availableVouchers.sort((a, b) => sortByField(a.transport.name, b.transport.name)).reverse();
            break;
        case '2':
            availableVouchers = sortOrder === 0 ?
                availableVouchers.sort((a, b) => sortByField(a.meals.name, b.meals.name)) :
                availableVouchers.sort((a, b) => sortByField(a.meals.name, b.meals.name)).reverse();
            break;
        case '3':
            availableVouchers = sortOrder === 0 ?
                availableVouchers.sort((a, b) => sortByField(a.numberOfDays, b.numberOfDays)) :
                availableVouchers.sort((a, b) => sortByField(a.numberOfDays, b.numberOfDays)).reverse();
            break;
        case '4':
            availableVouchers = sortOrder === 0 ?
                availableVouchers.sort((a, b) => sortByField(a.price, b.price)) :
                availableVouchers.sort((a, b) => sortByField(a.price, b.price)).reverse();
            break;
        default:
            throw new Exception("Incorrect input");
    }
}