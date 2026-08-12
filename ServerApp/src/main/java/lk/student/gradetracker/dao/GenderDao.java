package lk.student.gradetracker.dao;

import lk.student.gradetracker.entity.Gender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenderDao extends JpaRepository<Gender,Integer> {

}

