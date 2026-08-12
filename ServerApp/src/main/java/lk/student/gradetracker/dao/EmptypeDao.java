package lk.student.gradetracker.dao;

import lk.student.gradetracker.entity.Emptype;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmptypeDao extends JpaRepository<Emptype,Integer> {
}
