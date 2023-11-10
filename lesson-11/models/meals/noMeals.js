import { Meals } from "./meals.js"

class NoMeals extends Meals {
    constructor(name) {
        super(name);
    }
}

NoMeals.prototype.getPrice = function () {
    return 0;
}

export { NoMeals }