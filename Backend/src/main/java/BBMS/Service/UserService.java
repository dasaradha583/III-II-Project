package BBMS.Service;


import BBMS.Dao.UserDao;
import BBMS.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    UserDao userDao;


    public String save(User user) {
        try{
            userDao.save(user);
            return "valid";
        } catch (Exception e) {
            return "invalid";
        }
    }
}
