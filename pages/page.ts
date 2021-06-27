import * as dotenv from "dotenv";
import { GridPage } from "../pages/gridPage";
import { expect, assert } from "chai";
dotenv.config();

export class Page {
  public static open() {
    browser.url(process.env.URL);
  }

  public static waitForElementTobeVisible(
    elementToVisible: WebdriverIO.Element
  ) {
    elementToVisible.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Element not Displayed",
    });
  }

  public static filterNames(name: String){
    GridPage.namesTextbox.setValue(name);
    GridPage.names.forEach((el) => {
        expect(el.isDisplayed()).to.eql(true);
    });
  }
  

}
