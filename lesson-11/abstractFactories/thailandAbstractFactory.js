import { AIRPLANE, NO_MEALS, ONE_MEALS, SHIP, TWO_MEALS, THREE_MEALS } from "../constants.js";
import { ThailandMealsFactory } from "../factories/meals/thailandMealsFactory.js";
import { ThailandTransportFactory } from "../factories/transports/thailandTransportFactory.js";

class ThailandAbstractFactory {
    createTransports() {
        const transportFactory = new ThailandTransportFactory();
        return [  
            transportFactory.createTransport(AIRPLANE), 
            transportFactory.createTransport(SHIP) ];
    }

    createMeals() {
        const mealsFactory = new ThailandMealsFactory();
        return [ 
            mealsFactory.createMeals(NO_MEALS),
            mealsFactory.createMeals(ONE_MEALS), 
            mealsFactory.createMeals(TWO_MEALS),
            mealsFactory.createMeals(THREE_MEALS) ];
    }

    createNumberOfDays() {
        return [ 7, 10, 14 ];
    }
}

export { ThailandAbstractFactory }