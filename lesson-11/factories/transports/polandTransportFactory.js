import { BUS, AIRPLANE, TRAIN } from "../../constants.js";
import { PolandBus } from "../../models/transports/bus/polandBus.js";
import { PolandAirplane } from "../../models/transports/airplane/polandAirplane.js";
import { PolandTrain } from "../../models/transports/train/polandTrain.js";

class PolandTransportFactory {
    createTransport(transportType) {
        switch (transportType.toLowerCase()) {
            case BUS: return new PolandBus(transportType);
            case AIRPLANE: return new PolandAirplane(transportType);
            case TRAIN: return new PolandTrain(transportType);
        }
    }
}

export { PolandTransportFactory }