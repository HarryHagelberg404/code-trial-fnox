package backend.models;

public class Box {

  private int id;
  private String name;
  private int weight;
  private String color;
  private String country;

  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getWeight() {
    return this.weight;
  }

  public void setWeight(int weight) {
    this.weight = weight;
  }

  public String getColor() {
    return this.color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public String getCountry() {
    return this.country;
  }

  public void setCountry(String country) {
    this.country = country;
  }
}