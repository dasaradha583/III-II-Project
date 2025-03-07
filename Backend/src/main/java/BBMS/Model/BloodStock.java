package BBMS.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class BloodStock {
    @Id
    private  Integer blood_id;
    private String bloodType;
    private Integer quantity;
    private String  hospital_id;
}
