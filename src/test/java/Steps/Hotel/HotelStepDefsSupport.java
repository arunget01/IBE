package Steps.Hotel;
import BaseTests.BaseTestClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by ADMIN on 1/20/2017.
 */
public class HotelStepDefsSupport  extends BaseTestClass{




    public static void ExplicitWait(WebDriver driver, String text) {
        (new WebDriverWait(driver, 10)).until(ExpectedConditions.elementToBeClickable(By.partialLinkText(text)));

    }

    public static void loadLandingPage()

    {
        //initalizedriver();
        driver.get("https://www.totalrewards.com/reserve/");
        ExplicitWait(driver, "Why book direct");

    }





    public static void loadLandingPages()

    {

        driver.get("https://www.totalrewards.com/reserve/");
        ExplicitWait(driver, "Why book direct");
       // Assert

    }

    public static void closeBrowser()

    {

        driver.close();


    }

    public static void quitDriver()

    {

        driver.quit();


    }
}
