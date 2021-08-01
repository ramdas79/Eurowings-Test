/* eslint-disable no-undef */
import flightStatusHome from "../support/pages/FlightStatusHome.page";

describe("Flight Status of Eurowings flight for a particular route and all seven days - current day +/-3", () => {
   
    it("To validate search button for mandatory field selection" , () => {

        flightStatusHome.open().setWindow();
        flightStatusHome.fltStatus
            .clickCookiesButton().selectDepAirport().selectArrAirport();
 
        expect(flightStatusHome.fltStatus.IsSearchButtonClickable(), "Search Button is disabled").to.be.true;
    });
});