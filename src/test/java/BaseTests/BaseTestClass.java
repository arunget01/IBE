package BaseTests;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;


import java.util.concurrent.TimeUnit;

/**
 * Created by ADMIN on 1/20/2017.
 */
//starting--
public class BaseTestClass {

    public static WebDriver driver;



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
            DesiredCapabilities cap = new DesiredCapabilities();
            cap.setCapability(InternetExplorerDriver.IE_ENSURE_CLEAN_SESSION, true);

            DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
            capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);

            cap.setCapability("ignoreProtectedModeSettings", true);
            cap.setCapability("ie.forceCreateProcessApi", true);
            cap.setCapability("ie.ensureCleanSession", true);
            cap.setCapability("ie.setProxyByServer", true);
            cap.setCapability("logFile", "/tmp/server.log");
            cap.setCapability("logLevel", "TRACE");
            cap.setCapability("initialBrowserUrl", "https://www.totalrewards.com/reserve/");

            driver.manage().timeouts().implicitlyWait(20 , TimeUnit.SECONDS);



        } else if(browsername.equalsIgnoreCase("chrome")){

            System.setProperty("webdriver.chrome.driver", "src/main/java/chromedriver.exe");

            driver = new ChromeDriver();

            driver.manage().timeouts().implicitlyWait(5 , TimeUnit.SECONDS);
        }



    }
}