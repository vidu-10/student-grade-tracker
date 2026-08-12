package lk.student.gradetracker.dao;

import lk.student.gradetracker.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NotificationDao extends JpaRepository<Notification, Integer> {

    List<Notification> findByRoleAndIsread(String role, Boolean isread);
    List<Notification> findByRole(String role);

    @Query("select n from Notification n where n.id = :id")
    Notification findByMyId(@Param("id") Integer id);
}