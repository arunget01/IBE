package BaseTests;

import cucumber.api.java.After;

/**
 * Created by ADMIN on 2/13/2017.
 */
public class Hooks extends BaseTestClass {


   @After


   public static void quitallchrome(){
       driver.manage().deleteAllCookies();
        driver.quit();
    }

}
