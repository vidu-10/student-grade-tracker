package lk.student.gradetracker.dao;

import lk.student.gradetracker.entity.Module;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ModuleDao extends JpaRepository<Module,Integer> {
}
