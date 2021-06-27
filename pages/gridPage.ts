import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get gridContainer() {
    return $(
      '[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]'
    );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }

  public static get primaryHeaderCols() {
    return $$('//span[@class="ag-header-group-text"]');
  }

  public static get side() {
    return $$('//span[@class="ag-column-select-column-label"]');
  }

  public static get sec() {
    return $$('//span[@ref="eText" and @class="ag-header-cell-text"]');
  }

  public static get names() {
    return $$('//span[@class="ag-cell-value"]');
  }
  
  public static get namesTextbox() {
    return $('//input[@class="ag-floating-filter-input"]');
  }

  public static get Oct() {
    return $('//span[@ref="eText" and text()="Oct"]');
  }

  public static get Language() {
    return $$('//div[text()="English"]');
  }
  

  public static get octoberWinnings() {
    return $$('//div[@col-id="oct" and @role="gridcell"]');
    //return $$('[col-id="oct"] [role="gridcell"]');
  }
  
  
  
}
