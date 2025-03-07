package BBMS.Controller;


import BBMS.Model.User;
import BBMS.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {



    @Autowired
    UserService userService;

    @PostMapping("login")
    public ResponseEntity<User> signup(@RequestBody User user) {

        //userService.save(user);
        if(userService.save(user).equals("invalid")) {
            return new ResponseEntity<>(user,HttpStatus.INTERNAL_SERVER_ERROR);

        }

        return new ResponseEntity<>(user,HttpStatus.OK);
    }


}
