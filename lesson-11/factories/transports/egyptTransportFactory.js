import { AIRPLANE } from "../../constants.js";
import { EgyptAirplane } from "../../models/transports/airplane/egyptAirplane.js";

class EgyptTransportFactory {
    createTransport(transportType) {
        switch (transportType.toLowerCase()) {
            case AIRPLANE: return new EgyptAirplane(transportType);
        }
    }
}

export { EgyptTransportFactory }