class Voucher {
    constructor(name, transport, meals, numberOfDays, coefficient) {
        this.name = name;
        this.transport = transport;
        this.meals = meals;
        this.numberOfDays = numberOfDays;
        this.price = this.meals.getPrice() * this.numberOfDays * coefficient + this.transport.getPrice();
    }

    displayName = function() {
        return `Voucher name: ${this.name}; Transport name: ${this.transport.name}; Meals type: ${this.meals.name}; Number of days: ${this.numberOfDays}; Price: ${this.price}`;
    }
}

export { Voucher }