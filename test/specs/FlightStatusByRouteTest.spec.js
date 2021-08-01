/* eslint-disable no-undef */
import flightStatusHome from "../support/pages/FlightStatusHome.page";

describe("Flight Status of Eurowings flight for a particular route and all seven days - current day +/-3", () => {
   
    it("@Flight Status To verify the flight status of current day - Component header verification", () => {
        
        flightStatusHome.open().setWindow();
        flightStatusHome.fltStatus
            .clickCookiesButton().selectDepAirport().selectArrAirport().selectCurrentDate()
            .searchFlightStatus();
            
        expect(flightStatusHome.fltStatus.getFlightSearchStatusHeading(), "Flight status header is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getLatestUpdateLinkDisplay(), " The flight status latest update time is shown").to.be.true;
        expect(flightStatusHome.fltStatus.getUpdateButtonDisplay(), "The option for refreshing the status is shwn").to.be,true;
        expect(flightStatusHome.fltStatus.getCalendarlistPanel(), "Calendar list panel is displayed").to.be.true;
    });
    
    it("@Flight Status To verify the flight status of current day - Flight Status Panel verification", () => {
        
        flightStatusHome.open().setWindow();
        flightStatusHome.fltStatus
            .selectDepAirport().selectArrAirport().selectCurrentDate()
            .searchFlightStatus();
        
        expect(flightStatusHome.fltStatus.getFlightStatusPanel(), "Flights are listed in the status Panel").to.be.true;
        expect(flightStatusHome.fltStatus.getDepartureInfo(), "Departure time is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getArrivalInfo(), "Flight arrival time is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightRoute(), "Flight route is displayed in the panel").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightNumber(), "Flight Number is available in the Flight status").to.be.true;
        expect(flightStatusHome.fltStatus.getDepartureGate(), "Departure Gate is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightStatus(), "Status of the Flight is available").to.be.true;
    });

    it("Verify Flight status of current day and next 3 days by selecting date from the calendar", () => {
        /*To execute test individually , please uncomment the below steps*/

        // flightStatusHome.open().setWindow();
        // flightStatusHome.fltStatus
        //        .selectDepAirport().selectArrAirport().selectCurrentDate()
        //        .searchFlightStatus();

        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentPlusNextThreeDays(5), "Flight status is displayed for current day ").to.exist;
        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentPlusNextThreeDays(6), "Flight status is displayed for next day").to.exist;
        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentPlusNextThreeDays(6), "Flight status is displayed for current day + 2").to.exist;
        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentPlusNextThreeDays(6), "Flight status is displayed for current day  + 3 ").to.exist;
    });
    
    it("Verify Flight status of current day and previous three days by selecting date from the calander", () => {
        /*To execute test individually , please uncomment the below steps*/
        
        // flightStatusHome.open().setWindow();
        // flightStatusHome.fltStatus
        //     .clickCookiesButton().selectDepAirport().selectArrAirport().selectCurrentDate()
        //     .searchFlightStatus();

        flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentAndPreviousThreeDays(2);
        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentAndPreviousThreeDays(5), "Flight status is displayed for current day ").to.exist;
        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentAndPreviousThreeDays(4), "Flight status is displayed for previous day").to.exist;
        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentAndPreviousThreeDays(4), "Flight status is displayed for current day - 2 ").to.exist;
        expect(flightStatusHome.fltStatus.getFlightStatusFromCalanderListCurrentAndPreviousThreeDays(4), "Flight status is displayed for current day -3 ").to.exist;

    });

    it("@Flight Status - To verify the Flight Status of previos day - Verify the Flight status Panel", () => {

        //    flightStatusHome.open().setWindow();
        //    flightStatusHome.fltStatus
        //         .clickCookiesButton().clickCloseButton().selectDepAirport().selectArrAirport().selectPrevDay()
        //         .searchFlightStatus();
        
        flightStatusHome.fltStatus.selectPrevDay().searchFlightStatus();

        expect(flightStatusHome.fltStatus.getFlightStatusPanel(), "Flights are listed in the status Panel").to.be.true;
        expect(flightStatusHome.fltStatus.getDepartureInfo(), "Departure time is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getArrivalInfo(), "Flight arrival time is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightRoute(), "Flight route is displayed in the panel").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightNumber(), "Flight Number is available in the Flight status").to.be.true;
        expect(flightStatusHome.fltStatus.getDepartureGate(), "Departure Gate is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightStatus(), "Status of the Flight is available").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightStatusInfo(), "Flight Status should not be ontime ").not.to.be.equal("On time");
    });
   
    it("To verify the Flight Status of Next day - Verify the Flight status Panel", () => {

        // flightStatusHome.open().setWindow();
        // flightStatusHome.fltStatus
        //      .clickCookiesButton().selectDepAirport().selectArrAirport()
        //      .selectNextDay().searchFlightStatus();

       
        flightStatusHome.fltStatus.selectNextDay().searchFlightStatus();
    
        expect(flightStatusHome.fltStatus.getFlightStatusPanel(), "Flights are listed in the status Panel").to.be.true;
        expect(flightStatusHome.fltStatus.getDepartureInfo(), "Departure time is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getArrivalInfo(), "Flight arrival time is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightRoute(), "Flight route is displayed in the panel").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightNumber(), "Flight Number is available in the Flight status").to.be.true;
        expect(flightStatusHome.fltStatus.getDepartureGate(), "Departure Gate is displayed").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightStatus(), "Status of the Flight is available").to.be.true;
        expect(flightStatusHome.fltStatus.getFlightStatusInfo(), "Status of the flight should not be Arrived").not.to.be.equal("Arrived");
    });
});