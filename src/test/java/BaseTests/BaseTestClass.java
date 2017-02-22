package BaseTests;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

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


    public static void openBrowser(String browsername)

    {

        if(browsername.equalsIgnoreCase("firefox")){

            System.setProperty("webdriver.gecko.driver", "src/main/java/geckodriver.exe");

            driver = new FirefoxDriver();

        } else if(browsername.equalsIgnoreCase("ie")){

            System.setProperty("webdriver.ie.driver", "src/main/java/IEDriverServer.exe");

            driver = new InternetExplorerDriver();

        } else if(browsername.equalsIgnoreCase("chrome")){

            System.setProperty("webdriver.chrome.driver", "src/main/java/chromedriver.exe");

            driver = new ChromeDriver();

        }



    }
}
