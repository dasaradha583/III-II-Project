package BBMS.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.sql.Date;


@Entity
public class User {
    @Id
    private  Integer id;
    private  String email;
    private String password;
    private Date DOB;
    private String gender;
    private String bloodGroup;
    private String height;
    private String weight;
}
