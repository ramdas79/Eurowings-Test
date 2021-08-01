import Page from "./Page";
import PARAMS from "../utils/constants";
import FltStats from "./component/FltStats.page";
import Utilities from "../utils/utilities";

class FlightStatusHome extends Page {

    constructor() {
        super();
        this.fltStatus = new FltStats();
        this.utils = new Utilities();
    }

    open(resource = PARAMS.URL_PARAMS) {
        this.driver.visit(resource);
        return this;
    }
}
export default new FlightStatusHome();