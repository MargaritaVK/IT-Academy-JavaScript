import { AIRPLANE, BUS, NO_MEALS, ONE_MEALS, TRAIN, TWO_MEALS } from "../constants.js";
import { PolandMealsFactory } from "../factories/meals/polandMealsFactory.js";
import { PolandTransportFactory } from "../factories/transports/polandTransportFactory.js";

class PolandAbstractFactory {
    createTransports() {
        const transportFactory = new PolandTransportFactory();
        return [ 
            transportFactory.createTransport(BUS), 
            transportFactory.createTransport(AIRPLANE), 
            transportFactory.createTransport(TRAIN) ];
    }

    createMeals() {
        const mealsFactory = new PolandMealsFactory();
        return [ 
            mealsFactory.createMeals(NO_MEALS),
            mealsFactory.createMeals(ONE_MEALS), 
            mealsFactory.createMeals(TWO_MEALS) ];
    }

    createNumberOfDays() {
        return [ 5, 7, 10, 14 ];
    }
}

export { PolandAbstractFactory }