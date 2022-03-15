package backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.models.Box;
import backend.repository.BoxRepository;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping(path = "/api/boxes")
public class BoxController {

  private BoxRepository boxRepository = new BoxRepository();

  @GetMapping
  public ResponseEntity<ArrayList<Box>> findAllBoxes() {
    return ResponseEntity.status(HttpStatus.OK).body(boxRepository.listBoxes());
  }

  @PostMapping
  public ResponseEntity<Box> saveBox(@Validated @RequestBody Box box) {
    try  {
      if (box.getIsValid()) {
        boxRepository.addNewBox(box);
        return ResponseEntity.status(HttpStatus.OK).body(box);
      } else {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(box);  
      }
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(box);
    }
  }
}
