import { BUS, AIRPLANE, TRAIN, SHIP } from "../../constants.js";
import { SpainBus } from "../../models/transports/bus/spainBus.js";
import { SpainAirplane } from "../../models/transports/airplane/spainAirplane.js";
import { SpainTrain } from "../../models/transports/train/spainTrain.js";
import { SpainShip } from "../../models/transports/ship/spainShip.js";

class SpainTransportFactory {
    createTransport(transportType) {
        switch (transportType.toLowerCase()) {
            case BUS: return new SpainBus(transportType);
            case AIRPLANE: return new SpainAirplane(transportType);
            case TRAIN: return new SpainTrain(transportType);
            case SHIP: return new SpainShip(transportType);
        }
    }
}

export { SpainTransportFactory }