package backend.routes;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import backend.handlers.BoxHandler;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;

@Configuration(proxyBeanMethods = false)
public class BoxRouter {

  @Bean
  public RouterFunction<ServerResponse> route(BoxHandler boxHandler) {

    return RouterFunctions
      .route(GET("/listboxes").and(accept(MediaType.APPLICATION_JSON)), boxHandler::listBoxes)
      .andRoute(POST("/addbox").and(accept(MediaType.MULTIPART_FORM_DATA)), boxHandler::addBox);
  }
}
