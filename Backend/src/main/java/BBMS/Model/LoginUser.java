package BBMS.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class LoginUser {


    @Id
    private  int id;
    private String email;
    private  String password;
    private String role;
}
