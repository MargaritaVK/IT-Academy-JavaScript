import { AIRPLANE, SHIP } from "../../constants.js";
import { ThailandAirplane} from "../../models/transports/airplane/thailandAirplane.js";
import { ThailandShip } from "../../models/transports/ship/thailandShip.js";

class ThailandTransportFactory {
    createTransport(transportType) {
        switch (transportType.toLowerCase()) {
            case AIRPLANE: return new ThailandAirplane(transportType);
            case SHIP: return new ThailandShip(transportType);
        }
    }
}

export { ThailandTransportFactory }