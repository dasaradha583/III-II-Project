package BBMS.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
public class RequestTable {
    @Id
    private Integer requestId;
    @OneToOne
    private User userId;
    private String bloodType;
    private String quantity;
    private String status;
    private Date requstedDate;
}
