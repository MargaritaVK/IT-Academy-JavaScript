import { AIRPLANE, BUS, SHIP, NO_MEALS, ONE_MEALS, TRAIN, TWO_MEALS, THREE_MEALS } from "../constants.js";
import { SpainMealsFactory } from "../factories/meals/spainMealsFactory.js";
import { SpainTransportFactory } from "../factories/transports/spainTransportFactory.js";

class SpainAbstractFactory {
    createTransports() {
        const transportFactory = new SpainTransportFactory();
        return [ 
            transportFactory.createTransport(BUS), 
            transportFactory.createTransport(AIRPLANE), 
            transportFactory.createTransport(TRAIN),
            transportFactory.createTransport(SHIP), ];
    }

    createMeals() {
        const mealsFactory = new SpainMealsFactory();
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

export { SpainAbstractFactory }