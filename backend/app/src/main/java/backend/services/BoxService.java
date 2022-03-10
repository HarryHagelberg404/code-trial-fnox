package backend.services;

import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;
import backend.Box;
import backend.repository.BoxRepository;

public class BoxService {

  private BoxRepository boxRepository;

  public Flux<Box> listBoxes() {
    return boxRepository.getAllBoxes();
  }

  public <Mono>Box addNewBox(Box box) {
    return boxRepository.saveBox(box);
  }
}
