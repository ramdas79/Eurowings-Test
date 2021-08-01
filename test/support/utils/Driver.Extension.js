/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { DEFAULT_TIMEOUT } from "./constants";

export default class Driver {
    static visit(url) {
        browser.url(url);
    }

    static click(selector, timeout = DEFAULT_TIMEOUT) {
        this.awaitIsDisplayed(selector, timeout);
        selector.click();

    }

    static scrollAndClick(selector, timeout = DEFAULT_TIMEOUT) {
        this.scrollIntoView(selector);
        this.click(selector, timeout);
    }

    static typeAndTabOff(input, selector, timeout = DEFAULT_TIMEOUT) {
        this.awaitIsDisplayed(selector, timeout);
        selector.setValue(input);
        // eslint-disable-next-line no-undef
        browser.keys("Tab");
    }

    static type(input, selector, timeout = DEFAULT_TIMEOUT) {
        this.awaitIsDisplayed(selector, timeout);
        selector.setValue(input);
    }

    static awaitIsDisplayed(selector, timeout = DEFAULT_TIMEOUT) {
        try {
            selector.waitForDisplayed(timeout);
            return true;
        } catch (e) {
            return false;
        }
    }

    static scrollIntoView(selector, scrollIntoViewOptions) {
        this.awaitIsDisplayed(selector);
        selector.scrollIntoView(scrollIntoViewOptions);
    }

    static getElementText(selector, _timeout = DEFAULT_TIMEOUT) {
        this.awaitIsDisplayed(selector);
        return selector.getElementText();
    }

    static textOf(selector) {
        this.awaitIsDisplayed(selector);
        return selector.getText();
    }

    static isDisplayed(selector) {
        return selector.isDisplayed();
    }

    static isDisplayedInViewport(selector) {
        return selector.isDisplayedInViewport();
    }

    static isSelected(selector) {
        return selector.isSelected();
    }

    static isClickable(selector) {
        return selector.isClickable();
    }

    static isEnabled(selector) {
        return selector.isEnabled();
    }
}
