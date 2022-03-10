package backend;

public class Box {

  private String name;
  private int weight;
  private String color;
  private String country;

  public Box(String name, int weight, String color, String country) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.country = country;
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