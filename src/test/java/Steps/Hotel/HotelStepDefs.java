package Steps.Hotel;

import BaseTests.BaseTestClass;
import BaseTests.BaseTestClass.*;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
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
//   @After
//
// public static void quitallchrome(){
//     driver.quit();
//   }

    // 1st step



    //2nd step
    @And("^User selects market$")
    public void userSelectsMarket() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectMarket();

    }


    @And("^Update room in cart$")
    public void updateRoomInCart() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.updateRoomOptions();

    }

    @When("^User Selects Flexible Date Search$")
    public void userSelectsFlexibleDateSearch() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // HotelStepDefsSupports.openlandingpageRavail();
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
        HotelStepDefsSupports.verifyFlexCal();
    }

    @And("^Select any rate from the table$")
    public void selectAnyRateFromTheTable() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectAnyRate();
    }

    @And("^Click Select room button from Choose Your Check-out Date overlay$")
    public void clickSelectRoomButtonFromChooseYourCheckOutDateOverlay() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.chooseCheckoutOverlay();
    }

    @And("^Selct Room Options$")
    public void selctRoomOptions() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectRoomOptions();

    }

    @And("^Select room 'Forum Classic Room'$")
    public void selectRoomForumClassicRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectRoom();
    }

    @Then("^Verify Itinerary Page$")
    public void verifyItineraryPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.verifyItinPageMroom();
    }

    @And("^Continue to Checkout$")
    public void continueToCheckout() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.continueCheckOut();

    }



 

    @And("^Remove room$")
    public void removeRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.removeRoom();

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




    @And("^Select Market - \"([^\"]*)\"$")
    public void selectMarket(String market) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectMarkets(market);
    }

    @And("^Room count \"([^\"]*)\"$")
    public void roomCount(String rcnt) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //selectRoomNumber


        int vlue = Integer.parseInt(rcnt);

        vlue = vlue - 1 ;

        HotelStepDefsSupports.selectRcount( vlue);
    }

    @And("^Guest \"([^\"]*)\" Adults,  \"([^\"]*)\" Children$")
    public void guestAdultsChildren(String adult, String child) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //selectAdults1
                //selectChildren1

        int adultc = Integer.parseInt(adult);
        int childc = Integer.parseInt(child);
        adultc = adultc -1 ;

        HotelStepDefsSupports.selectAdult(adultc);
        HotelStepDefsSupports.selectChild(childc);



    }

    @And("^Check the room details added to cart as Room \"([^\"]*)\" and Guests \"([^\"]*)\"$")
    public void checkTheRoomDetailsAddedToCartAsRoomAndGuests(int roomc, String guestc) throws Throwable {
        HotelStepDefsSupports.verifyroomguests( roomc, guestc);
    }

    @And("^Verify Payment Page$")
    public void verifyPaymentPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.userClickPopup();
        HotelStepDefsSupports.verifyPaymentPage();
    }

    @And("^Select Property \"([^\"]*)\"$")
    public void selectProperty(String locations) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectLocation(locations);
    }

    @And("^Select Dates from the calendar$")
    public void selectDatesFromTheCalendar() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectAnyRateCal();
    }

    @And("^Click on Select Room$")
    public void clickOnSelectRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.clickSelectRoom();
    }



    @And("^Select room Fab Room  (\\d+) King  Non-Smoking$")
    public void selectRoomFabRoomKingNonSmoking(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectRoom();
    }



    @And("^Select a room from UPSELL listing and click Upgrade$")
    public void selectARoomFromUPSELLListingAndClickUpgrade() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.continueUpgrade();
    }




    @Then("^Check whether the room added was upgraded with the new room$")
    public void checkWhetherTheRoomAddedWasUpgradedWithTheNewRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.checkRoomAdded();
    }

    @And("^Verify Itinerary Page for multi room$")
    public void verifyItineraryPageForMultiRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.verifyItinPageMultiRoom();
    }

    @And("^Verify Cart has \"([^\"]*)\" room$")
    public void verifyCartHasRoom(int nrooms) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.verifyCartHasnRooms(nrooms);
    }


    @Given("^Open \"([^\"]*)\" enableshow=hr$")
    public void openEnableshowHr(String hrurl) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.openURL(hrurl);
    }


    @Given("^Open \"([^\"]*)\" enableshow=true$")
    public void openEnableshowTrue(String showsurl) throws Throwable {

        HotelStepDefsSupports.openURL(showsurl);


    }
    

    @Given("^User opens given ([^\"]*)$")
    public void userOpensGivenUrls(String hrurl) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.openURL(hrurl);
    }

    @And("^Verify flex property listing page$")
    public void verifyFlexPropertyListingPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.verifyFlexPropertyCal();
    }


    @Given("^User tests in given ([^\"]*)$")
    public void userTestsInGivenBrowsers(String browsers) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.openBrowser(browsers);
    }

    @And("^User close browser$")
    public void userCloseBrowser() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.quitallchrome();
    }

    @And("^Select any Room$")
    public void selectAnyRoom() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectAnyRatesBookNowBtnListingPage();    }

    @Then("^Check whether user able to see the Refundable and Non Refundable rates in the listing page$")
    public void checkWhetherUserAbleToSeeTheRefundableAndNonRefundableRatesInTheListingPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.verifyNonRefundableListing();
    }

    @Then("^Check whether user able to view the ratings and review details for all properties from the list$")
    public void checkWhetherUserAbleToViewTheRatingsAndReviewDetailsForAllPropertiesFromTheList() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.verifyRatingandReview();
    }



    @And("^User proceed to HRlanding page$")
    public void userProceedToHRlandingPage() throws Throwable {

        HotelStepDefsSupports.userProceedToHRlandingPage();

    }









    @And("^User select checkin and checkout date$")
    public void userSelectCheckinAndCheckoutDate() throws Throwable {

        HotelStepDefsSupports.userSelectCheckinAndCheckoutDate();


    }

    @And("^Click on Search from HRlanding page$")
    public void clickOnSearchFromHRlandingPage() throws Throwable {

        HotelStepDefsSupports.clickOnSearchFromHRlandingPage();


    }

    @And("^User click on Find ticket from HR listing page$")
    public void userClickOnFindTicketFromHRListingPage() throws Throwable {

        HotelStepDefsSupports.userClickOnFindTicketFromHRListingPage();

    }

    @And("^User proceed to HRticketselection page$")
    public void userProceedToHRticketselectionPage() throws Throwable {

        HotelStepDefsSupports.userProceedToHRticketselectionPage();




    }

    @And("^User click on Findtickets to proceed to itierary page$")
    public void userClickOnFindticketsToProceedToItieraryPage() throws Throwable {

        HotelStepDefsSupports.userClickOnFindticketsToProceedToItieraryPage();




    }

    @And("^User proceed to showslanding page$")
    public void userProceedToShowslandingPage() throws Throwable {

        HotelStepDefsSupports.userProceedToShowslandingPage();



    }


}




