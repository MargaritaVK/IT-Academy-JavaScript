import { Meals } from "./meals.js"

class ThreeMeals extends Meals {
    constructor(name) {
        super(name);
    }
}

ThreeMeals.prototype.getPrice = function () {
    return 3;
}

export { ThreeMeals }