import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

/**
 * Created by ADMIN on 1/24/2017.
 */
//@RunWith=Arun
@CucumberOptions(features={"src/test/java/Features"},format={"json:target/cucumber.json","html:target/site/cucumber-pretty"} , glue = "Steps")
public class RunnerTest extends AbstractTestNGCucumberTests {
}
