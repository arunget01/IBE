package Steps.Hotel;

import BaseTests.BaseTestClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

/**
 * Created by ADMIN on 1/18/2017.
 */
public class HotelStepDefs extends BaseTestClass {

    // public static WebDriver driver ;

    // HotelStepDefsFunctions hhsp ;

   /* @Given("^user go to landing page$")
    public void userGoToLandingPage( ) throws Throwable {
        openChromeBrowser();
        //HotelStepDefsFunctions.loadLandingPages();
     //
    }  */


    // 1st step
    @Given("^user go to landing page$")
    public void userGoToLandingPage() throws Throwable {
        openChromeBrowser();
        HotelStepDefsSupports.openlandingpage();
    }


    //2nd step
    @And("^User selects market$")
    public void userSelectsMarket() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectMarket();

    }



}

