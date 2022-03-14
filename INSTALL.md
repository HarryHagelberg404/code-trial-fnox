# Installing and running the application

# Database: docker run --name myDatabase -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres

docker build -t database ./where dockerfile is
docker run -d --name db-container -p 5432:5432 database

public class BoxHandler {

  private BoxService boxService;

  public Mono<ServerResponse> listBoxes(ServerRequest serverRequest) {
    Flux<Box> box = boxService.listBoxes();
    return ServerResponse.ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(box, Box.class);
  }

  public Mono<ServerResponse> addBox(ServerRequest serverRequest) {
    Mono<Box> box = serverRequest.bodyToMono(Box.class);
    return ServerResponse.status(HttpStatus.OK)
        .contentType(MediaType.APPLICATION_JSON)
        .build(boxService.addNewBox(box), Box.class);
  }
}
