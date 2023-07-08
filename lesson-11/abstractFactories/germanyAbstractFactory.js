import { AIRPLANE, BUS, NO_MEALS, ONE_MEALS, TRAIN, TWO_MEALS, THREE_MEALS } from "../constants.js";
import { GermanyMealsFactory } from "../factories/meals/germanyMealsFactory.js";
import { GermanyTransportFactory } from "../factories/transports/germanyTransportFactory.js";

class GermanyAbstractFactory {
    createTransports() {
        const transportFactory = new GermanyTransportFactory();
        return [ 
            transportFactory.createTransport(BUS), 
            transportFactory.createTransport(AIRPLANE), 
            transportFactory.createTransport(TRAIN) ];
    }

    createMeals() {
        const mealsFactory = new GermanyMealsFactory();
        return [ 
            mealsFactory.createMeals(NO_MEALS),
            mealsFactory.createMeals(ONE_MEALS), 
            mealsFactory.createMeals(TWO_MEALS),
            mealsFactory.createMeals(THREE_MEALS)];
    }

    createNumberOfDays() {
        return [ 7, 10, 14 ];
    }
}

export { GermanyAbstractFactory }