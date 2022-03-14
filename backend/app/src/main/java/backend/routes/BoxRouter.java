package backend.routes;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import backend.handlers.BoxHandler;
import backend.services.BoxService;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;

@Configuration(proxyBeanMethods = false)
public class BoxRouter {

  @Bean
  public RouterFunction<ServerResponse> route() {
    BoxService boxService = new BoxService();
    BoxHandler boxHandler = new BoxHandler(boxService);

    return RouterFunctions
      .route(GET("/boxes").and(accept(MediaType.APPLICATION_JSON)), boxHandler::listBoxes)
      .andRoute(POST("/boxes").and(accept(MediaType.APPLICATION_JSON)), boxHandler::addBox);
  }
}
