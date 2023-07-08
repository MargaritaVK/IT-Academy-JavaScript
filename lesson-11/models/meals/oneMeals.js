import { Meals } from "./meals.js"

class OneMeals extends Meals { 
    constructor(name) {
        super(name);
    }
}

OneMeals.prototype.getPrice = function () {
    return 1;
}

export { OneMeals }