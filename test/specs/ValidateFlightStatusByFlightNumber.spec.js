/* eslint-disable no-undef */
import flightStatusHome from "../support/pages/FlightStatusHome.page";

describe("Flight Status of Eurowings flight for a particular route and all seven days - current day +/-3", () => {
   
    it("To verify the flight status by flight no - Verify the Flight Status Panel", () => {

        flightStatusHome.open().setWindow();
        flightStatusHome.fltStatus
            .clickCookiesButton().selectFlightNumberRadioButton().enterFlightNumber().selectCurrentDate()
            .searchFlightStatus();

        expect(flightStatusHome.fltStatus.verifyFlightStatus(), "Status of the Flight is available").to.exist;
    });

});