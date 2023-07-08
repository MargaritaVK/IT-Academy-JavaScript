import { AIRPLANE, NO_MEALS, ONE_MEALS, TWO_MEALS, THREE_MEALS } from "../constants.js";
import { EgyptMealsFactory } from "../factories/meals/egyptMealsFactory.js";
import { EgyptTransportFactory } from "../factories/transports/egyptTransportFactory.js";

class EgyptAbstractFactory {
    createTransports() {
        const transportFactory = new EgyptTransportFactory();
        return [  
            transportFactory.createTransport(AIRPLANE) ];
    }

    createMeals() {
        const mealsFactory = new EgyptMealsFactory();
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

export { EgyptAbstractFactory }