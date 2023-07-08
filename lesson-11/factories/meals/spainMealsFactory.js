import { NO_MEALS, ONE_MEALS, THREE_MEALS, TWO_MEALS } from "../../constants.js";
import { NoMeals } from "../../models/meals/noMeals.js";
import { OneMeals } from "../../models/meals/oneMeals.js";
import { TwoMeals } from "../../models/meals/twoMeals.js";
import { ThreeMeals } from "../../models/meals/threeMeals.js";

class SpainMealsFactory {
    createMeals(mealsType) {
        switch (mealsType) {
            case NO_MEALS:
                return new NoMeals(mealsType);
            case ONE_MEALS:
                return new OneMeals(mealsType);
            case TWO_MEALS:
                return new TwoMeals(mealsType);
            case THREE_MEALS:
                return new ThreeMeals(mealsType);
        }
    }
}

export { SpainMealsFactory }