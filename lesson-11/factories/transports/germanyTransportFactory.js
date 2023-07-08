import { BUS, AIRPLANE, TRAIN } from "../../constants.js";
import { GermanyBus } from "../../models/transports/bus/germanyBus.js";
import { GermanyAirplane } from "../../models/transports/airplane/germanyAirplane.js";
import { GermanyTrain } from "../../models/transports/train/germanyTrain.js";

class GermanyTransportFactory {
    createTransport(transportType) {
        switch (transportType.toLowerCase()) {
            case BUS: return new GermanyBus(transportType);
            case AIRPLANE: return new GermanyAirplane(transportType);
            case TRAIN: return new GermanyTrain(transportType);
        }
    }
}

export { GermanyTransportFactory }