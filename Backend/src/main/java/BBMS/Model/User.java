package BBMS.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    private  Integer id;
    private String name;
    private String email;
    private String password;
    private String role;
    private String phoneNo;
}
