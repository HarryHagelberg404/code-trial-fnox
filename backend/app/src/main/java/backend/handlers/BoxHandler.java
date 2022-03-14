package backend.handlers;

import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import backend.models.Box;
import backend.services.BoxService;
import reactor.core.publisher.Mono;

public class BoxHandler {

  private BoxService boxService;

  public BoxHandler(BoxService boxService) {
    this.boxService = boxService;
  }

  public Mono<ServerResponse> listBoxes(ServerRequest serverRequest) {
    return ServerResponse.ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(boxService.listBoxes(), Box.class);
  }

  public Mono<ServerResponse> addBox(ServerRequest serverRequest) {
    System.out.println("HEJ");
    Mono<Box> boxMono = serverRequest.bodyToMono(Box.class);
    return boxMono.flatMap(box ->
      ServerResponse.status(HttpStatus.OK)
        .contentType(MediaType.APPLICATION_JSON)
        .body(boxService.addNewBox(box), Box.class));
  }
}
