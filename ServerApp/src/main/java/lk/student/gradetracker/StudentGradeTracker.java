package lk.student.gradetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class StudentGradeTracker {

	public static void main(String[] args) {
		SpringApplication.run(StudentGradeTracker.class, args);
	}

}
