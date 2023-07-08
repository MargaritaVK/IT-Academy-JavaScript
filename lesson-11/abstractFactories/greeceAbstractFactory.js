import { AIRPLANE, SHIP, NO_MEALS, ONE_MEALS, TWO_MEALS, THREE_MEALS } from "../constants.js";
import { GreeceMealsFactory } from "../factories/meals/greeceMealsFactory.js";
import { GreeceTransportFactory } from "../factories/transports/greeceTransportFactory.js";

class GreeceAbstractFactory {
    createTransports() {
        const transportFactory = new GreeceTransportFactory();
        return [  
            transportFactory.createTransport(AIRPLANE), 
            transportFactory.createTransport(SHIP) ];
    }

    createMeals() {
        const mealsFactory = new GreeceMealsFactory();
        return [ 
            mealsFactory.createMeals(NO_MEALS),
            mealsFactory.createMeals(ONE_MEALS), 
            mealsFactory.createMeals(TWO_MEALS),
            mealsFactory.createMeals(THREE_MEALS)];;
    }

    createNumberOfDays() {
        return [ 7, 10, 14 ];
    }
}

export { GreeceAbstractFactory }