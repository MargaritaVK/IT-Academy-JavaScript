import { AIRPLANE } from "../../constants.js";
import { TurkeyAirplane } from "../../models/transports/airplane/turkeyAirplane.js";

class TurkeyTransportFactory {
    createTransport(transportType) {
        switch (transportType.toLowerCase()) {
            case AIRPLANE: return new TurkeyAirplane(transportType);
        }
    }
}

export { TurkeyTransportFactory }