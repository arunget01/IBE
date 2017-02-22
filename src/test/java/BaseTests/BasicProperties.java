package BaseTests;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BasicProperties extends BaseTestClass  {

    public static String readProp(String values) {

        String resultvalue;
        File file = new File("src/test/java/basicinfos.properties");

        FileInputStream fileInput = null;
        try {
            fileInput = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        Properties prop = new Properties();

        //load properties file
        try {
            prop.load(fileInput);
            resultvalue = prop.getProperty(values);
            return resultvalue;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;

    }
}