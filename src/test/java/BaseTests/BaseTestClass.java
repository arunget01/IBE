package BaseTests;

import cucumber.api.java.After;
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

//        ChromeOptions options = new ChromeOptions();---------------> To open chrome in -incognito mode
//        options.addArguments("-incognito");
//        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
//        capabilities.setCapability(ChromeOptions.CAPABILITY, options);


        System.setProperty("webdriver.chrome.driver", "src/main/java/chromedriver.exe");

        driver = new ChromeDriver();
        System.out.println("Base ran:");
        driver.manage().deleteAllCookies();

        //return driver;
    }
}
