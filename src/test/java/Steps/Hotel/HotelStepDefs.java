package Steps.Hotel;

import BaseTests.BaseTestClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by ADMIN on 1/18/2017.
 */
public class HotelStepDefs extends BaseTestClass {

    // public static WebDriver driver ;

    // HotelStepDefsSupport hhsp ;

    @Given("^user go to landing page$")
    public void userGoToLandingPage( ) throws Throwable {
        openChromeBrowser();
        HotelStepDefsSupport.loadLandingPages();
     //
    }


    @And("^User selects Exact date$")
    public void userSelectsExactDate() throws Throwable {
        System.out.println("User selected Exct date search");
        HotelStepDefsSupport.loadLandingPages();


    }

    @And("^User selects below \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userSelectsBelowAnd(String arg0, String arg1) throws Throwable {
        System.out.println("User Selected Markets =" +arg0+ "and Hotel ="+arg1);
        HotelStepDefsSupport.loadLandingPages();



    }

    @And("^User selectes dates which is (\\d+) month head$")
    public void userSelectesDatesWhichIsMonthHead(int arg0) throws Throwable {
        System.out.println("User selected dates");
        HotelStepDefsSupport.loadLandingPages();

    }

    @When("^User click on Search$")
    public void userClickOnSearch() throws Throwable {
        System.out.println("User clicked search button");
        HotelStepDefsSupport.loadLandingPages();

    }

    @Then("^Search results should be displayed$")
    public void searchResultsShouldBeDisplayed() throws Throwable {
        HotelStepDefsSupport.closeBrowser();
        HotelStepDefsSupport.quitDriver();
        System.out.println("Search results displayed");
    }

    @And("^User selectes dates which is one month head$")
    public void userSelectesDatesWhichIsOneMonthHead() throws Throwable {
        System.out.println("User selected dates");
        HotelStepDefsSupports.hotelHomapageurlx();
    }
}
