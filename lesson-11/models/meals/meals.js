class Meals {
    constructor(name) {
        this.name = name;
    };
}

Meals.prototype.getPrice = function () {
    return 1;
}

export { Meals }