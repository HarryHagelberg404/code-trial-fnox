package backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.models.Box;
import backend.repository.BoxRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class BoxService {

  private final BoxRepository boxRepository;

  public Flux<Box> listBoxes() {
    return boxRepository.findAll();
  }

  public Mono<Box> addNewBox(final Box box) {
    System.out.println(boxRepository);
    System.out.println("DÅ");
    return boxRepository.save(box);
  }
}
