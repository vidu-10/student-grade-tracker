package lk.student.gradetracker.dao;

import lk.student.gradetracker.entity.Referencesequence;
import lk.student.gradetracker.entity.ReferencesequencePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.LockModeType;
import java.util.Optional;

public interface ReferencesequenceDao extends JpaRepository<Referencesequence, ReferencesequencePK> {


    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT s FROM Referencesequence s WHERE s.type = :type AND s.year = :year")
    Optional<Referencesequence> findByTypeAndYearForUpdate(@Param("type") String type, @Param("year") Integer year);
}