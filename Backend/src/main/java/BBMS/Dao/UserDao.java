package BBMS.Dao;


import BBMS.Model.LoginUser;
import BBMS.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<LoginUser, Integer> {

}
