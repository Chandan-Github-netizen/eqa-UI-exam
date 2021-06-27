import { expect, assert } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";


describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });



  it("Should validate Primary Column Headers", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * Using forEach loop to store primary Header column text into array
     * Using for loop to compare cells between expected and actual Header coulumn texts
     */

    var expectedHeader = ['Participant', 'Game of Choice', 'Performance', '', ''];
    var actualHeader = [];

    GridPage.primaryHeaderCols.forEach((el) => {
      actualHeader.push(el.getText());
    });
    console.log(expectedHeader);
    console.log(actualHeader);

    for (let i = 0; i <actualHeader.length; i++) {
      expect(expectedHeader[i]).to.be.equal(actualHeader[i]);
    }
  });



  it("Should validate Side Column Headers", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * Using forEach loop to store primary Header column text into array
     * Using forEach loop to store side Header column text into array
     * Using a nested loop to compare each element of primaryHeaderCols with each
     * element of sideHeaderCols
     * For every successful match count increases
     * If count value equals to length of primaryHeaderCols then it means successful validation
     */

    var count = 0;
    var sideHeaderCols = [];
    var topHeaderCols = [];

    GridPage.primaryHeaderCols.forEach((el) => {
      topHeaderCols.push(el.getText());
    });

    GridPage.side.forEach((el) => {
      sideHeaderCols.push(el.getText());
    });
    
    console.log(topHeaderCols);
    console.log(sideHeaderCols);

    for (let i = 0; i <topHeaderCols.length; i++) {
      for (let j = 0; j <sideHeaderCols.length; j++) {
        if(topHeaderCols[i]==sideHeaderCols[j])
        {
          count++;
        }
      }
    }
    
    expect(count).to.be.equal(topHeaderCols.length);

  });



  it("Should validate Secondary Column Headers", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * Using forEach loop to store secondary Header column text into array
     * Using forEach loop to store side Header column text into array
     * Using a nested loop to compare each element of secHeaderCols with each
     * element of sideHeaderCols
     * For every successful match count increases
     * If count value equals to length of secHeaderCols then it means successful validation
     */
    var count = 0;;
    var sideHeaderCols = [];
    var secHeaderCols = [];

    GridPage.sec.forEach((el) => {
      secHeaderCols.push(el.getText());
    });

    GridPage.side.forEach((el) => {
      sideHeaderCols.push(el.getText());
    });
    
    console.log(secHeaderCols);
    console.log(sideHeaderCols);
    for (let i = 0; i <secHeaderCols.length; i++) {
      for (let j = 0; j <sideHeaderCols.length; j++) {
        if(secHeaderCols[i]==sideHeaderCols[j])
      {
          count++;
        }
      }
    }
    
    expect(count).to.be.equal(secHeaderCols.length);

  });



  it("Should validate filtering of names", () => {
    
    GridPage.mainGrid.waitForDisplayed();

    /**
     * Any name is first entered in search box
     * Using forEach loop to checks if names are displayed
     * filterNames method is implemented in page.ts
     */
    
    Page.filterNames("Gil");
    Page.filterNames("Tony");
    Page.filterNames("Isabella");
    Page.filterNames("Poppy");

  });



  it("Should validate winnings in October", () => {
    GridPage.mainGrid.waitForDisplayed();
    
    /**
     * Partially completed
     * Scrolling horizontally so that October column is in view
     * Using forEach loop to store October winning numbers into array
     * Extracting $ and , from the figures
     * Applying condition on each of the figures
     */

    var arr = [];
    
    //scroll method to be implemented here
    
    GridPage.octoberWinnings.forEach((el) => {
      console.log(el);
      arr.push(el.getText());
    });

    for (let i = 0; i <arr.length; i++) {  
      arr[i]=arr[i].replace('$','').replace(',','');
    }

    for (let i = 0; i <arr.length; i++) {  
      expect(arr[i]).lessThan(5000);
    }
    
  });


});
