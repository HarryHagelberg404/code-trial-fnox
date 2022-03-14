package backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {

  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
    //GreetingClient greetingClient = context.getBean(GreetingClient.class);
    // We need to block for the content here or the JVM might exit before the message is logged
    //System.out.println(">> message = " + greetingClient.getMessage().block());
  }
}