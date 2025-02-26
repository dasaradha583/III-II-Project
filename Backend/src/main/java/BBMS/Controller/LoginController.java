package BBMS.Controller;


import BBMS.Model.UserLogin;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLogin userLogin) {
        System.out.println(userLogin);
        String role = "donor";
        return ResponseEntity.ok("{\"message\": \"Login successful\", \"role\": \"" + role + "\", \"userId\": \"" + "1" + "\"}");
    }

}
