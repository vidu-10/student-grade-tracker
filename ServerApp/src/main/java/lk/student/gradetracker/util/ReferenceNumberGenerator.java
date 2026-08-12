package lk.student.gradetracker.util;

import lk.student.gradetracker.dao.ReferencesequenceDao;
import lk.student.gradetracker.entity.Referencesequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Component
public class ReferenceNumberGenerator {
    @Autowired
    private ReferencesequenceDao referencesequenceDao;

    @Transactional
    public String generate(String type, String prefix) {

        //Gets the current calendar year as a plain integer
        int year = LocalDate.now().getYear();

        Referencesequence seq = referencesequenceDao.findByTypeAndYearForUpdate(type, year)
                .orElseGet(() -> {
                    Referencesequence newSeq = new Referencesequence();
                    newSeq.setType(type);
                    newSeq.setYear(year);
                    newSeq.setLastnumber(0);
                    return newSeq;
                });

        seq.setLastnumber(seq.getLastnumber() + 1);
        referencesequenceDao.save(seq);

        return String.format("%s-%d-%04d", prefix, year, seq.getLastnumber());
    }
}
