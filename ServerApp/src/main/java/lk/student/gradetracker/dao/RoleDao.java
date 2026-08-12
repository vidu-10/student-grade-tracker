package lk.student.gradetracker.dao;


import lk.student.gradetracker.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleDao extends JpaRepository<Role,Integer> {

}

