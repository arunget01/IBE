package BaseTests;

import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Created by ADMIN on 1/20/2017.
 */
//starting--
public class BaseTestClass {

    public static WebDriver driver;




    public static void   openChromeBrowser(){
        System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");

        driver = new ChromeDriver();
        System.out.println("Base ran:");

        //return driver;
    }
}
