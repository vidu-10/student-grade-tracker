package lk.student.gradetracker.dao;

import lk.student.gradetracker.entity.Opetype;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpetypeDao extends JpaRepository<Opetype,Integer> {
}
