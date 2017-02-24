import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

/**
 * Created by ADMIN on 1/24/2017.
 */
//This is a runner class
@CucumberOptions(features={"src/test/java/Features"},format={"json:target/cucumber-json-report/report.json","html:target/cucumber-html-eport/report"} , glue = "Steps")
public class RunnerTest extends AbstractTestNGCucumberTests {
}
