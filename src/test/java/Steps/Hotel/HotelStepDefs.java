package Steps.Hotel;

import BaseTests.BaseTestClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
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


    @And("^Update room in cart$")
    public void updateRoomInCart() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^User Selects Flexible Date Search$")
    public void userSelectsFlexibleDateSearch() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.openlandingpage();
        HotelStepDefsSupports.selectFlexDateRadio();
    }

    @And("^Select Market - Las Vegas$")
    public void selectMarketLasVegas() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Select Check-in & Checkout dates$")
    public void selectCheckInCheckoutDates() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

                HotelStepDefsSupports.selectMonth(2);//selects upcoming month

    }

    @And("^Room count (\\d+)$")
    public void roomCount(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Guest (\\d+) Adults,  (\\d+) Children$")
    public void guestAdultsChildren(int arg0, int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }



    @Then("^Verify Flex calendar page$")
    public void verifyFlexCalendarPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Select any rate from the table$")
    public void selectAnyRateFromTheTable() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click Select room button from Choose Your Check-out Date overlay$")
    public void clickSelectRoomButtonFromChooseYourCheckOutDateOverlay() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Selct Room Options$")
    public void selctRoomOptions() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Select room 'Forum Classic Room'$")
    public void selectRoomForumClassicRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^Verify Itinerary Page$")
    public void verifyItineraryPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Continue to Checkout$")
    public void continueToCheckout() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Trip Summary Page$")
    public void tripSummaryPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

 

    @And("^Remove room$")
    public void removeRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Payment Page$")
    public void paymentPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Fill Up the Guest Details$")
    public void fillUpTheGuestDetails() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Click on Search$")
    public void clickOnSearch() throws Throwable {

        HotelStepDefsSupports.clickSearchBtn();
    }

    @And("^Check the room details added to cart$")
    public void checkTheRoomDetailsAddedToCart() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


    @And("^Select Market - \"([^\"]*)\"$")
    public void selectMarket(String market) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectMarkets(market);
    }

    @And("^Room count \"([^\"]*)\"$")
    public void roomCount(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}

