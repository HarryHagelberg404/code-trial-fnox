package backend.repository;

import backend.Box;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface BoxRepository extends ReactiveCrudRepository {
  Flux<Box> getAllBoxes();

  Mono<Box> saveBox(Mono<Box> box);
}
