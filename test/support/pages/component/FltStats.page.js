/* eslint-disable getter-return */
/* eslint-disable no-undef */
import Page from "../Page";
import constants from "../../utils/constants";
import FlightStatusHome from "../FlightStatusHome.page";

export default class FltStats extends Page {
    get cookieButton() { return $(".cookie-consent--cta-accept.cookie-consent--hide-expanded.a-cta.a-cta-prio1"); }
    get closeButton() { return $(".cv-myew-flyout__content .cv-myew-flyout__close-btn"); }
    get originAirport() { return $(".o-search-flight-status__flight-search__form >div:nth-child(1) >div:nth-child(1) >div:nth-child(2) .o-compact-search__cta-button"); }
    get destinationAirport() { return $(".o-search-flight-status__flight-search__form >div:nth-child(1) >div:nth-child(1) >div:nth-child(3) .o-compact-search__cta-button"); }
    get datePicker() { return $(".m-form-datepicker"); }
    currentDate(date) { return $("input[value='" + date + "']"); }
    get showFlightButton() { return $("button[class='a-cta a-cta-prio1'] span[class='a-cta__container']"); }
    get arrAirportInput() { return $(".a-input-text__input.m-form-autocomplete__input-field.a-input-text__input--deco-icon"); }
    get flightNotFound() { return $(".o-search-flight-status__display-info .a-headline.a-headline--h4"); }
    get flightStatusResultHeading() { return $(".a-headline.a-headline--h3.t-spacing--2"); }
    get latestUpdateLink() { return $(".a-paragraph.a-paragraph--disabled.a-paragraph--left"); }
    get updateButton() { return $(".o-search-flight-status__update-info .a-cta.a-cta-prio3"); }
    get dateList() { return $(".o-search-flight-status__date-navigation.t-spacing--6"); }
    get flightStatusCard() { return $(".o-search-flight-status__flight-list-cards .o-search-flight-status__card:nth-child(1)"); }
    get flightStatus() { return $(".o-search-flight-status__flight-list-cards .o-search-flight-status__card:nth-child(1) .o-search-flight-status__card-info-group:nth-child(3) div:nth-child(2)"); }
    get gateInfo() { return $(".o-search-flight-status__flight-list-cards .o-search-flight-status__card:nth-child(1) .o-search-flight-status__card-info-group:nth-child(3) div:nth-child(1)"); }
    get flightNo() { return $(".o-search-flight-status__flight-list-cards .o-search-flight-status__card:nth-child(1) .o-search-flight-status__card-info-group:nth-child(2) div:nth-child(1)"); }
    get searchByFlightNo() { return $(".m-fieldset-radio-group .m-fieldset-radio-group__content .m-fieldset-radiobutton:nth-child(2) .m-form-radiobutton__input"); }
    get searchByRoute() { return $(".m-fieldset-radio-group__content .m-fieldset-radiobutton:nth-child(1) .m-form-radiobutton__input"); }
    get flghtRoute() { return $(".o-search-flight-status__flight-list-cards .o-search-flight-status__card:nth-child(1) .o-search-flight-status__card-info-group:nth-child(2) div:nth-child(1)"); }
    get depTime() { return $(".o-search-flight-status__flight-list-cards .o-search-flight-status__card:nth-child(1) .detail-section:nth-child(1)"); }
    get arrTime() { return $(".o-search-flight-status__flight-list-cards .o-search-flight-status__card:nth-child(1) .detail-section:nth-child(2)"); }
    get flightNoTextfield() { return $(".form-content .o-search-flight-status__flight-search--flight-number"); }
    get flightNoInput() { return $(".o-search-flight-status__flight-search__form .a-input-text__input.m-form-mask__input-field.a-input-text__input--deco-icon"); }
    calendarList(date) { return $(".o-search-flight-status__date-navigation.t-spacing--6 .o-search-flight-status__date-navigation__list li:nth-child(" + date + ")"); }
    get calendarList1() { return $(".o-search-flight-status__date-navigation.t-spacing--6 .o-search-flight-status__date-navigation__list li:nth-child(6)"); }
    get flightNoClearButton() { return $(".o-search-flight-status__flight-search--flight-number .m-form-mask__clear-button"); }

