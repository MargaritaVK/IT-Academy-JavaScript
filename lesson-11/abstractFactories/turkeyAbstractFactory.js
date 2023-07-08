import { AIRPLANE, NO_MEALS, ONE_MEALS, TWO_MEALS, THREE_MEALS } from "../constants.js";
import { TurkeyMealsFactory } from "../factories/meals/turkeyMealsFactory.js";
import { TurkeyTransportFactory } from "../factories/transports/turkeyTransportFactory.js";

class TurkeyAbstractFactory {
    createTransports() {
        const transportFactory = new TurkeyTransportFactory();
        return [  
            transportFactory.createTransport(AIRPLANE) ];
    }

    createMeals() {
        const mealsFactory = new TurkeyMealsFactory();
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

export { TurkeyAbstractFactory }