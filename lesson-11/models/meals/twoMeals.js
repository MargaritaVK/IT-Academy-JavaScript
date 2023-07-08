import { Meals } from "./meals.js"

class TwoMeals extends Meals { 
    constructor(name) {
        super(name);
    }
}

TwoMeals.prototype.getPrice = function () {
    return 2;
}

export { TwoMeals }