    clickCookiesButton() {
        this.driver.click(this.cookieButton);
        return this;
    }

    clickCloseButton() {
        try {
            this.driver.click(this.closeButton);
            return this;
        } catch (error) {
            this.selectDepAirport();
        }
    }

    selectDepAirport() {
        this.driver.click(this.originAirport);
        this.driver.typeAndTabOff(
            constants.DEPARTURE_AIRPORT,
            this.arrAirportInput
        );
        return this;
    }

    selectArrAirport() {
        this.driver.typeAndTabOff(constants.ARRIVAL_AIRPORT, this.arrAirportInput);
        return this;
    }

    selectCurrentDate() {
        this.driver.click(this.datePicker);
        this.driver.click(this.currentDate(FlightStatusHome.utils.getDate(0)));
        return this;
    }

    selectFlightNumberRadioButton() {
        this.driver.click(this.searchByFlightNo);
        return this;
    }

    selectRouteRadioButton() {
        this.driver.scrollIntoView(this.searchByRoute);
        this.driver.click(this.searchByRoute);
        return this;
    }

    enterFlightNumber() {
        this.driver.click(this.flightNoTextfield);
        this.driver.type(constants.FLIGHT_NUMBER, this.flightNoInput);
        return this;
    }

    IsSearchButtonClickable() {
        return this.driver.isClickable(this.showFlightButton);
    }

    clearFlightNo() {
        this.driver.click(this.flightNoClearButton);
    }

    selectNextDay() {
        this.driver.click(this.datePicker);
        this.driver.click(this.currentDate(FlightStatusHome.utils.getDate(1)));
        return this;
    }

    selectPrevDay() {
        this.driver.click(this.datePicker);
        this.driver.click(this.currentDate(FlightStatusHome.utils.getDate(-1)));
        return this;
    }

    selectNewDay() {
        this.driver.click(this.datePicker);
        this.driver.click(this.currentDate(FlightStatusHome.utils.getDate(2)));
        return this;
    }

    searchFlightStatus() {
        this.driver.click(this.showFlightButton);
        return this;
    }

    getFlightSearchStatusHeading() {
        return this.driver.isDisplayed(this.flightStatusResultHeading);
    }

    getLatestUpdateLinkDisplay() {
        return this.driver.isDisplayed(this.latestUpdateLink);
    }

    getUpdateButtonDisplay() {
        return this.driver.isDisplayed(this.updateButton);
    }

    getCalendarlistPanel() {
        return this.driver.isDisplayed(this.dateList);
    }

    getDepartureInfo() {
        return this.driver.isDisplayed(this.depTime);
    }

    getArrivalInfo() {
        return this.driver.isDisplayed(this.arrTime);
    }

    getFlightRoute() {
        return this.driver.isDisplayed(this.flghtRoute);
    }

    getFlightNumber() {
        return this.driver.isDisplayed(this.flightNo);
    }

    getDepartureGate() {
        return this.driver.isDisplayed(this.gateInfo);
    }

    getFlightStatus() {
        return this.driver.isDisplayed(this.flightStatus);
    }

    getFlightStatusInfo() {
        return this.driver.textOf(this.flightStatus);
    }

    getFlightStatusPanel() {
        this.driver.click(this.flightStatusCard);
        return this.driver.isDisplayed(this.flightStatusCard);
    }

    getFlightStatusFromCalanderListCurrentPlusNextThreeDays(count) {
        try {
            this.driver.click(this.calendarList(count));
            return this.driver.textOf(this.flightStatus);
        } catch (error) {
            this.driver.click(this.flightNotFound);
            return this.driver.isDisplayed(this.flightNotFound);
        }
    }

    getFlightStatusFromCalanderListCurrentAndPreviousThreeDays(count) {
        try {
            this.driver.click(this.calendarList(count));
            return this.driver.textOf(this.flightStatus);
        } catch (error) {
            this.driver.click(this.flightNotFound);
            return this.driver.textOf(this.flightNotFound);
        }
    }

    verifyFlightStatus() {
        try {
            return this.driver.textOf(this.flightStatus);
        } catch (error) {
            this.driver.click(this.flightNotFound);
            return this.driver.textOf(this.flightNotFound);
        }
    }
}
