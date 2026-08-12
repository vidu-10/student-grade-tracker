package lk.student.gradetracker.dao;

import lk.student.gradetracker.entity.Empstatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpstatusDao extends JpaRepository<Empstatus,Integer> {

}

