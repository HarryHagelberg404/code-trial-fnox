package backend.models;

public class Box {

  private boolean isValid = true;
  private int id;
  private String name;
  private double weight;
  private String color;
  private String country;

  private final int maxNameLength = 20;
  private final int maxColorLength = 25;
  private final int maxCountryLength = 3;


  public boolean getIsValid() {
    return this.isValid;
  }

  public void setIsValid(boolean isValid) {
    this.isValid = isValid;
  }

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
    if (name.length() > maxNameLength) {
      this.isValid = false;
    }
    this.name = name;
  }

  public double getWeight() {
    return this.weight;
  }

  public void setWeight(double weight) {
    this.weight = weight;
  }

  public String getColor() {
    return this.color;
  }

  public void setColor(String color) {
    if (color.length() > maxColorLength) {
      this.isValid = false;
    }
    this.color = color;
  }

  public String getCountry() {
    return this.country;
  }

  public void setCountry(String country) {
    if (country.length() > maxCountryLength) {
      this.isValid = false;
    }
    this.country = country;
  }
}