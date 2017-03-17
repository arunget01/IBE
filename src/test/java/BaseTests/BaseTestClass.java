package BaseTests;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.remote.DesiredCapabilities;


import java.util.concurrent.TimeUnit;

/**
 * Created by ADMIN on 1/20/2017.
 */
//starting--
public class BaseTestClass {

    public static WebDriver driver;


//    public static void   openChromeBrowser(){
//
//
//        System.setProperty("webdriver.chrome.driver", "src/main/java/chromedriver.exe");
//
//        driver = new ChromeDriver();
//        System.out.println("Base ran:");
//        driver.manage().deleteAllCookies();
//
//        //return driver;
//    }


    public static void openBrowsers(String browsername)

    {

        if(browsername.equalsIgnoreCase("firefox")){

            System.setProperty("webdriver.gecko.driver", "src/main/java/geckodriver.exe");

            // DesiredCapabilities capabilities = DesiredCapabilities.firefox();
            //capabilities.setCapability("marionette", true);
            //driver = new FirefoxDriver(capabilities);

            driver = new FirefoxDriver();


        } else if(browsername.equalsIgnoreCase("ie")){

            System.setProperty("webdriver.ie.driver", "src/main/java/IEDriverServer.exe");

            driver = new InternetExplorerDriver();

        } else if(browsername.equalsIgnoreCase("chrome")){

            System.setProperty("webdriver.chrome.driver", "src/main/java/chromedriver.exe");

            driver = new ChromeDriver();
            driver.manage().timeouts().implicitlyWait(5 , TimeUnit.SECONDS);
        }



    }
}