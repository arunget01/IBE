package Steps.Hotel;

import BaseTests.BaseTestClass;
import BaseTests.BasicProperties.*;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.List;
import java.util.concurrent.TimeUnit;


import static BaseTests.BasicProperties.readProp;
import static java.lang.System.getProperty;

import static Steps.Hotel.HotelStepDefsFunctions.ExplicitWait;


/**
 * Created by ADMIN on 1/20/2017.
 */
public class HotelStepDefsSupports extends BaseTestClass {

//WebDriver drivern;


    public static void quitallchrome()

    {
        driver.quit();

    }

    public static void waittensec()

    {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }


    public static void waitfivesec()

    {
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

    }


    public static void waitforgiventime(int unittime)

    {
        driver.manage().timeouts().implicitlyWait(unittime, TimeUnit.SECONDS);

    }


    public static void waittwosec()

    {
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

    }

    public static void openlandingpage()

    {
        //openChromeBrowser();
        driver.manage().window().maximize();

        //driver.get("https://hettest1.harrahs.org/reserve/#hotel");
        driver.get("https://www.totalrewards.com/reserve/?roomavailability=false");
        ExplicitWait(driver, "Why book direct");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    public static void openURL(String urlname)

    {
        driver.manage().window().maximize();
        driver.get(readProp(urlname));
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        ExplicitlyWaitforlinkText("Privacy");

    }




    public static void userEnterCheckinCheckoutDates() {

        driver.findElement(By.xpath(".//*[@id='Text1']")).click(); //Check-in- Date Picker
        driver.findElement(By.linkText("Next")).click(); //click next month
        driver.findElement(By.linkText("25")).click(); //click day
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.xpath(".//*[@id='Text2']")).click(); //Check-out- Date Picker
        driver.findElement(By.linkText("Next")).click(); //click next month
        driver.findElement(By.linkText("28")).click(); //click day
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    public static void userEntersPromotion() {
        driver.findElement(By.xpath(".//*[@id='txtOffer']")).sendKeys("IFCBF");

    }


    public static void verifyMarketListing()

    {

        List<WebElement> listse = driver.findElements(By.xpath(".//*[@id='FLV']"));
        Assert.assertTrue(listse.size() > 0, "FLV in Market Listing not found");

    }

    public static void userselectspropertyFlamingo()

    {
        WebElement element = driver.findElement(By.xpath(".//*[@id='FLV']/section/div[2]/div/a"));
        System.out.println(element.getTagName() + "------------------>");

        if ("input".equals(element.getTagName())) {
            System.out.println("In if");
            element.sendKeys("");
        } else {
            System.out.println("In else");
            new Actions(driver).moveToElement(element).perform();

        }
        driver.findElement(By.xpath(".//*[@id='FLV']/section/div[2]/div/a")).click();

    }

    public static void verifyRoomListing() {

        List<WebElement> listse = driver.findElements(By.xpath(".//a[text()[contains(.,'book now')]]"));
        Assert.assertTrue(listse.size() > 0, "FLV in Room Listing not found");

    }

    public static void userSelectRoomFilters() {

        ExplicitlyWaitforElementText("//*[contains(text(), 'See all')]");
        waitfivesec();

        List<WebElement> buttons = driver.findElements(By.xpath("//*[contains(text(), '1 King')][1]"));
        System.out.println("First---------------");
        WebElement button = buttons.get(0);
        // waitForElement(button);
        button.click();
        System.out.println("Click---------------");


//        driver.findElement(By.xpath(".//*[@id='accessibilityfilter']/div/div[2]/div[2]/div/dd[1]/span[1]/div")).click();
//        driver.findElement(By.xpath(".//*[@id='accessibilityfilter']/div/div[2]/div[3]/div/span[3]/div")).click();


    }


    public static void selectaccessibilityfilter() throws InterruptedException

    {

        driver.findElement(By.xpath(".//*[@id='accessibilityfilter']/div/div[1]/dl/dd[1]/div")).click();
        driver.findElement(By.xpath(".//*[@id='accessibilityfilter']/div/div[1]/dl/dd[4]/a")).click();

    }


    public static void verifyWhetherTheDealAppliedBannerIsShownInRateCalendarPage() {


        driver.findElement(By.xpath(".//*[@id='packagedecs']/a")).click();
        ExplicitlyWaitforElementText(".//*[@id='package-full-description']/section/a");
        driver.findElement(By.xpath(".//*[@id='package-full-description']/section/a")).click();

    }

    public static void userSelectDatesFromTheCalendar() {


        ExplicitlyWaitforElementText("/*//*[contains(text(), 'Add to cart')][1]");
        waitfivesec();
        List<WebElement> buttons = driver.findElements(By.xpath("/*//*[contains(text(), 'Add to cart')][1]"));
        WebElement chk = buttons.get(0);
        chk.click();
        waittwosec();
        WebElement chkd = buttons.get(1);
        chkd.click();

//        java.util.Iterator<WebElement> i = buttons.iterator();
//        while (i.hasNext()) {
//            WebElement row = i.next();
//            WebElement roww = i.next();
//
//            String vl = row.getText();
//            String vll = roww.getText();
//
//            if (vl.contains("Add to cart")) {
//                if (vll.contains("Add to cart"))
//
//                {//click
//
//                    break;
//            }
//
//            }

    }

    public static void userClickOnGetTripPriceButton() {

        driver.findElement(By.xpath(".//*[@id='btngreen_getprice5']/span")).click();

    }

    public static void userClickOnBookItFromPricingDetailsOverlay() {

        //driver.findElement(By.xpath("//*[contains(text(), 'book it ')]")).click();
        ExplicitlyWaitforElementText("//*[contains(text(), 'book it ')]");
        waitfivesec();
        driver.findElement(By.xpath("//*[contains(text(), 'book it ')]")).click();
    }


    public static void userSelectRoom() {

//        List<WebElement> buttons = driver.findElements(By.xpath(".//*[@id='A1']"));
//        WebElement button = buttons.get(1);
//        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//        System.out.println(button.getText() + " -------------------------------------->>>>>>");
//        waitForElement(button);
//        button.click();
//        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);


        ExplicitlyWaitforElementText(".//a[contains(text(),'book now')]");
        List<WebElement> buttons = driver.findElements(By.xpath(".//a[contains(text(),'book now')]"));
        WebElement button = buttons.get(0);
        waitForElement(button);
        button.click();
        ExplicitlyWaitforlinkText("Remove");
    }

    public static void userVerifyTripSummaryPage() {
        List<WebElement> listse = driver.findElements(By.xpath(".//a[text()[contains(.,'Remove')]]"));
        Assert.assertTrue(listse.size() > 0, "User fail to redirect to trip summary page");

    }

    public static void userRemoveRoomFromCart() {

        ExplicitlyWaitforElementText("//*[contains(text(), 'Remove')]");
        driver.findElement(By.xpath("//*[contains(text(), 'Remove')]")).click();
        ExplicitlyWaitforElementText("//*[contains(text(), 'REMOVE')]");
        driver.findElement(By.xpath("//*[contains(text(), 'REMOVE')]")).click();
        System.out.println("Removeddddddddddd---------------");
//        ExplicitlyWaitforElementText( "//*[contains(text(), 'Continue To Checkout')]");
//        WebDriverWait wait = new WebDriverWait(driver, 10);
//        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(".//*[@id='btnContinueBeforeVouchers']")));


    }

    public static void userAddRestaurantToCart() {
        driver.findElement(By.xpath(".//*[@id='fragment-2']/ul/li[10]/a[2]")).click();
        driver.findElement(By.xpath(".//*[@id='dining-overlay-details']/section/div/div/div[1]/div[1]/a")).click();
        driver.findElement(By.xpath(".//*[@id='btnContinue']")).click();

    }


    public static void userAddsBoBVoucherToCart() {


        driver.findElement(By.xpath(".//*[@id='voucherlist']/div/section/div[2]/article/div[2]/div[4]/a")).click();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }


    public static void userUpgradeRoomInCart() {

        driver.findElement(By.xpath(".//*[@id='upsell iti-upsell']/div[1]/div/table/tbody/tr/td[4]/div/div/a")).click();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    public static void userClickOnContinueToCheckout() {


        WebElement element = driver.findElement(By.xpath("//*[contains(text(), 'Continue To Checkout')]"));
        System.out.println(element.getTagName() + "------------------>");

        if ("input".equals(element.getTagName())) {
            System.out.println("In if");
            element.sendKeys("");
        } else {
            System.out.println("In else");
            new Actions(driver).moveToElement(element).build().perform();
        }
        try {
            element.click();
        } catch (Exception e) {
            driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
            WebElement element1 = driver.findElement(By.xpath("//*[contains(text(), 'Continue To Checkout')]"));
            new Actions(driver).moveToElement(element1).build().perform();
            element1.click();

            ExplicitlyWaitforElementText( "//*[contains(text(), 'Continue To Checkout')]");

            ExplicitlyWaitforlinkText("Continue");
        }

    }

    public static void userVerifyThePaymentPage() {

        WebElement button = driver.findElement(By.xpath(".//*[@id='btnIpAlertContinue']"));
        waitForElement(button);//.click();
        button.click();
    }


    public static void openlandingpageRavail()

    {
        //openChromeBrowser();
        driver.manage().window().maximize();
        driver.get("https://www.totalrewards.com/reserve/?roomavailability=true");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    public static void selectFlexDateRadio()

    {

        WebElement button = driver.findElement(By.xpath(".//*[@id='lblForsearchtypeCalendar']"));
        waitForElement(button);
        waitfivesec();

        driver.findElement(By.xpath(".//*[@id='lblForsearchtypeCalendar']")).click();

        //driver.findElement(By.xpath(".//*[@value=\"RateCalendar\"]")).click();

        System.out.println("fffffffffffffff");


        waitfivesec();
    }


    public static void selectMarkets(String marketvalue)

    {
        Select dropdown = new Select(driver.findElement(By.id("location")));
        dropdown.selectByVisibleText(marketvalue);

    }

    public static void selectLocation(String locvalue)

    {
        waitforgiventime(3);
        Select dropdown = new Select(driver.findElement(By.id("property")));
        dropdown.selectByVisibleText(locvalue);

    }



    public static void checkRoomAdded()

    {
        String  listfs = driver.findElement(By.xpath(".//*[contains(text(),'Room Upgrade')]")).getText();
        Assert.assertEquals(listfs,"Room Upgrade Discount","Room Upgrade not found!");

    }

    public static  void continueUpgrade( ) throws Exception

    {

        ExplicitlyWaitforlinkText("Remove");
        try {
            String listf = driver.findElement(By.xpath(".//a[contains(text(),'Upgrade')]")).getText();
            Assert.assertEquals(listf,"UPGRADE","Total not found!");
            System.out.println("Asserted Text");

            List<WebElement> buttons = driver.findElements(By.xpath(".//a[contains(text(),'Upgrade')]"));
            System.out.println("List saved ");

            WebElement button = buttons.get(0);
            waitForElement(button);
            button.click();
            System.out.println("ALl Clicked");
            ExplicitlyWaitforlinkText("Undo?");




        }

        catch(Exception e)

        {

            Assert.assertEquals(false,"Upgrade Error");
            throw (e);
        }




    }



    public static  void continueCheckOut( )


    {


        List<WebElement> buttons = driver.findElements(By.xpath("//*[contains(text(), 'Continue To Checkout')]"));
        WebElement button = buttons.get(1);
        waitForElement(button);
        button.click();


    }


    public static void verifyItinPage() {


        ExplicitlyWaitforlinkText("Remove");
        String listf = driver.findElement(By.xpath("//*[contains(text(), 'Total:')]")).getText();
        Assert.assertEquals(listf,"Total:","Total not found!");
        String listsg = driver.findElement(By.xpath("//*[contains(text(), 'Taxes')]")).getText();
        Assert.assertEquals(listsg,"Taxes:","Taxes not found!");

    }



    public static void verifyItinPageMroom() {

ExplicitlyWaitforlinkText("Remove");
        String listf = driver.findElement(By.xpath("//*[contains(text(), 'Total:')]")).getText();
        Assert.assertEquals(listf,"Total:","Total not found!");
        String listsg = driver.findElement(By.xpath("//*[contains(text(), 'Taxes')]")).getText();
        Assert.assertEquals(listsg,"Taxes:","Taxes not found!");

    }

    public static void verifyItinPageMultiRoom() {

        ExplicitlyWaitforElementText( "//*[contains(text(), 'Hotel added')]");

        String listf = driver.findElement(By.xpath("//*[contains(text(), 'Total:')]")).getText();
        Assert.assertEquals(listf, "Total:", "Total not found!");
        String listsg = driver.findElement(By.xpath("//*[contains(text(), 'Taxes')]")).getText();
        Assert.assertEquals(listsg, "Taxes:", "Taxes not found!");

    }




    public static void verifyCartHasnRooms(int nroomm) {



        int jk = nroomm;
        boolean c = false;
        ExplicitlyWaitforElementText( "//*[contains(text(), 'Grand Total:')]");
        List<WebElement> buttons = driver.findElements(By.xpath("//dt"));
        int o = buttons.size();
        int oo =0;

        java.util.Iterator<WebElement> i = buttons.iterator();
        while (i.hasNext()) {
            WebElement row = i.next();
            System.out.println("");
            String vl = row.getText();
           if( vl.contains("Room "+jk+":"))

           {
               c = true;
               System.out.println("Vale of button Size" );

               break;
           }

//            if (!i.hasNext()) {
//            Assert.assertTrue(false, "Room 2 not showing");
//                System.out.println("inside if loooooooooop");
//
//            }

        oo = oo+1;}

        if ( c==false){            Assert.assertTrue(false, "Room "+nroomm+" not showing");
        }

    }


    public static void verifyPaymentPage() {

        ExplicitlyWaitforElementText("//*[contains(text(), 'BILLING INFORMATION')]");
        String listf = driver.findElement(By.xpath("//*[contains(text(), 'BILLING INFORMATION')]")).getText();
        Assert.assertEquals(listf, "BILLING INFORMATION", "Total not found!");
        String listsg = driver.findElement(By.xpath("//*[contains(text(), 'GUEST INFORMATION')]")).getText();
        Assert.assertEquals(listsg, "GUEST INFORMATION", "Taxes not found!");

    }


    public static void verifyFlexCal() {


        ExplicitlyWaitforElementText(".//*[@id='ScrollLegendPopup']");
        List<WebElement> list = driver.findElements(By.xpath(".//*[@id='ScrollLegendPopup']"));
        Assert.assertTrue(list.size() > 0, "Text not found!");
        List<WebElement> lists = driver.findElements(By.xpath(".//*[@id='arrivaldate']"));
        Assert.assertTrue(lists.size() > 0, "Text not found!");
        List<WebElement> listse = driver.findElements(By.xpath(".//*[@id='CLV']"));
        Assert.assertTrue(listse.size() > 0, "CLV in Calender not found");


        System.out.println("Verified Flex Calender Page");


    }


    public boolean isElementPresent(By locatorKey) {
        try {
            driver.findElement(locatorKey);
            return true;
        } catch (org.openqa.selenium.NoSuchElementException e) {
            return false;
        }
    }

    public static boolean isElementVisible(String xpathlocator){
        try
        {
            driver.findElement(By.xpath(xpathlocator));
            return false;
        } catch (NoSuchElementException e) {
            System.out.println("Element absent");
            return true;
        }


    }


    public static void verifyFlexPropertyCal() {


        ExplicitlyWaitforElementText("//*[contains(text(), 'Reviews')]");
        String urlnow = driver.getCurrentUrl();
        System.out.println("Curent url is"+urlnow);
        if(urlnow.contains("roomavailability=true"))
        {
            String  listfs = driver.findElement(By.xpath("//*[contains(text(), 'GRID')]")).getText();
            Assert.assertEquals(listfs ,"GRID","GRID not displayed");
            String  listfis = driver.findElement(By.xpath("//*[contains(text(), 'LIST')]")).getText();
            Assert.assertEquals(listfis ,"LIST","LIST not displayed");
            String  listfisi = driver.findElement(By.xpath("//*[contains(text(), 'CALENDAR')]")).getText();
            Assert.assertEquals(listfisi ,"CALENDAR","CALENDAR not displayed");
        }
        else
        {        boolean value = isElementVisible("//*[contains(text(), 'GRID')]");
            Assert.assertTrue(value,"GRID is displayed in Non Room Availability Branch");
            boolean valuex = isElementVisible("//*[contains(text(), 'LIST')]");
            Assert.assertTrue(valuex,"LIST is displayed in Non Room Availability Branch");
            boolean valuey = isElementVisible("//*[contains(text(), 'CALENDAR')]");
            Assert.assertTrue(valuey,"CALENDAR is displayed in Non Room Availability Branch");
        }




    }


    public static void screenshot(String marketvalue)

    {
        Select dropdown = new Select(driver.findElement(By.id("location")));
        dropdown.selectByVisibleText(marketvalue);

    }

    public static void selectAnyRateCal()

    {
        ExplicitlyWaitforElementText(".//*/p[contains(text(),'$')]");
        List<WebElement> buttons = driver.findElements(By.xpath(".//*/p[contains(text(),'$')]"));
        WebElement chk = buttons.get(1);
        chk.click();
        waittwosec();
        WebElement chkd = buttons.get(2);
        chkd.click();
    }

    public static void clickSelectRoom()

    {
        ExplicitlyWaitforElementText(".//*[@id='btngreen_roomList']");
        driver.findElement(By.xpath(".//*[@id='btngreen_roomList']")).click();

    }


    public static void selectAnyRate()

    {
        int k = 2;
        // driver.findElement(By.xpath("(//a[contains(text(),'$')])["+k+"]")).click();
        //(//a[contains(text(),'$123')])[2])

        // dsfsdf Select dropdown = new Select(driver.findElement(By.id("location")));
        //dropdown.selectByVisibleText(marketvalue);
        int p = 1;
        String vl;
        boolean r = false;
        int m = 0;
        List<WebElement> buttons = driver.findElements(By.xpath(".//*[@class='col-req']"));
        int o = buttons.size();

        for (int i = 0; i < o; i++) {
        }
        java.util.Iterator<WebElement> i = buttons.iterator();
        while (i.hasNext()) {
            WebElement row = i.next();

            vl = row.getText();
            if (vl.indexOf("$") != -1) {
                m = m + k;
                driver.findElement(By.xpath("(//a[contains(text(),'$')])[" + m + "]")).click();
                r = true;

            } else {
                System.out.println("there is no '$$$' in temp string");
            }
            p++;
            if (r == true) {
                break;


            }


        }
    }

    public static void ExplicitlyWaitforlinkText(String text) {
        (new WebDriverWait(driver, 30)).until(ExpectedConditions.elementToBeClickable(By.linkText(text)));

    }

    public static void ExplicitlyWaitforElementText(String idofele) {


        (new WebDriverWait(driver, 30)).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(idofele)));

    }


    public static void selectRcount(int counts)

    {
        Select dropdown = new Select(driver.findElement(By.id("selectRoomNumber")));
        dropdown.selectByIndex(counts);

    }

    public static void selectAdult(int acounts)

    {
        Select dropdown = new Select(driver.findElement(By.id("selectAdults1")));
        dropdown.selectByIndex(acounts);
    }

    public static void selectChild(int ccounts)

    {
        Select dropdown = new Select(driver.findElement(By.id("selectChildren1")));
        dropdown.selectByIndex(ccounts);

    }


    public static void verifyroomguests(int rccounts, String gcountss)

    {

        int pip = rccounts;

        boolean r = false;
        int m;
        ExplicitlyWaitforElementText("//*[contains(text(), 'GUEST')]");
        List<WebElement> buttons = driver.findElements(By.xpath("//*[contains(text(), 'Room')]"));
        java.util.Iterator<WebElement> i = buttons.iterator();
        while (i.hasNext()) {


            WebElement row = i.next();
            String vl = row.getText();
            String d = "Room " + pip + ":";


            if (vl.indexOf(d) != -1) {
                System.out.println("IF LOPPPPPPPPPP");

                Assert.assertTrue(true, "Room count not matching");
                r = true;
                break;

            }


        }

        if (r == false) {
            Assert.assertTrue(false, "Room count not matching");


            // String listf = driver.findElement(By.xpath("//*[contains(text(), 'Room')]")).getText();
            //Assert.assertEquals(rccounts,listf,"Total not found!");
        }
    }


    public static void selectMonth(int monthvalue)

    {
        Select dropdown = new Select(driver.findElement(By.id("selectMonth")));
        dropdown.selectByIndex(2);

    }

    public static void clickSearchBtn()

    {
        driver.findElement(By.id("btnSearch")).click();


    }


    public static void selectRoomOptions()

    {

        ExplicitlyWaitforElementText("//*[contains(text(), 'See all')]");
        waitfivesec();

        List<WebElement> buttons = driver.findElements(By.xpath("//*[contains(text(), '1 King')][1]"));
        System.out.println("First---------------");
        WebElement button = buttons.get(0);
        // waitForElement(button);
        button.click();
        System.out.println("Click---------------");


    }

    public static void updateRoomOptions()

    {
        System.out.println("MMMMWaitttttttttttt---------------");

        ExplicitlyWaitforElementText("//*[contains(text(), 'View Total')]");
        waitforgiventime(10);

        ExplicitlyWaitforlinkText( "View Total");
        ExplicitlyWaitforElementText( "//*[contains(text(), '1 King')][1]");

        List<WebElement> buttonsx = driver.findElements(By.xpath("//*[contains(text(), '1 King')][1]"));
        System.out.println("MMMMFirst---------------");
        WebElement buttond = buttonsx.get(0);
        // waitForElement(button);
        buttond.click();
        System.out.println("MMMMMClick---------------");


    }


    public static void removeRoom()

    {
        ExplicitlyWaitforElementText("//*[contains(text(), 'Remove')]");

        driver.findElement(By.xpath("//*[contains(text(), 'Remove')]")).click();
        ExplicitlyWaitforElementText("//*[contains(text(), 'REMOVE')]");
        driver.findElement(By.xpath("//*[contains(text(), 'REMOVE')]")).click();
        System.out.println("Removeddddddddddd---------------");
        ExplicitlyWaitforElementText("//*[contains(text(), 'See all')]");


    }


    public static void selectRoom()

    {
        ExplicitlyWaitforElementText(".//a[contains(text(),'book now')]");
        List<WebElement> buttons = driver.findElements(By.xpath(".//a[contains(text(),'book now')]"));
        WebElement button = buttons.get(1);
        waitForElement(button);
        button.click();
        ExplicitlyWaitforlinkText("Remove");

    }

    public static void selectRooms()

    {
        ExplicitlyWaitforElementText(".//a[contains(text(),'book now')]");
        List<WebElement> buttons = driver.findElements(By.xpath(".//a[contains(text(),'book now')]"));
        WebElement button = buttons.get(1);
        waitForElement(button);
        button.click();
        ExplicitlyWaitforlinkText("Remove");

    }

    public static void chooseCheckoutOverlay()

    {
        waitfivesec();
        ExplicitlyWaitforElementText("//a[contains(text(),'select room')]");

        List<WebElement> buttons = driver.findElements(By.xpath("//a[contains(text(),'select room')]"));
        WebElement button = buttons.get(1);
        waitForElement(button);
        button.click();
        ExplicitlyWaitforlinkText("Privacy");
        ExplicitlyWaitforlinkText("View all promotions and packages.");


    }


    public static void selectMarket()

    {
        // To Select Market from the drop down listing:
        Select dropdown = new Select(driver.findElement(By.id("location")));
        dropdown.selectByIndex(2);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        // To select property from the drop down list:
        dropdown = new Select(driver.findElement(By.id("property")));
        dropdown.selectByIndex(2);


        // To Click on search button landing page
        driver.findElement(By.xpath(".//*[@id='btnSearch']")).click();

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        //To click on Book Now button from Room listing page
        //driver.findElement (By.xpath (".//*[@id='A1']']/section/div[2]/div/a")).click();
        List<WebElement> buttons = driver.findElements(By.xpath(".//*[@id='A1']"));
        WebElement button = buttons.get(2);
        waitForElement(button);
        button.click();

        //driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

        //driver.findElement (By.xpath ("./*//*[@id='A1']")).click();


// To
        driver.findElement(By.xpath("./*//*[@id='btnContinueBeforeVouchers']")).click();

        driver.findElement(By.xpath(".//*[@id='btnIpAlertContinue']")).click();


    }

    private static void waitForElement(WebElement element) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.elementToBeClickable(element));
            System.out.println(element.isEnabled() + "  +++++++++++++++++++++++++++++++++++++ " + element.isDisplayed());
        } catch (Exception e) {


        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.elementToBeClickable(element));
        System.out.println(element.isEnabled() + "  +++++++++++++++++++++++++++++++++++++ " + element.isDisplayed());
           driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        }

    }


}
