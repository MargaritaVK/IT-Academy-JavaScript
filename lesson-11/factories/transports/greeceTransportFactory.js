import { AIRPLANE, SHIP } from "../../constants.js";
import { GreeceAirplane } from "../../models/transports/airplane/greeceAirplane.js";
import { GreeceShip } from "../../models/transports/ship/greeceShip.js";

class GreeceTransportFactory {
    createTransport(transportType) {
        switch (transportType.toLowerCase()) {
            case AIRPLANE: return new GreeceAirplane(transportType);
            case SHIP: return new GreeceShip(transportType);
        }
    }
}

export { GreeceTransportFactory }