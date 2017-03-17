package Steps.Hotel;

import BaseTests.BaseTestClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by asashidharan on 2/13/2017.
 */
public class MarketSearch extends BaseTestClass {


//    @Given("^User is in landing page$")
//    public void userIsInLandingPage() throws Throwable {
//
//        HotelStepDefsSupports.openlandingpage();
//
//    }

    @And("^User enter Checkin & Checkout dates$")
    public void userEnterCheckinCheckoutDates() throws Throwable {


        HotelStepDefsSupports.userEnterCheckinCheckoutDates();
    }

    @And("^User enters promotion$")
    public void userEntersPromotion() throws Throwable {

        HotelStepDefsSupports.userEntersPromotion();

    }


    @And("^User verify Market Listing Page$")
    public void userVerifyMarketListingPage() throws Throwable {

        HotelStepDefsSupports.verifyMarketListing();


    }

    @And("^User select Property  Flamingo Las Vegas$")
    public void userSelectPropertyFlamingoLasVegas() throws Throwable {

        HotelStepDefsSupports.userselectspropertyFlamingo();


    }

    @And("^User  verify Room Listing Page$")
    public void userVerifyRoomListingPage() throws Throwable {

        HotelStepDefsSupports.verifyRoomListing();

    }

    @And("^User select accessibility filter$")
    public void userSelectAccessibilityFilter() throws Throwable {

        HotelStepDefsSupports.selectaccessibilityfilter();

    }


    @And("^User select Room$")
    public void userSelectRoom() throws Throwable {

        HotelStepDefsSupports.userSelectRoom();

    }

    @And("^User verify Trip Summary Page$")
    public void userVerifyTripSummaryPage() throws Throwable {

        HotelStepDefsSupports.userVerifyTripSummaryPage();

    }


//    @And("^User remove room from cart$")
//    public void userRemoveRoomFromCart() throws Throwable {
//
//        HotelStepDefsSupports.userRemoveRoomFromCart();


    @And("^User upgrade room in cart$")
    public void userUpgradeRoomInCart() throws Throwable {
        HotelStepDefsSupports.userUpgradeRoomInCart();
    }


    @And("^User click on continue to Checkout$")
    public void userClickOnContinueToCheckout() throws Throwable {

        HotelStepDefsSupports.userClickOnContinueToCheckout();


    }


    @And("^User adds BoB Voucher to cart$")
    public void userAddsBoBVoucherToCart() throws Throwable {

        HotelStepDefsSupports.userAddsBoBVoucherToCart();



    }


    @And("^User remove room from cart$")
    public void userRemoveRoomFromCart() throws Throwable {

        HotelStepDefsSupports.userRemoveRoomFromCart();



    }

    @Then("^User verify the payment page$")
    public void userVerifyThePaymentPage() throws Throwable {

        HotelStepDefsSupports.userClickPopup();



    }

    @And("^User select room filters$")
    public void userSelectRoomFilters() throws Throwable {

        HotelStepDefsSupports.userSelectRoomFilters();



    }

    @And("^User add restaurant to cart$")
    public void userAddRestaurantToCart() throws Throwable {


        HotelStepDefsSupports.userAddRestaurantToCart();


    }

    @And("^User select the Month$")
    public void userSelectTheMonth() throws Throwable {

        HotelStepDefsSupports.selectMonth(1);//selects upcoming month

    }

    @And("^User select Dates from the calendar$")
    public void userSelectDatesFromTheCalendar() throws Throwable {

        HotelStepDefsSupports.userSelectDatesFromTheCalendar();

    }

    @And("^User click on Get Trip price button$")
    public void userClickOnGetTripPriceButton() throws Throwable {

        HotelStepDefsSupports.userClickOnGetTripPriceButton();




    }

    @When("^User Select Flexible Date Search$")
    public void userSelectFlexibleDateSearch() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.selectFlexDateRadio();
    }

    @And("^User click on Book it from pricing details overlay$")
    public void userClickOnBookItFromPricingDetailsOverlay() throws Throwable {

        HotelStepDefsSupports.userClickOnBookItFromPricingDetailsOverlay();




    }

    @And("^Verify whether the Deal applied banner is shown in Rate Calendar page$")
    public void verifyWhetherTheDealAppliedBannerIsShownInRateCalendarPage() throws Throwable {

        HotelStepDefsSupports.verifyWhetherTheDealAppliedBannerIsShownInRateCalendarPage();


    }


    @And("^User clicks on TR user login button$")
    public void userClicksOnTRUserLoginButton() throws Throwable {


        HotelStepDefsSupports.userClicksOnTRUserLoginButton();

    }

    @And("^User enters TR user user name and password$")
    public void userEntersTRUserUserNameAndPassword() throws Throwable {

        HotelStepDefsSupports.userEntersTRUserUserNameAndPassword();

    }

    @And("^User clicks on siginin button in login pop$")
    public void userClicksOnSigininButtonInLoginPop() throws Throwable {

        HotelStepDefsSupports.userClicksOnSigininButtonInLoginPop();




    }

    @And("^User navigates to myoffers page$")
    public void userNavigatesToMyoffersPage() throws Throwable {

        HotelStepDefsSupports.userNavigatesToMyoffersPage();



    }

    @And("^User selects property from myoffers page$")
    public void userSelectsPropertyFromMyoffersPage() throws Throwable {

        HotelStepDefsSupports.userSelectsPropertyFromMyoffersPage();

    }

    @And("^User click on check availability button$")
    public void userClickOnCheckAvailabilityButton() throws Throwable {

        HotelStepDefsSupports.userClickOnCheckAvailabilityButton();

    }

    @And("^User select offer applied date from ratecalendar page$")
    public void userSelectOfferAppliedDateFromRatecalendarPage() throws Throwable {

        HotelStepDefsSupports.userSelectOfferAppliedDateFromRatecalendarPage();


    }

    @And("^User click on trip price overlay$")
    public void userClickOnTripPriceOverlay() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        HotelStepDefsSupports.userClickOnTripPriceOverlay();
    }
}



