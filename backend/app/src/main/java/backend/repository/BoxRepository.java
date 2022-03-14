package backend.repository;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.Connection;
import backend.models.Box;

public class BoxRepository {
  private final static String url = "jdbc:postgresql://localhost:5432/codetrial";
  private final static String user = "postgres";
  private final static String password = "docker";
  private static final String SELECT_ALL_QUERY = "select * from boxes";
  private static final String INSERT_BOX_QUERY = "INSERT INTO boxes" +
        "  (id, name, weight, color, country) VALUES " +
        " (?, ?, ?, ?, ?);";
  /*private static final String CREATE_TABLE_SQL = "DROP TABLE IF EXISTS boxes" +
  "CREATE TABLE boxes " +
    "(id INT AS IDENTITY PRIMARY KEY," +
    "name VARCHAR(20) NOT NULL, " +
    "weight integer, " +
    "color VARCHAR(11), " +
    "country VARCHAR(3))";

  public void createTable() throws SQLException {
    try (Connection connection = DriverManager.getConnection(url, user, password);
      Statement statement = connection.createStatement();) {
      statement.execute(CREATE_TABLE_SQL);
    } catch (SQLException e) {
      printSQLException(e);
    }
  }*/

  public ArrayList<Box> listBoxes(){
    ArrayList<Box> boxes = new ArrayList<Box>();
    try (Connection connection = DriverManager.getConnection(url, user, password);
      PreparedStatement preparedStatement = connection.prepareStatement(SELECT_ALL_QUERY);) {
        ResultSet rs = preparedStatement.executeQuery();
        while (rs.next()) {
          // Retrieve values from resultset
          Box box = new Box();
          box.setId(rs.getInt("id"));
          box.setName(rs.getString("name"));
          box.setWeight(rs.getInt("weight"));
          box.setColor(rs.getString("color"));
          box.setCountry(rs.getString("country"));
          
          boxes.add(box);
      }
    } catch (SQLException e) {
        printSQLException(e);
    }
    return boxes;
  }

  public Box addNewBox(Box box) {
    try (Connection connection = DriverManager.getConnection(url, user, password);
      PreparedStatement preparedStatement = connection.prepareStatement(INSERT_BOX_QUERY)) {
        preparedStatement.setInt(1, box.getId());
        preparedStatement.setString(2, box.getName());
        preparedStatement.setInt(3, box.getWeight());
        preparedStatement.setString(4, box.getColor());
        preparedStatement.setString(5, box.getCountry());
        preparedStatement.executeUpdate(); 
    } catch (SQLException e) {
      printSQLException(e);
    }
    return box;
  }

  public static void printSQLException(SQLException ex) {
    for (Throwable e: ex) {
      if (e instanceof SQLException) {
        e.printStackTrace(System.err);
        System.err.println("SQLState: " + ((SQLException) e).getSQLState());
        System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
        System.err.println("Message: " + e.getMessage());
        Throwable t = ex.getCause();
        while (t != null) {
          System.out.println("Cause: " + t);
          t = t.getCause();
        }
      }
    }
  }
}
