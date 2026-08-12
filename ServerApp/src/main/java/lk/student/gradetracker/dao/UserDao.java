package lk.student.gradetracker.dao;


import lk.student.gradetracker.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserDao extends JpaRepository<User,Integer> {
    User findByUsername(String username);

    @Query("select c from User c where c.id = :id")
    User findByMyId(@Param("id") Integer id);
}
