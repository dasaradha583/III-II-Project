package BBMS.Service;


import BBMS.Dao.UserDao;
import BBMS.Model.LoginUser;
import BBMS.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    UserDao userDao;


    public String save(LoginUser user) {
        try{
            return "valid";
        } catch (Exception e) {
            return "invalid";
        }
    }
}
