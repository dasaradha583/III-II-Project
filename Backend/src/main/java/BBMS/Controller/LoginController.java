package BBMS.Controller;


import BBMS.Model.LoginUser;
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
    public ResponseEntity<LoginUser> signup(@RequestBody LoginUser user) {

        System.out.println(user);
        if(userService.save(user).equals("invalid")) {
            return new ResponseEntity<>(user,HttpStatus.CREATED);

        }

        return new ResponseEntity<>(user,HttpStatus.OK);
    }


}
