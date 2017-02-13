package Steps.Hotel;

import BaseTests.BaseTestClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by ADMIN on 1/20/2017.
 */
public class HotelStepDefsSupports extends BaseTestClass{

//WebDriver drivern;


    public static  void openlandingpage()

    {
        //BaseTestClass.initalizedriver();
        driver.manage().window().maximize();
        driver.get("https://www.totalrewards.com/reserve/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }


    public static  void selectMarket()

    {
        // To Select Market from the drop down listing:
        Select dropdown = new Select(driver.findElement(By.id("location")));
        dropdown.selectByIndex(2);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        // To select property from the drop down list:
        dropdown = new Select(driver.findElement(By.id("property")));
        dropdown.selectByIndex(2);


        // To Click on search button landing page
        driver.findElement (By.xpath (".//*[@id='btnSearch']")).click ();

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
        driver.findElement (By.xpath ("./*//*[@id='btnContinueBeforeVouchers']")).click();

        driver.findElement (By.xpath (".//*[@id='btnIpAlertContinue']")).click();




    }
    private static void waitForElement(WebElement element) {

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(element));
    }










}
