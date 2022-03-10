package backend.handlers;

import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import backend.Box;
import backend.services.BoxService;
import reactor.core.publisher.Mono;

@Component
public class BoxHandler {

  private BoxService boxService;

  public BoxHandler(BoxService boxService) {
    this.boxService = boxService;
  }

  public Mono<ServerResponse> listBoxes(ServerRequest serverRequest) {
    String boxName = serverRequest.queryParam("name");
    return ServerResponse.ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(boxService.listBoxes(), Box.class);
  }

  public Mono<ServerResponse> addBox(ServerRequest serverRequest) {
    Mono<Box> boxMono = serverRequest.bodyToMono(Box.class);
    return boxMono.flatMap(box ->
      ServerResponse.status(HttpStatus.OK)
        .contentType(MediaType.APPLICATION_JSON)
        .body(boxService.addNewBox(box), Box.class));
  }
}
