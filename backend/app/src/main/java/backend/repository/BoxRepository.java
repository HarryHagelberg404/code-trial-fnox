package backend.repository;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.DriverManager;

import backend.models.Box;
import io.netty.handler.codec.http2.Http2FrameWriter.Configuration;
import reactor.core.publisher.Flux;

public class BoxRepository {/*
  private final static String url = "jdbc:postgresql://localhost/mydb";
  private final static String user = "postgres";
  private final static String password = "docker";
  private static final String SELECT_ALL_QUERY = "select * from boxes";
  private static final String INSERT_BOX_QUERY = "INSERT INTO users" +
        "  (id, name, email, country, password) VALUES " +
        " (?, ?, ?, ?, ?);";

  private Rd2bc r2dbc = new R2dbc(connectionFactory);

  public Flux<Box> findAll() throws SQLException {
    // using try-with-resources to avoid closing resources (boiler plate
    // code)
    Flux<Box> boxes = r2dbc
      .inTransaction(handle -> handle.select(
        "SELECT * FROM boxes")
      .mapRow((Box) -> collectToMap(Box)));
    return boxes;
  }

  public void save() throws SQLException {
    try {


    } catch (SQLException ex) {
      printSQLException(ex);
    }
  }

  public static void printSQLException(SQLException ex) {
   */
}
