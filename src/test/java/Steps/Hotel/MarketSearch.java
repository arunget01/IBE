package Steps.Hotel;

import BaseTests.BaseTestClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

/**
 * Created by asashidharan on 2/13/2017.
 */
public class MarketSearch extends BaseTestClass {


    @Given("^User is in landing page$")
    public void userIsInLandingPage() throws Throwable {

        HotelStepDefsSupports.openlandingpage();

    }

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


//    @And("^User upgrade room in cart$")
//    public void userUpgradeRoomInCart() throws Throwable {
//        HotelStepDefsSupports.userUpgradeRoomInCart();
//    }


    @And("^User click on continue to Checkout$")
    public void userClickOnContinueToCheckout() throws Throwable {

        HotelStepDefsSupports.userClickOnContinueToCheckout();


    }


    @And("^User adds BoB Voucher to cart$")
    public void userAddsBoBVoucherToCart() throws Throwable {

        HotelStepDefsSupports.userAddsBoBVoucherToCart();



    }


}