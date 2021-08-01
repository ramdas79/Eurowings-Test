/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Driver from "../utils/Driver.Extension";
export default class Page{
    // eslint-disable-next-line linebreak-style
    constructor() {
        this.driver = Driver;
    }
    setWindow() {
        browser.maximizeWindow();
        
    }

    cleanSession() {
        this.driver.deleteAllCookies();
        this.driver.refresh();
    }

    refresh() {
        this.driver.refresh();
    }
}