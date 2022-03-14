package backend.controller;

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
  public ArrayList<Box> findAllBoxes() {
    return boxRepository.listBoxes();
  }

  @PostMapping
  public Box saveBox(@Validated @RequestBody Box box) {
    try {
      boxRepository.addNewBox(box);
    } catch (Exception e) {
    }
    return box;
  }
}
